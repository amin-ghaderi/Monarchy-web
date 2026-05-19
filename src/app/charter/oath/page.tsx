import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CharterReader } from "@/components/charter/charter-reader";
import { Breadcrumb } from "@/components/editorial/breadcrumb";
import { fetchCharterBySlug } from "@/lib/sanity/fetchers";
import { createContentMetadata } from "@/lib/seo/metadata";

const SLUG = "oath";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await fetchCharterBySlug(SLUG);
  if (!doc) return { title: "سوگندنامه" };

  return createContentMetadata({
    title: doc.titleFa,
    description: doc.seo?.metaDescription ?? doc.leadFa,
    path: `/charter/${SLUG}`,
    seo: doc.seo,
  });
}

export default async function CharterOathPage() {
  const doc = await fetchCharterBySlug(SLUG);
  if (!doc) notFound();

  return (
    <main className="min-h-full bg-surface-paper">
      <div className="border-b border-mist bg-ground">
        <div className="mx-auto max-w-4xl px-5 py-6 sm:px-6">
          <Breadcrumb
            items={[
              { label: "خانه", href: "/" },
              { label: "اسناد", href: "/charter" },
              { label: doc.titleFa },
            ]}
          />
        </div>
      </div>
      <CharterReader document={doc} />
    </main>
  );
}
