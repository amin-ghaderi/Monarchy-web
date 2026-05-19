import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export function formatJalaliDate(iso: string): string {
  return dayjs(iso).calendar("jalali").locale("fa").format("D MMMM YYYY");
}

export function formatGregorianDate(iso: string): string {
  return dayjs(iso).format("D MMMM YYYY");
}

export function formatPublicationDates(iso: string) {
  return {
    jalali: formatJalaliDate(iso),
    gregorian: formatGregorianDate(iso),
  };
}
