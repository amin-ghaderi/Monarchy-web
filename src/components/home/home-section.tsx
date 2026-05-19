import { cn } from "@/lib/utils";

type HomeSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** First section — no top rule */
  lead?: boolean;
  /** Full-bleed atmosphere behind content (hero only) */
  atmosphere?: React.ReactNode;
  /** Visual weight of the band */
  tone?: "masthead" | "default" | "quiet";
};

const toneClasses = {
  masthead: "bg-ground py-16 sm:py-20 lg:py-24",
  default: "bg-ground py-14 sm:py-16 lg:py-20",
  quiet: "bg-surface-raised py-12 sm:py-14 lg:py-16",
} as const;

export function HomeSection({
  children,
  className,
  id,
  lead = false,
  atmosphere,
  tone = "default",
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-mist px-5 sm:px-6",
        !lead && "border-t",
        toneClasses[tone],
        atmosphere && "relative isolate overflow-hidden",
        atmosphere && lead && "ac-hero-section",
        className,
      )}
    >
      {atmosphere}
      <div className={cn("mx-auto w-full max-w-5xl", atmosphere && "ac-hero-content")}>
        {children}
      </div>
    </section>
  );
}
