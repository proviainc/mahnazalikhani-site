import Image from 'next/image';

import { CopyLinkRow } from '../../components/copy-link-row';
import { DownloadVcardButton } from '../../components/download-vcard-button';
import { TrackedLink } from '../../components/page-shell';
import { BreadcrumbJsonLd } from '../../components/structured-data';
import { getCardPageUrl, getShortCardEntryUrl } from '../../lib/card-urls';
import { pageMetadata } from '../../lib/metadata';
import { renderCardQrSvg } from '../../lib/qr-card';
import { buildVcard, getSiteJobTitle, getVcardFilename } from '../../lib/vcard';
import { siteConfig } from '../../site.config';

const cardTitle = `${siteConfig.name} Digital Business Card`;
const cardDescription = `Save contact details for ${siteConfig.name}, senior event planner and event strategist.`;

export const metadata = pageMetadata({
  title: cardTitle,
  description: cardDescription,
  pathname: '/card',
  image: siteConfig.seo.defaultImage,
});

export default function CardPage() {
  const pageUrl = getCardPageUrl();
  const shortUrl = getShortCardEntryUrl();
  const qrSvg = renderCardQrSvg({ width: 260, margin: 3 });
  const vcard = buildVcard();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', pathname: '/' },
          { name: 'Card', pathname: '/card' },
        ]}
      />
      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16 print:max-w-none print:px-0 print:py-0">
        <article
          data-digital-card
          className="overflow-hidden rounded-[1.75rem] border border-espresso/10 bg-warmIvory shadow-soft print:rounded-xl print:shadow-none"
        >
          <div className="h-2 bg-gradient-to-r from-copper via-deepTeal to-copperDark print:h-1" aria-hidden="true" />
          <div className="grid gap-10 p-6 sm:p-8 md:grid-cols-[1.15fr_0.85fr] md:items-center lg:p-10">
            <div className="text-center md:text-left">
              <p className="eyebrow print:hidden">Digital Card</p>
              <div className="mx-auto mt-6 size-28 overflow-hidden rounded-full border border-espresso/10 bg-softSand md:mx-0">
                <Image
                  src={siteConfig.portrait.src}
                  alt={siteConfig.portrait.alt}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-none text-espresso sm:text-6xl">{siteConfig.name}</h1>
              <p className="mt-4 text-lg font-semibold text-deepTeal">{getSiteJobTitle()}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted">Toronto, Ontario, Canada</p>
              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted md:mx-0">{siteConfig.description}</p>
              <p className="mx-auto mt-5 max-w-xl rounded-full border border-copper/20 bg-copper/10 px-4 py-2 text-sm font-semibold text-espresso md:mx-0">
                Focus: corporate, luxury, hospitality, and high-stakes business gatherings.
              </p>

              <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 min-[460px]:grid-cols-2 md:mx-0 print:hidden">
                <TrackedLink link={siteConfig.primaryCta} className="btn-primary w-full" />
                <DownloadVcardButton vcard={vcard} filename={getVcardFilename()} className="w-full" />
                <a className="btn-secondary w-full" href="/">
                  Visit Mahnaz's Website
                </a>
                <TrackedLink link={siteConfig.secondaryCta} className="btn-secondary w-full" />
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-espresso/10">
                <h2 className="sr-only">Email</h2>
                <div className="grid divide-y divide-espresso/10 text-left text-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <a className="p-4 transition hover:bg-softSand/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper" href={`mailto:${siteConfig.contact.work.email}`}>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted">Work</span>
                    <span className="mt-2 block font-semibold text-espresso">{siteConfig.contact.work.email}</span>
                  </a>
                  <a className="p-4 transition hover:bg-softSand/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper" href={`mailto:${siteConfig.contact.personal.email}`}>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted">Personal</span>
                    <span className="mt-2 block font-semibold text-espresso">{siteConfig.contact.personal.email}</span>
                  </a>
                </div>
              </div>

              <section className="mt-8 text-left print:hidden" aria-labelledby="card-routing-heading">
                <div className="rounded-2xl border border-espresso/10 bg-softSand/45 p-4">
                  <p id="card-routing-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                    Choose the right path
                  </p>
                  <div className="mt-4 grid gap-3">
                    {siteConfig.cardRoutingLinks.map((link) => (
                      <TrackedLink
                        key={link.href}
                        link={link}
                        className="group rounded-xl border border-espresso/10 bg-warmIvory/70 p-4 transition hover:border-copper/45 hover:bg-warmIvory focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                      >
                        <span className="block text-sm font-bold text-espresso transition group-hover:text-copper">{link.label}</span>
                        <span className="mt-1 block text-sm leading-6 text-muted">{link.description}</span>
                      </TrackedLink>
                    ))}
                  </div>
                </div>
              </section>

              <div className="mt-8">
                <CopyLinkRow shortUrl={shortUrl} pageUrl={pageUrl} />
              </div>

              <details className="mt-3 text-left print:hidden">
                <summary className="cursor-pointer text-sm font-bold text-deepTeal underline decoration-copper/40 underline-offset-4">
                  Share & copy links
                </summary>
                <div className="mt-3 space-y-2 rounded-2xl border border-espresso/10 bg-softSand/45 p-4 font-mono text-xs leading-6 text-muted">
                  <p>{shortUrl}</p>
                  <p>{pageUrl}</p>
                </div>
              </details>
            </div>

            <aside className="rounded-[1.5rem] border border-espresso/10 bg-white/65 p-5 text-center shadow-sm print:bg-white print:shadow-none">
              <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-copper">Scan to save</h2>
              <div
                className="mx-auto mt-5 inline-flex rounded-2xl bg-warmIvory p-4"
                role="img"
                aria-label={`QR code for ${shortUrl}`}
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
              <p className="mt-4 break-all font-mono text-xs text-muted print:hidden">{shortUrl}</p>
              <div className="mt-6 hidden border-t border-espresso/10 pt-5 text-left print:block">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Links</p>
                <p className="mt-3 break-all font-mono text-xs text-espresso">{shortUrl}</p>
                <p className="mt-2 break-all font-mono text-xs text-espresso">{pageUrl}</p>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </>
  );
}
