import { PublicationMeta } from "@/components/editorial/publication-meta";

type MetadataRowProps = {
  typeLabel: string;
  publishedAt: string;
  className?: string;
};

/** @deprecated Prefer PublicationMeta directly */
export function MetadataRow({ typeLabel, publishedAt, className }: MetadataRowProps) {
  return (
    <PublicationMeta
      typeLabel={typeLabel}
      publishedAt={publishedAt}
      className={className}
      accent="gold"
    />
  );
}
