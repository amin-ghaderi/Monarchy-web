import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleView } from "@/components/editorial/article-view";
import {
  fetchAllMediaArticleSlugs,
  fetchMediaArticleBySlug,
} from "@/lib/sanity/fetchers";
import { createContentMetadata } from "@/lib/seo/metadata";

export const dynamicParams = true;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await fetchAllMediaArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchMediaArticleBySlug(slug);

  if (!article) {
    return { title: "مطلب یافت نشد" };
  }

  return createContentMetadata({
    title: article.titleFa,
    description: article.seo?.metaDescription ?? article.dekFa,
    path: `/media/${slug}`,
    seo: article.seo,
    ogType: "article",
  });
}

export default async function MediaArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await fetchMediaArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-ground">
      <ArticleView article={article} />
    </div>
  );
}
