'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { getCardPagePath } from '../../lib/card-urls';

export function ShortCardRedirect() {
  const router = useRouter();
  const cardPath = getCardPagePath();

  useEffect(() => {
    router.replace(cardPath);
  }, [cardPath, router]);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow">Digital Card</p>
      <h1 className="mt-4 font-display text-5xl font-semibold text-espresso">Continue to card</h1>
      <a className="btn-primary mt-8" href={cardPath}>
        Continue
      </a>
    </main>
  );
}
