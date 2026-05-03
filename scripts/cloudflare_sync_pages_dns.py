#!/usr/bin/env python3
"""Create proxied apex + www CNAMEs to Cloudflare Pages. See cloudflare-sync-pages-dns.sh."""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.request

TOKEN = os.environ.get("CLOUDFLARE_API_TOKEN")
ZONE_ID = os.environ.get("MAHNAZ_CF_ZONE_ID", "e3230bdc61a5d7ffccf840f32560d650")
TARGET = os.environ.get("PAGES_CNAME_TARGET", "mahnazalikhani-site.pages.dev")

NAMES_TO_REPLACE = frozenset({"@", "www", "mahnazalikhani.com", "www.mahnazalikhani.com"})


def cf(method: str, path: str, body: object | None = None) -> dict:
    if not TOKEN:
        print("CLOUDFLARE_API_TOKEN is required", file=sys.stderr)
        sys.exit(1)
    url = f"https://api.cloudflare.com/client/v4{path}"
    data = None if body is None else json.dumps(body).encode()
    req = urllib.request.Request(
        url,
        data=data,
        method=method,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        err = e.read().decode()
        print(f"HTTP {e.code}: {err}", file=sys.stderr)
        sys.exit(1)


def main() -> None:
    res = cf("GET", f"/zones/{ZONE_ID}/dns_records?type=CNAME&per_page=100")
    if not res.get("success"):
        print(res, file=sys.stderr)
        sys.exit(1)
    for r in res.get("result", []):
        if r.get("type") != "CNAME":
            continue
        if r.get("name") not in NAMES_TO_REPLACE:
            continue
        rid = r["id"]
        d = cf("DELETE", f"/zones/{ZONE_ID}/dns_records/{rid}")
        if not d.get("success"):
            print(d, file=sys.stderr)
            sys.exit(1)
        print("deleted", r.get("name"), "->", r.get("content"))

    for name in ("@", "www"):
        body = {
            "type": "CNAME",
            "name": name,
            "content": TARGET,
            "proxied": True,
            "ttl": 1,
        }
        res = cf("POST", f"/zones/{ZONE_ID}/dns_records", body)
        if not res.get("success"):
            print(res, file=sys.stderr)
            sys.exit(1)
        r = res["result"]
        print("created", r["name"], "CNAME ->", r["content"], "proxied=", r["proxied"])


if __name__ == "__main__":
    main()
