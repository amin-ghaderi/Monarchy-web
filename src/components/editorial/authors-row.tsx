import type { PersonSummary } from "@/types/content";

type AuthorsRowProps = {
  authors?: PersonSummary[];
};

export function AuthorsRow({ authors }: AuthorsRowProps) {
  if (!authors?.length) return null;

  return (
    <div className="border-t border-mist pt-4">
      <p className="mb-2 text-label text-meta">امضاکنندگان / نویسندگان</p>
      <ul className="flex flex-col gap-1 text-sm text-ink-secondary">
        {authors.map((author) => (
          <li key={author._id}>
            <span className="font-medium text-ink">{author.nameFa}</span>
            {author.roleFa ? (
              <span className="text-meta"> — {author.roleFa}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
