import {
  typeSectionDek,
  typeSectionLabel,
  typeSectionTitle,
} from "@/lib/editorial/typography";
import { cn } from "@/lib/utils";

type EditorialSectionMastheadProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
};

export function EditorialSectionMasthead({
  label,
  title,
  description,
  className,
  titleClassName,
  children,
}: EditorialSectionMastheadProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {label ? <p className={typeSectionLabel}>{label}</p> : null}
      <h2
        className={cn(typeSectionTitle, label ? "mt-2" : undefined, titleClassName)}
      >
        {title}
      </h2>
      {description ? <p className={cn(typeSectionDek, "mt-4")}>{description}</p> : null}
      {children}
    </header>
  );
}
