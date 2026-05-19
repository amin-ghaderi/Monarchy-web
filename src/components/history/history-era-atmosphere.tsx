import { getEraAtmosphereClass } from "@/lib/history/era-atmosphere";
import { cn } from "@/lib/utils";

type HistoryEraAtmosphereProps = {
  slug: string;
  index: number;
};

export function HistoryEraAtmosphere({ slug, index }: HistoryEraAtmosphereProps) {
  const washClass = getEraAtmosphereClass(slug, index);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className={cn("ac-history-era-surface absolute inset-0", washClass)}>
        <div className="ac-history-era-grain" />
      </div>
    </div>
  );
}
