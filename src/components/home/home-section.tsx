import { cn } from "@/lib/utils";

/** Homepage chapter rhythm — visibly distinct bands */
export type HomeChapter = "ivory" | "obsidian" | "textured" | "documentary";

/** @deprecated Use `chapter` */
export type HomeSectionSurface = "ivory" | "stone" | "paper" | "chronicle";

type HomeSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  lead?: boolean;
  atmosphere?: React.ReactNode;
  chapter?: HomeChapter;
  /** @deprecated Use `chapter` */
  surface?: HomeSectionSurface;
  tone?: "masthead" | "default" | "quiet";
  /** Wider institutional layout */
  wide?: boolean;
};

const chapterClasses: Record<HomeChapter, string> = {
  ivory: "ac-chapter-ivory py-16 sm:py-20 lg:py-24",
  obsidian: "ac-chapter-obsidian py-16 sm:py-20 lg:py-24",
  textured: "ac-chapter-textured py-16 sm:py-20 lg:py-24",
  documentary: "ac-chapter-documentary py-16 sm:py-20 lg:py-28",
};

const surfaceToChapter: Record<HomeSectionSurface, HomeChapter> = {
  ivory: "ivory",
  stone: "textured",
  paper: "documentary",
  chronicle: "obsidian",
};

const toneToChapter: Record<NonNullable<HomeSectionProps["tone"]>, HomeChapter> = {
  masthead: "ivory",
  default: "ivory",
  quiet: "textured",
};

export function HomeSection({
  children,
  className,
  id,
  lead = false,
  atmosphere,
  chapter,
  surface,
  tone,
  wide = false,
}: HomeSectionProps) {
  const resolvedChapter =
    chapter ?? (surface ? surfaceToChapter[surface] : tone ? toneToChapter[tone] : "ivory");

  return (
    <section
      id={id}
      className={cn(
        "relative px-5 sm:px-6",
        !lead && "border-t-2 border-mist",
        chapterClasses[resolvedChapter],
        atmosphere && "isolate overflow-hidden",
        className,
      )}
    >
      {atmosphere}
      <div
        className={cn(
          "relative z-[1] mx-auto w-full",
          wide ? "max-w-6xl" : "max-w-5xl",
        )}
      >
        {children}
      </div>
    </section>
  );
}
