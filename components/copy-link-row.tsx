'use client';

import { useEffect, useState } from 'react';

type CopyState = 'idle' | 'short' | 'page' | 'error';

export function CopyLinkRow({ shortUrl, pageUrl }: { shortUrl: string; pageUrl: string }) {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  useEffect(() => {
    if (copyState === 'idle') {
      return undefined;
    }
    const timeout = window.setTimeout(() => setCopyState('idle'), 2800);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  async function copy(value: string, state: CopyState) {
    if (!navigator.clipboard) {
      setCopyState('error');
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopyState(state);
    } catch {
      setCopyState('error');
    }
  }

  const message =
    copyState === 'short'
      ? 'Short link copied.'
      : copyState === 'page'
        ? 'Page URL copied.'
        : copyState === 'error'
          ? 'Copy unavailable. Select the link below.'
          : '';

  return (
    <div className="print:hidden">
      <div className="flex flex-wrap justify-center gap-3 md:justify-start">
        <button
          className="inline-flex items-center rounded-full border border-espresso/15 px-4 py-2 text-sm font-bold text-espresso transition hover:border-copper hover:text-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-warmIvory"
          type="button"
          onClick={() => copy(shortUrl, 'short')}
        >
          {copyState === 'short' ? 'Copied short link' : 'Copy short link'}
        </button>
        <button
          className="inline-flex items-center rounded-full border border-espresso/15 px-4 py-2 text-sm font-bold text-espresso transition hover:border-copper hover:text-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-warmIvory"
          type="button"
          onClick={() => copy(pageUrl, 'page')}
        >
          {copyState === 'page' ? 'Copied page URL' : 'Copy page URL'}
        </button>
      </div>
      <p className="mt-3 min-h-5 text-center text-xs font-semibold text-deepTeal md:text-left" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
