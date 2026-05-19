import { cn } from "@/lib/utils";

export const editorialFocusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600";

export const editorialTextLink = cn(
  "font-medium text-link hover:underline",
  editorialFocusRing,
);

export const editorialPrimaryCta = cn(
  "inline-flex items-center justify-center rounded-md border border-lapis-600 bg-lapis-600 px-4 py-2.5 text-sm font-medium text-white",
  "hover:bg-lapis-700",
  editorialFocusRing,
);

export const editorialSecondaryCta = cn(
  "inline-flex items-center justify-center rounded-md border border-mist bg-surface-paper px-4 py-2.5 text-sm font-medium text-lapis-700",
  "hover:border-lapis-600 hover:bg-lapis-100",
  editorialFocusRing,
);

export const editorialMutedCta = cn(
  "inline-flex cursor-not-allowed items-center justify-center rounded-md border border-mist px-4 py-2.5 text-sm font-medium text-meta opacity-80",
);
