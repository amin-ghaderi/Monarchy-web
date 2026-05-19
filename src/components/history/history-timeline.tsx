import type { HistoryEra } from "@/types/history";
import { TimelineDesktop } from "@/components/history/timeline-desktop";
import { TimelineMobile } from "@/components/history/timeline-mobile";

type HistoryTimelineProps = {
  eras: HistoryEra[];
};

export function HistoryTimeline({ eras }: HistoryTimelineProps) {
  return (
    <>
      <TimelineDesktop eras={eras} />
      <TimelineMobile eras={eras} />
    </>
  );
}
