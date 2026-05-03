import type { Metadata } from 'next';

import { siteConfig } from '../site.config';

export function pageMetadata({
  title,
  description,
  pathname,
  image,
  type,
}: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const absoluteUrl = new URL(pathname, siteConfig.url).toString();
  const imageUrl = new URL(image ?? siteConfig.seo.defaultImage, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      images: [{ url: imageUrl }],
      type: type ?? 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
