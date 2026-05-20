import { ContinuityMark } from "@/components/identity/continuity-mark";
import { resolveLockupLines } from "@/lib/identity/lockup";
import { cn } from "@/lib/utils";

type InstitutionalWordmarkProps = {
  organizationName: string;
  organizationNameEn?: string;
  variant?: "header" | "footer";
  className?: string;
  /** Hide English below sm */
  hideEnOnNarrow?: boolean;
};

export function InstitutionalWordmark({
  organizationName,
  organizationNameEn,
  variant = "header",
  className,
  hideEnOnNarrow = variant === "header",
}: InstitutionalWordmarkProps) {
  const { primary, secondary } = resolveLockupLines(organizationName);
  const markSize = variant === "footer" ? 12 : 11;

  return (
    <span
      className={cn(
        "ac-wordmark",
        variant === "footer" && "ac-wordmark--footer",
        className,
      )}
    >
      <ContinuityMark size={markSize} className="mt-0.5" />
      <span className="ac-wordmark-text">
        <span className="ac-wordmark-primary ac-wordmark-primary-legal">{primary}</span>
        {secondary ? (
          <span className="ac-wordmark-secondary">{secondary}</span>
        ) : null}
        {organizationNameEn ? (
          <span
            className={cn(
              "ac-wordmark-en",
              hideEnOnNarrow && "hidden sm:block",
            )}
            lang="en"
            dir="ltr"
          >
            {organizationNameEn}
          </span>
        ) : null}
      </span>
    </span>
  );
}
