"use client";

type DocumentActionsProps = {
  pdfUrl?: string;
  title: string;
};

export function DocumentActions({ pdfUrl, title }: DocumentActionsProps) {
  return (
    <div className="flex flex-wrap gap-3 border-t border-mist pt-6">
      {pdfUrl ? (
        <a
          href={pdfUrl}
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-mist bg-surface-raised px-5 text-sm font-medium text-ink hover:border-lapis-600 hover:text-lapis-600"
          download
        >
          دانلود PDF
        </a>
      ) : (
        <span
          className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-sm border border-mist bg-surface-sunken px-5 text-sm text-meta"
          aria-disabled
        >
          PDF — به‌زودی
        </span>
      )}
      <button
        type="button"
        className="inline-flex min-h-12 items-center justify-center rounded-sm border border-mist bg-surface-raised px-5 text-sm font-medium text-ink hover:border-lapis-600 hover:text-lapis-600"
        onClick={() => window.print()}
        aria-label={`چاپ ${title}`}
      >
        چاپ
      </button>
    </div>
  );
}
