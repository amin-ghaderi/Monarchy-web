import { cn } from "@/lib/utils";

type ReadingContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div";
};

export function ReadingContainer({
  children,
  className,
  as: Tag = "article",
}: ReadingContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[42rem] px-5 py-12 sm:px-6 lg:py-16",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
