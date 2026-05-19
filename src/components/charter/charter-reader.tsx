import { amiri } from "@/lib/fonts";
import type { CharterDocument } from "@/types/content";
import { cn } from "@/lib/utils";
import { EditorialPortableText } from "@/components/editorial/portable-text";
import { DocumentActions } from "@/components/editorial/document-actions";
import { formatPublicationDates } from "@/lib/dates";

type CharterReaderProps = {
  document: CharterDocument;
};

export function CharterReader({ document }: CharterReaderProps) {
  const dates = formatPublicationDates(document.effectiveDate);
  const useNaskh = document.useNaskh;

  return (
    <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-6 lg:py-16">
      <header className="mb-10 max-w-[42rem]">
        <p className="mb-3 text-sm text-meta">
          نسخه {document.versionLabel} · {dates.jalali}
        </p>
        <h1 className="text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-heading)] text-ink">
          {document.titleFa}
        </h1>
        {document.leadFa ? (
          <p className="mt-4 text-[length:var(--font-size-lead)] leading-[var(--line-height-body)] text-meta">
            {document.leadFa}
          </p>
        ) : null}
        <div className="mt-6 h-px w-12 bg-gold-500" aria-hidden />
      </header>

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        {document.sections && document.sections.length > 0 ? (
          <aside className="lg:w-56 lg:shrink-0">
            <nav aria-label="فهرست مطالب" className="rounded-md bg-surface-sunken p-4">
              <p className="mb-3 text-label font-medium text-ink-secondary">فهرست</p>
              <ul className="space-y-2 text-sm">
                {document.sections.map((section) => (
                  <li key={section.anchor}>
                    <a
                      href={`#${section.anchor}`}
                      className="text-link hover:underline"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mt-4 text-xs text-meta lg:hidden">
              فهرست کامل در نسخه‌های بعدی بهبود می‌یابد.
            </p>
          </aside>
        ) : null}

        <div
          className={cn(
            "min-w-0 flex-1 max-w-[42rem]",
            useNaskh && amiri.className,
            useNaskh && "text-[length:var(--font-size-body-legal)] leading-[var(--line-height-body-legal)]",
          )}
        >
          {document.sections?.length
            ? document.sections.map((section) => (
                <section key={section.anchor} id={section.anchor} className="mb-12 scroll-mt-24">
                  <h2 className="mb-4 text-[length:var(--font-size-h2)] font-semibold text-ink">
                    {section.title}
                  </h2>
                  <EditorialPortableText value={section.body} />
                </section>
              ))
            : document.bodyFa
              ? <EditorialPortableText value={document.bodyFa} />
              : null}

          <DocumentActions pdfUrl={document.pdfUrl} title={document.titleFa} />
        </div>
      </div>
    </article>
  );
}
