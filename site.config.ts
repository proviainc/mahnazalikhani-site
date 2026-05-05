export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
  event?: string;
};

export const siteConfig = {
  name: 'Mahnaz Alikhani',
  description:
    'Senior event strategist helping high-stakes event teams bring structure, guest experience, and event-day control to complex gatherings.',
  logo: {
    text: 'Mahnaz Alikhani',
    alt: 'Mahnaz Alikhani',
    href: '/',
  },
  /** Approved studio portrait, hero, About, and default Open Graph image. */
  portrait: {
    src: '/uploads/mahnaz-alikhani-portrait.png',
    alt: 'Mahnaz Alikhani, senior event planner and strategist, professional portrait.',
  },
  url: 'https://mahnazalikhani.com',
  /** Apex is canonical; `www` → apex is enforced in `public/_worker.js` (Pages advanced mode). */
  contact: {
    work: {
      label: 'mahnaz@proviaevents.com',
      email: 'mahnaz@proviaevents.com',
    },
    personal: {
      label: 'mahnaz.alikhani53@gmail.com',
      email: 'mahnaz.alikhani53@gmail.com',
    },
    /** vCard-only phone; intentionally omitted from public HTML, metadata, and structured data. */
    phoneVcardOnly: '+16479965350',
  },
  primaryCta: {
    label: 'Book Consultation',
    href: 'https://calendly.com/mahnazalikhani/event-strategy',
    external: true,
    event: 'calendly_cta_click',
  },
  secondaryCta: {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/mahnazalikhani/',
    external: true,
    event: 'linkedin_click',
  },
  navigation: [
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'Event Strategy', href: '/event-strategy' },
  ],
  footerSections: [
    {
      title: 'Pages',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Experience', href: '/experience' },
        { label: 'Speaking', href: '/speaking' },
        { label: 'Event Strategy', href: '/event-strategy' },
        { label: 'Card', href: '/card' },
      ],
    },
    {
      title: 'Trust Links',
      links: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/mahnazalikhani/',
          external: true,
          event: 'linkedin_click',
        },
        {
          label: 'ProVia Events',
          href: 'https://proviaevents.com/',
          external: true,
          event: 'proviaevents_outbound_click',
        },
        {
          label: 'EventAgent',
          href: 'https://eventagent.io/',
          external: true,
          event: 'eventagent_outbound_click',
        },
      ],
    },
  ],
  /** Sitewide attribution; align with ProVia site template / web-core `Footer`. */
  engineeringAttribution: {
    label: 'Engineering: ProVia Hub',
    href: 'https://proviahub.com',
  },
  theme: {
    primary: '#A8643D',
    secondary: '#245E5A',
    accent: '#7D472B',
    surface: '#FBF7EF',
    text: '#2A211C',
    muted: '#514A45',
  },
  typography: {
    display: 'Cormorant Garamond',
    sans: 'Inter',
  },
  seo: {
    defaultTitle: 'Mahnaz Alikhani | Event Strategy For High-Stakes Gatherings',
    defaultDescription:
      'Mahnaz Alikhani helps corporate, luxury, hospitality, and business-event teams bring structure, guest experience, and event-day control to complex gatherings.',
    defaultImage: '/uploads/mahnaz-alikhani-portrait.png',
  },
  /** v1 personal site: no Plausible/GA (stakeholder decision Feb 2026). */
  analytics: {},
} satisfies {
  name: string;
  description: string;
  logo: { text: string; alt: string; href: string };
  portrait: { src: string; alt: string };
  url: string;
  contact: {
    work: { label: string; email: string };
    personal: { label: string; email: string };
    phoneVcardOnly?: string;
  };
  primaryCta: SiteLink;
  secondaryCta: SiteLink;
  navigation: SiteLink[];
  footerSections: Array<{ title: string; links: SiteLink[] }>;
  engineeringAttribution?: { label: string; href: string };
  theme: Record<string, string>;
  typography: Record<string, string>;
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    defaultImage: string;
  };
  analytics: Record<string, string>;
};
