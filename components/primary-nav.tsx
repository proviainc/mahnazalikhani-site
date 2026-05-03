'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '../site.config';

function isActiveNavItem(href: string, pathname: string) {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop: accent underline on current route (matches ProVia Hub / web-core pattern). */
export function DesktopPrimaryNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
      {siteConfig.navigation.map((link) => {
        const active = isActiveNavItem(link.href, pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={`relative pb-1 text-sm font-medium transition hover:text-copper ${
              active ? 'text-espresso' : 'text-muted'
            }`}
          >
            {link.label}
            <span
              className={`absolute inset-x-0 -bottom-[10px] h-0.5 rounded-full transition ${
                active ? 'bg-copper opacity-100' : 'bg-transparent opacity-0'
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}

/** Mobile menu: background highlight on current route. */
export function MobilePrimaryNav() {
  const pathname = usePathname();

  return (
    <>
      {siteConfig.navigation.map((link) => {
        const active = isActiveNavItem(link.href, pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={`rounded-2xl px-3 py-2 text-sm font-semibold transition ${
              active ? 'bg-softSand text-espresso' : 'text-espresso hover:bg-softSand'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
