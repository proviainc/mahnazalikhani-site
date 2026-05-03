import type { ReactNode } from 'react';
import Link from 'next/link';

import { DesktopPrimaryNav, MobilePrimaryNav } from './primary-nav';
import { siteConfig, type SiteLink } from '../site.config';

function TrackedLink({
  link,
  className,
  children,
}: {
  link: SiteLink;
  className?: string;
  children?: ReactNode;
}) {
  const isExternal = link.external || link.href.startsWith('http');
  const content = children ?? link.label;

  if (isExternal) {
    return (
      <a
        className={className}
        href={link.href}
        target="_blank"
        rel="noreferrer"
        data-event={link.event}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={link.href} data-event={link.event}>
      {content}
    </Link>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-warmIvory/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-espresso">
          {siteConfig.logo.text}
        </Link>
        <DesktopPrimaryNav />
        <div className="hidden items-center gap-3 lg:flex">
          <TrackedLink link={siteConfig.secondaryCta} className="text-sm font-semibold text-deepTeal transition hover:text-copper" />
          <TrackedLink link={siteConfig.primaryCta} className="btn-primary" />
        </div>
        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-espresso/15 px-4 py-2 text-sm font-semibold text-espresso">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 grid w-64 gap-2 rounded-3xl border border-espresso/10 bg-warmIvory p-4 shadow-soft">
            <MobilePrimaryNav />
            <TrackedLink link={siteConfig.secondaryCta} className="rounded-2xl px-3 py-2 text-sm font-semibold text-deepTeal hover:bg-softSand" />
            <TrackedLink link={siteConfig.primaryCta} className="btn-primary mt-2 text-center" />
          </div>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-espresso/10 bg-espresso text-warmIvory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl font-semibold">{siteConfig.logo.text}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-warmIvory/72">
            Senior event strategy for complex corporate, luxury, hospitality, and business gatherings.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <TrackedLink link={siteConfig.primaryCta} className="btn-primary btn-on-dark" />
            <TrackedLink link={siteConfig.secondaryCta} className="btn-secondary btn-on-dark-secondary" />
          </div>
          <div className="mt-10 border-t border-warmIvory/15 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copperLight">Email</p>
            <p className="mt-3 text-sm text-warmIvory/85">
              <span className="text-warmIvory/55">Work </span>
              <a className="font-semibold text-warmIvory underline decoration-copper/50 underline-offset-2" href={`mailto:${siteConfig.contact.work.email}`}>
                {siteConfig.contact.work.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-warmIvory/85">
              <span className="text-warmIvory/55">Personal </span>
              <a className="font-semibold text-warmIvory underline decoration-copper/50 underline-offset-2" href={`mailto:${siteConfig.contact.personal.email}`}>
                {siteConfig.contact.personal.email}
              </a>
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {siteConfig.footerSections.map((section) => (
            <div key={section.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copperLight">{section.title}</p>
              <div className="mt-4 grid gap-3 text-sm text-warmIvory/72">
                {section.links.map((link) => (
                  <TrackedLink key={link.href} link={link} className="transition hover:text-warmIvory" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {siteConfig.engineeringAttribution ? (
        <div className="border-t border-warmIvory/10">
          <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6 lg:px-8">
            <a
              href={siteConfig.engineeringAttribution.href}
              className="text-xs text-warmIvory/55 underline-offset-2 transition hover:text-warmIvory hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.engineeringAttribution.label}
            </a>
          </div>
        </div>
      ) : null}
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export { TrackedLink };

