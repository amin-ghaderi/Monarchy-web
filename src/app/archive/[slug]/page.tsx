import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StatementView } from "@/components/editorial/statement-view";
import {
  fetchAllStatementSlugs,
  fetchStatementBySlug,
} from "@/lib/sanity/fetchers";
import { createContentMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await fetchAllStatementSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const statement = await fetchStatementBySlug(slug);

  if (!statement) {
    return { title: "بیانیه یافت نشد" };
  }

  return createContentMetadata({
    title: statement.titleFa,
    description: statement.seo?.metaDescription,
    path: `/archive/${slug}`,
    seo: statement.seo,
    ogType: "article",
  });
}

export default async function StatementPage({ params }: PageProps) {
  const { slug } = await params;
  const statement = await fetchStatementBySlug(slug);

  if (!statement) {
    notFound();
  }

  return (
    <main className="min-h-full bg-ground">
      <StatementView statement={statement} />
    </main>
  );
}
