import Link from "next/link";

import { StatementCard } from "@/components/archive/statement-card";
import { HomeSection } from "@/components/home/home-section";
import type { StatementListItem } from "@/types/content";
import { cn } from "@/lib/utils";

type HomeLatestStatementProps = {
  statement: StatementListItem;
};

export function HomeLatestStatement({ statement }: HomeLatestStatementProps) {
  return (
    <HomeSection id="latest-statement" className="bg-ground">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-mist pb-6">
        <header>
          <p className="text-[length:var(--font-size-label)] font-medium text-meta">
            انتشارات رسمی
          </p>
          <h2 className="mt-1 text-[length:var(--font-size-h2)] font-semibold text-ink">
            آخرین بیانیه
          </h2>
        </header>
        <Link
          href="/archive"
          className={cn(
            "text-[length:var(--font-size-meta)] font-medium text-link hover:underline",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
          )}
        >
          آرشیو بیانیه‌ها
        </Link>
      </div>

      <div className="mt-8">
        <StatementCard statement={statement} variant="featured" />
      </div>
    </HomeSection>
  );
}
