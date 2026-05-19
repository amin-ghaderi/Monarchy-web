import { cn } from "@/lib/utils";

type HomeSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** First section on page — no top border */
  lead?: boolean;
};

export function HomeSection({ children, className, id, lead = false }: HomeSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-mist px-5 py-12 sm:px-6 sm:py-14 lg:py-16",
        !lead && "border-t",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
