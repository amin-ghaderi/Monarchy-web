import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export type PeriodGroup<T> = {
  periodLabel: string;
  periodKey: string;
  items: T[];
};

export function groupByJalaliYear<T extends { publishedAt: string }>(
  items: T[],
): PeriodGroup<T>[] {
  const map = new Map<string, PeriodGroup<T>>();

  for (const item of items) {
    const periodKey = dayjs(item.publishedAt).calendar("jalali").format("YYYY");
    const periodLabel = `سال ${periodKey}`;

    const existing = map.get(periodKey);
    if (existing) {
      existing.items.push(item);
    } else {
      map.set(periodKey, { periodKey, periodLabel, items: [item] });
    }
  }

  return [...map.values()].sort((a, b) => Number(b.periodKey) - Number(a.periodKey));
}
