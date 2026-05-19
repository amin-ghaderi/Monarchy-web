import { getHistoryEras } from "@/lib/content/history-data";
import { TimelineDesktop } from "@/components/history/timeline-desktop";
import { TimelineMobile } from "@/components/history/timeline-mobile";

export function HistoryTimeline() {
  const eras = getHistoryEras();

  return (
    <>
      <TimelineDesktop eras={eras} />
      <TimelineMobile eras={eras} />
    </>
  );
}
