import { ArchiveFiltersPlaceholder } from "@/components/archive/archive-filters";
import { ArchiveTagsPlaceholder } from "@/components/archive/archive-tags-placeholder";

export function ArchiveToolbar() {
  return (
    <div className="space-y-5 rounded-md border border-mist bg-surface-raised p-4 sm:p-5">
      <ArchiveFiltersPlaceholder />
      <ArchiveTagsPlaceholder />
    </div>
  );
}
