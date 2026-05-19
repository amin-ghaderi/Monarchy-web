/**
 * Era slug → atmosphere class (era-tint-1…4, no gold on Pahlavi II).
 */

export const ERA_ATMOSPHERE_CLASS = {
  mashruteh: "ac-era-wash-1",
  "pahlavi-first": "ac-era-wash-2",
  "pahlavi-second": "ac-era-wash-4",
  "post-revolution": "ac-era-wash-heavy",
} as const;

export type EraAtmosphereSlug = keyof typeof ERA_ATMOSPHERE_CLASS;

export function getEraAtmosphereClass(slug: string, index: number): string {
  if (slug in ERA_ATMOSPHERE_CLASS) {
    return ERA_ATMOSPHERE_CLASS[slug as EraAtmosphereSlug];
  }
  const fallback = ["ac-era-wash-1", "ac-era-wash-2", "ac-era-wash-4", "ac-era-wash-heavy"] as const;
  return fallback[Math.min(index, fallback.length - 1)] ?? "ac-era-wash-2";
}

export function getEraThresholdClass(fromSlug: string, toSlug: string): string {
  const toClass = getEraAtmosphereClass(toSlug, 0);
  if (toClass === "ac-era-wash-heavy") return "ac-threshold-to-heavy";
  if (toClass === "ac-era-wash-4") return "ac-threshold-to-4";
  if (toClass === "ac-era-wash-2") return "ac-threshold-to-2";
  return "ac-threshold-to-1";
}
