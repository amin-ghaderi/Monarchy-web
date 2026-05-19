/** Mock content is used only in development when CMS is empty or unavailable. */
export function isDevMockFallbackEnabled(): boolean {
  return process.env.NODE_ENV === "development";
}
