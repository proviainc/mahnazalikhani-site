import type { ReactNode } from 'react';
import Image from 'next/image';

import { TrackedLink } from './page-shell';
import { siteConfig } from '../site.config';

/**
 * Editorial hero portrait: studio background aligns with a calm, premium frame;
 * object position keeps face as the focal point across breakpoints.
 */
export function HeroPortrait({ priority = false }: { priority?: boolean }) {
  const { src, alt } = siteConfig.portrait;
  return (
    <figure className="mx-auto w-full max-w-md">
      <div className="relative overflow-hidden rounded-[2rem] border border-espresso/10 bg-[#E4E2DE] shadow-soft ring-1 ring-copper/15">
        <div className="relative aspect-[3/4] w-full max-h-[min(36rem,78svh)]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-[center_18%] sm:object-[center_22%]"
            sizes="(max-width: 1024px) 92vw, 28rem"
          />
        </div>
      </div>
    </figure>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  portraitPriority = false,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  /** LCP: set true on the home hero only. */
  portraitPriority?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="section-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 display-heading">{title}</h1>
        <p className="mt-7 max-w-2xl body-large">{description}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <TrackedLink link={siteConfig.primaryCta} className="btn-primary" />
          <TrackedLink link={siteConfig.secondaryCta} className="btn-secondary" />
        </div>
      </div>
      <div className="rounded-[2.5rem] border border-espresso/10 bg-gradient-to-br from-[#EDE9E4] via-softSand to-warmIvory p-6 shadow-soft sm:p-8">
        {children ?? <HeroPortrait priority={portraitPriority} />}
      </div>
    </section>
  );
}

export function ProofStrip({ items }: { items: readonly string[] }) {
  return (
    <section className="border-y border-espresso/10 bg-espresso text-warmIvory">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-7 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <p key={item} className="text-sm font-semibold uppercase tracking-[0.18em] text-warmIvory/82">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 section-heading">{title}</h2>
      {description ? <p className="mt-8 body-large md:mt-9">{description}</p> : null}
    </div>
  );
}

export function CardGrid({
  items,
}: {
  items: ReadonlyArray<{ title: string; description: string }>;
}) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="card">
          <h3 className="font-display text-3xl font-semibold text-espresso">{item.title}</h3>
          <p className="mt-4 text-base leading-8 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function CTASection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="section-shell">
      <div className="rounded-[2.5rem] bg-deepTeal p-8 text-warmIvory shadow-soft sm:p-12 lg:p-16">
        <p className="eyebrow text-copperLight">Next Step</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-warmIvory/78">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TrackedLink link={siteConfig.primaryCta} className="btn-primary btn-on-dark" />
          <TrackedLink link={siteConfig.secondaryCta} className="btn-secondary btn-on-dark-secondary" />
        </div>
      </div>
    </section>
  );
}
