import { cn } from "@/lib/utils";

export type HomeSectionSurface = "ivory" | "stone" | "paper" | "chronicle";

type HomeSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** First section — no top rule */
  lead?: boolean;
  /** Full-bleed atmosphere behind content (hero only) */
  atmosphere?: React.ReactNode;
  /** Visual surface band (Phase 16 choreography) */
  surface?: HomeSectionSurface;
  /** @deprecated Use `surface` — kept for compatibility */
  tone?: "masthead" | "default" | "quiet";
};

const surfaceClasses: Record<HomeSectionSurface, string> = {
  ivory: "ac-surface-a py-14 sm:py-16 lg:py-20",
  stone: "ac-surface-c py-12 sm:py-14 lg:py-16",
  paper: "ac-surface-a-paper py-14 sm:py-16 lg:py-20",
  chronicle: "ac-surface-b py-0",
};

const toneToSurface: Record<NonNullable<HomeSectionProps["tone"]>, HomeSectionSurface> = {
  masthead: "ivory",
  default: "ivory",
  quiet: "stone",
};

export function HomeSection({
  children,
  className,
  id,
  lead = false,
  atmosphere,
  surface,
  tone,
}: HomeSectionProps) {
  const resolvedSurface = surface ?? (tone ? toneToSurface[tone] : "ivory");

  return (
    <section
      id={id}
      className={cn(
        "border-mist px-5 sm:px-6",
        !lead && resolvedSurface !== "chronicle" && "border-t",
        surfaceClasses[resolvedSurface],
        atmosphere && "relative isolate overflow-hidden",
        atmosphere && lead && "ac-hero-section ac-hero-editorial",
        className,
      )}
    >
      {atmosphere}
      <div
        className={cn(
          "relative z-[1] mx-auto w-full max-w-5xl",
          atmosphere && "ac-hero-content",
        )}
      >
        {children}
      </div>
    </section>
  );
}
