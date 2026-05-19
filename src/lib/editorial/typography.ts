import { cn } from "@/lib/utils";

/** Level 1 — homepage display headline only */
export const typeDisplay = cn(
  "text-[length:var(--font-size-display)] font-semibold leading-[var(--line-height-display)] tracking-tight text-ink",
);

/** Level 2 — section titles */
export const typeSectionTitle = cn(
  "text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] text-ink",
);

/** Level 3 — labels, meta, supporting lines */
export const typeSectionLabel = cn(
  "text-[length:var(--font-size-label)] font-medium tracking-wide text-meta",
);

export const typeSectionDek = cn(
  "text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary",
);

export const typeSupporting = cn(
  "text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-ink-secondary",
);
