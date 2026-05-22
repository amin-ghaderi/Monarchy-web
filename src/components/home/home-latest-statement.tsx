"use client";

import Link from "next/link";

import { EditorialSectionMasthead } from "@/components/editorial/editorial-section-masthead";
import { FeaturedPublication } from "@/components/home/featured-publication";
import { HomeReveal } from "@/components/home/home-reveal";
import { HomeSection } from "@/components/home/home-section";
import { editorialTextLink } from "@/lib/editorial/styles";
import type { StatementListItem } from "@/types/content";

type HomeLatestStatementProps = {
  statement: StatementListItem;
};

export function HomeLatestStatement({ statement }: HomeLatestStatementProps) {
  return (
    <HomeSection
      id="latest-statement"
      tone="default"
      className="ac-proof-return py-16 sm:py-20 lg:py-24"
    >
      <HomeReveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <EditorialSectionMasthead
            label="انتشارات رسمی"
            title="آخرین بیانیه"
            className="mb-0"
          />
          <Link href="/archive" className={`${editorialTextLink} shrink-0 text-sm`}>
            آرشیو بیانیه‌ها
          </Link>
        </div>
        <FeaturedPublication statement={statement} />
      </HomeReveal>
    </HomeSection>
  );
}
