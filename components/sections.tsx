import type { ReactNode } from 'react';
import Image from 'next/image';

import { TrackedLink } from './page-shell';
import { siteConfig } from '../site.config';

type CardRole = 'default' | 'fit' | 'system' | 'proof' | 'process';

const cardRoleStyles: Record<
  CardRole,
  {
    accent: string;
    label: string;
    labelClass: string;
    cardClass: string;
  }
> = {
  default: {
    accent: '',
    label: '',
    labelClass: 'text-muted',
    cardClass: '',
  },
  fit: {
    accent: 'bg-copper',
    label: 'Fit',
    labelClass: 'text-copper',
    cardClass: 'bg-warmIvory',
  },
  system: {
    accent: 'bg-deepTeal',
    label: 'System',
    labelClass: 'text-deepTeal',
    cardClass: 'bg-softSand/35',
  },
  proof: {
    accent: 'bg-copperDark',
    label: 'Proof',
    labelClass: 'text-copperDark',
    cardClass: 'bg-warmIvory',
  },
  process: {
    accent: 'bg-deepTeal',
    label: 'Step',
    labelClass: 'text-deepTeal',
    cardClass: 'bg-warmIvory',
  },
};

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
  role = 'default',
}: {
  items: ReadonlyArray<{ title: string; description: string }>;
  role?: CardRole;
}) {
  const styles = cardRoleStyles[role];

  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`card group relative overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-soft ${styles.cardClass}`}
        >
          {role === 'process' ? (
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-deepTeal/20 bg-deepTeal/8 text-sm font-bold text-deepTeal">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={`text-xs font-bold uppercase tracking-[0.22em] ${styles.labelClass}`}>
                {styles.label}
              </span>
            </div>
          ) : styles.label ? (
            <p className={`mb-5 text-xs font-bold uppercase tracking-[0.22em] ${styles.labelClass}`}>
              {styles.label} {String(index + 1).padStart(2, '0')}
            </p>
          ) : null}
          {role === 'process' ? (
            <span className={`absolute inset-x-0 top-0 h-1 ${styles.accent}`} aria-hidden="true" />
          ) : null}
          {role !== 'default' && role !== 'process' ? (
            <span className={`absolute inset-y-7 left-0 w-1 rounded-r-full ${styles.accent}`} aria-hidden="true" />
          ) : null}
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
