import type { MetadataRoute } from 'next';

import { pages } from '../lib/site-data';
import { siteConfig } from '../site.config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: new URL(page.pathname, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: page.pathname === '/' ? 'monthly' : 'yearly',
    priority: page.pathname === '/' ? 1 : 0.7,
  }));
}
