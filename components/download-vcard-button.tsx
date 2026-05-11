'use client';

export function DownloadVcardButton({
  vcard,
  filename,
  className = '',
}: {
  vcard: string;
  filename: string;
  className?: string;
}) {
  function downloadVcard() {
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      className={`btn-secondary focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-warmIvory ${className}`}
      type="button"
      onClick={downloadVcard}
    >
      Save to Contacts
    </button>
  );
}
