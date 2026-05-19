import { getEraThresholdClass } from "@/lib/history/era-atmosphere";
import { cn } from "@/lib/utils";

type HistoryEraThresholdProps = {
  fromSlug: string;
  toSlug: string;
};

/** Quiet band between eras — archival page turn (4–5vh). */
export function HistoryEraThreshold({ fromSlug, toSlug }: HistoryEraThresholdProps) {
  const thresholdClass = getEraThresholdClass(fromSlug, toSlug);

  return (
    <li className={cn("ac-history-threshold", thresholdClass)} aria-hidden>
      <span className="ac-history-threshold-spine" />
      <span className="ac-history-threshold-wash" />
    </li>
  );
}
