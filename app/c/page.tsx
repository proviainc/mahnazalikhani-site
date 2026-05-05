import type { Metadata } from 'next';

import { ShortCardRedirect } from './short-card-redirect';
import { getCardPageUrl } from '../../lib/card-urls';

export const metadata: Metadata = {
  title: 'Mahnaz Alikhani Digital Card',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: getCardPageUrl(),
  },
};

export default function ShortCardPage() {
  return <ShortCardRedirect />;
}
