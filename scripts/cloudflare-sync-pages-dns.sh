#!/usr/bin/env bash
# Sync apex + www CNAME to Cloudflare Pages (REST API; Wrangler has no zone DNS commands).
# Requires CLOUDFLARE_API_TOKEN with Zone:DNS:Edit + Zone:Read on MAHNAZ_CF_ZONE_ID.
#
#   set -a && source ../proviahub-site/.env.local && set +a
#   export MAHNAZ_CF_ZONE_ID=...   # optional; default matches Pages-reported zone
#   bash scripts/cloudflare-sync-pages-dns.sh

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
exec python3 scripts/cloudflare_sync_pages_dns.py
