import { cn } from "@/lib/utils";

type HeroImagePlaceholderProps = {
  className?: string;
  caption?: string;
};

export function HeroImagePlaceholder({
  className,
  caption = "تصویر شاخص — به‌زودی",
}: HeroImagePlaceholderProps) {
  return (
    <figure
      className={cn(
        "mb-10 overflow-hidden rounded-md border border-mist bg-surface-sunken",
        className,
      )}
    >
      <div
        className="flex aspect-[5/2] max-h-56 items-center justify-center px-4 text-center text-[length:var(--font-size-meta)] text-meta sm:max-h-64"
        role="img"
        aria-label={caption}
      >
        {caption}
      </div>
    </figure>
  );
}
