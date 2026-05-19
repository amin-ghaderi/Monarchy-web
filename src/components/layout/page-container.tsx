import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Narrow reading column (statements, long-form) */
  variant?: "editorial" | "institutional" | "wide";
  as?: "div" | "section" | "main";
};

const widthByVariant = {
  editorial: "max-w-[42rem]",
  institutional: "max-w-3xl",
  wide: "max-w-5xl",
} as const;

export function PageContainer({
  children,
  className,
  variant = "institutional",
  as: Tag = "div",
}: PageContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 py-12 sm:px-6 lg:py-16",
        widthByVariant[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
