import { GeometryField } from "@/components/visual/geometry-field";
import { cn } from "@/lib/utils";

type InstitutionalEditorialShellProps = {
  children: React.ReactNode;
  className?: string;
};

/** Presentation-grade editorial layout — stone surface + geometry rail */
export function InstitutionalEditorialShell({
  children,
  className,
}: InstitutionalEditorialShellProps) {
  return (
    <div className={cn("ac-surface-c relative", className)}>
      <GeometryField variant="page" />
      <div className="relative z-[1] lg:grid lg:grid-cols-[minmax(0,1fr)_5.5rem] lg:gap-10">
        <div>{children}</div>
        <aside className="relative hidden min-h-[12rem] lg:block" aria-hidden>
          <GeometryField variant="rail" className="opacity-80" />
        </aside>
      </div>
    </div>
  );
}
