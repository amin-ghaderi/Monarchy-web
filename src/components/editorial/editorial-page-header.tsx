import { cn } from "@/lib/utils";

type EditorialPageHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function EditorialPageHeader({
  label,
  title,
  description,
  className,
  children,
}: EditorialPageHeaderProps) {
  return (
    <header className={cn("border-b border-mist pb-8", className)}>
      <p className="text-[length:var(--font-size-label)] font-medium text-meta">{label}</p>
      <h1 className="mt-2 text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-heading)] text-ink">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-ink-secondary">{description}</p>
      ) : null}
      {children}
    </header>
  );
}
