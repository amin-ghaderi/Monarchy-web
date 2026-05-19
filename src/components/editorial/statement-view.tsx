import { statementTypeLabels } from "@/lib/content/statement-labels";
import type { StatementDocument } from "@/types/content";
import { AuthorsRow } from "@/components/editorial/authors-row";
import { Breadcrumb } from "@/components/editorial/breadcrumb";
import { DocumentActions } from "@/components/editorial/document-actions";
import { MetadataRow } from "@/components/editorial/metadata-row";
import { EditorialPortableText } from "@/components/editorial/portable-text";
import { ReadingContainer } from "@/components/editorial/reading-container";

type StatementViewProps = {
  statement: StatementDocument;
};

export function StatementView({ statement }: StatementViewProps) {
  const typeLabel = statementTypeLabels[statement.statementType];

  return (
    <ReadingContainer>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "خانه", href: "/" },
          { label: "بیانیه‌ها", href: "/archive" },
          { label: typeLabel },
        ]}
      />

      <header className="mb-10">
        <MetadataRow typeLabel={typeLabel} publishedAt={statement.publishedAt} />
        <h1 className="mt-6 text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-heading)] text-ink">
          {statement.titleFa}
        </h1>
        <div className="mt-4 h-px w-12 bg-gold-500" aria-hidden />
        {statement.titleEn ? (
          <p className="mt-4 font-latin text-base text-meta" lang="en" dir="ltr">
            {statement.titleEn}
          </p>
        ) : null}
      </header>

      <AuthorsRow authors={statement.authors} />

      <div className="mt-10 bg-surface-paper px-1 py-2 sm:px-2">
        <EditorialPortableText value={statement.bodyFa} />
      </div>

      <div className="mt-10">
        <DocumentActions pdfUrl={statement.pdfUrl} title={statement.titleFa} />
      </div>
    </ReadingContainer>
  );
}
