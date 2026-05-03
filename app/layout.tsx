import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';

import './globals.css';
import { pageMetadata } from '../lib/metadata';
import { siteConfig } from '../site.config';

export const metadata: Metadata = pageMetadata({
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  pathname: '/',
  image: siteConfig.seo.defaultImage,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const portraitUrl = new URL(siteConfig.portrait.src, siteConfig.url).toString();

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mahnaz Alikhani',
    url: siteConfig.url,
    image: portraitUrl,
    email: siteConfig.contact.work.email,
    jobTitle: 'Senior Event Planner and Event Strategist',
    sameAs: [
      'https://www.linkedin.com/in/mahnazalikhani/',
      'https://proviaevents.com/',
      'https://eventagent.io/',
    ],
  };
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Event Strategy Consultation',
    provider: {
      '@type': 'Person',
      name: 'Mahnaz Alikhani',
    },
    areaServed: 'Canada',
    serviceType: 'Event strategy and event planning consultation',
    url: new URL('/event-strategy', siteConfig.url).toString(),
  };

  return (
    <html
      lang="en"
      style={
        {
          '--brand-primary': siteConfig.theme.primary,
          '--brand-secondary': siteConfig.theme.secondary,
          '--brand-accent': siteConfig.theme.accent,
          '--brand-surface': siteConfig.theme.surface,
          '--brand-text': siteConfig.theme.text,
          '--brand-muted': siteConfig.theme.muted,
          '--font-display': siteConfig.typography.display,
          '--font-sans': siteConfig.typography.sans,
        } as CSSProperties
      }
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, serviceSchema]),
          }}
        />
      </body>
    </html>
  );
}
