import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

/**
 * Format dates for display. Jalali-primary formatting will be expanded in Sprint 1.
 */
export function formatDatePlaceholder(date: string | Date): string {
  return dayjs(date).calendar("jalali").locale("fa").format("D MMMM YYYY");
}
