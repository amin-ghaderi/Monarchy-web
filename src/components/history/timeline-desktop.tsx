import type { HistoryEra } from "@/types/history";
import { EraContent } from "@/components/history/era-content";
import { cn } from "@/lib/utils";

type TimelineDesktopProps = {
  eras: HistoryEra[];
};

export function TimelineDesktop({ eras }: TimelineDesktopProps) {
  return (
    <div className="hidden md:block" aria-label="خط زمانی تاریخ ایران">
      <ol className="relative border-s-2 border-mist ps-8 lg:ps-10">
        {eras.map((era, index) => (
          <li
            key={era.id}
            id={era.slug}
            className={cn(
              "relative scroll-mt-24 pb-16 last:pb-0",
              index === 0 && "pt-0",
            )}
          >
            <span
              className="absolute -start-[0.5625rem] top-1.5 h-3 w-3 rounded-full border-2 border-lapis-600 bg-ground"
              aria-hidden
            />

            <header className="mb-6 max-w-3xl">
              <p className="text-[length:var(--font-size-label)] font-medium text-meta">
                {era.timeframe}
              </p>
              <h2 className="mt-1 text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] text-ink">
                {era.title}
              </h2>
            </header>

            <EraContent era={era} className="max-w-3xl" />
          </li>
        ))}
      </ol>
    </div>
  );
}
