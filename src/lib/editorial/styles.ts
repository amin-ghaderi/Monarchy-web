import { cn } from "@/lib/utils";

export const editorialFocusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600";

/** Text-forward link — default editorial action */
export const editorialTextLink = cn(
  "font-medium text-lapis-700 hover:text-link hover:underline",
  editorialFocusRing,
);

/** Single filled CTA per page (homepage primary only) */
export const editorialPrimaryCta = cn(
  "inline-flex items-center justify-center rounded-sm border border-lapis-600 bg-lapis-600 px-5 py-2.5 text-sm font-medium text-white",
  "hover:bg-lapis-700",
  editorialFocusRing,
);

/** Understated secondary — no fill, no heavy border */
export const editorialSecondaryCta = cn(
  "inline-flex items-center text-sm font-medium text-lapis-700 underline decoration-mist underline-offset-4",
  "hover:text-link hover:decoration-lapis-600/40",
  editorialFocusRing,
);

export const editorialMutedCta = cn(
  "inline-flex cursor-not-allowed items-center justify-center rounded-sm border border-mist px-4 py-2.5 text-sm font-medium text-meta opacity-80",
);
