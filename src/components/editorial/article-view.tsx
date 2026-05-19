import { mediaArticleTypeLabels } from "@/lib/content/article-labels";
import { editorialBreadcrumbs } from "@/lib/editorial/breadcrumbs";
import type { MediaArticleDocument } from "@/types/content";
import { AuthorsRow } from "@/components/editorial/authors-row";
import { Breadcrumb } from "@/components/editorial/breadcrumb";
import { DocumentActions } from "@/components/editorial/document-actions";
import { HeroImagePlaceholder } from "@/components/editorial/hero-image-placeholder";
import { EditorialPortableText } from "@/components/editorial/portable-text";
import { PublicationMeta } from "@/components/editorial/publication-meta";
import { ReadingContainer } from "@/components/editorial/reading-container";
import { RelatedReading } from "@/components/editorial/related-reading";

type ArticleViewProps = {
  article: MediaArticleDocument;
};

export function ArticleView({ article }: ArticleViewProps) {
  const typeLabel = mediaArticleTypeLabels[article.articleType];

  return (
    <ReadingContainer>
      <Breadcrumb
        className="mb-8"
        items={[
          editorialBreadcrumbs.home(),
          editorialBreadcrumbs.media(),
          { label: typeLabel },
        ]}
      />

      <header className="mb-10">
        <PublicationMeta
          typeLabel={typeLabel}
          publishedAt={article.publishedAt}
          updatedAt={article.updatedAt}
          accent="lapis"
        />
        <h1 className="mt-6 text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-heading)] text-ink">
          {article.titleFa}
        </h1>
        {article.dekFa ? (
          <p className="mt-5 text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary">
            {article.dekFa}
          </p>
        ) : null}
        {article.titleEn ? (
          <p className="mt-4 font-latin text-base text-meta" lang="en" dir="ltr">
            {article.titleEn}
          </p>
        ) : null}
        {article.sourceLabel ? (
          <p className="mt-4 text-[length:var(--font-size-meta)] text-meta">
            منبع: {article.sourceLabel}
          </p>
        ) : null}
      </header>

      {article.showHeroImage ? <HeroImagePlaceholder /> : null}

      <AuthorsRow authors={article.authors} />

      <div className="mt-10 bg-surface-paper px-1 py-2 sm:px-2">
        <EditorialPortableText value={article.bodyFa} />
      </div>

      <div className="mt-10">
        <DocumentActions pdfUrl={article.pdfUrl} title={article.titleFa} />
      </div>

      <RelatedReading items={article.relatedReading} />
    </ReadingContainer>
  );
}
