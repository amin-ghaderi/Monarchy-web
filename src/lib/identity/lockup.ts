/** Display lockup lines derived from CMS organization name */

export type LockupLines = {
  primary: string;
  secondary?: string;
};

const KNOWN_PRIMARY = "پارمان";

/**
 * Splits full legal name into chrome hierarchy (primary + secondary).
 * Falls back gracefully for CMS overrides.
 */
export function resolveLockupLines(organizationName: string): LockupLines {
  const trimmed = organizationName.trim();
  if (!trimmed) {
    return { primary: KNOWN_PRIMARY };
  }

  if (trimmed.startsWith(KNOWN_PRIMARY)) {
    const rest = trimmed.slice(KNOWN_PRIMARY.length).trim();
    if (rest) {
      return { primary: KNOWN_PRIMARY, secondary: rest };
    }
  }

  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex > 0) {
    return {
      primary: trimmed.slice(0, spaceIndex),
      secondary: trimmed.slice(spaceIndex + 1).trim(),
    };
  }

  return { primary: trimmed };
}

export const WORDMARK_ARIA_LABEL = "پارمان پادشاهی ایرانیان — صفحه اصلی";
