import type { PortableTextBlock } from "@portabletext/types";

function blockText(block: PortableTextBlock): string {
  if (block._type !== "block" || !("children" in block)) return "";
  const children = block.children as Array<{ _type?: string; text?: string }>;
  return children
    .filter((child) => child._type === "span" && child.text)
    .map((child) => child.text)
    .join("");
}

/** First plain paragraph suitable for archive cards. */
export function excerptFromPortableText(
  blocks: PortableTextBlock[] | undefined,
  maxLength = 180,
): string {
  if (!blocks?.length) return "";

  for (const block of blocks) {
    if (block._type !== "block") continue;
    const style = "style" in block ? block.style : "normal";
    if (style !== "normal" && style !== undefined) continue;
    const text = blockText(block).trim();
    if (!text) continue;
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength).trimEnd()}…`;
  }

  const fallback = blockText(blocks[0]!).trim();
  if (fallback.length <= maxLength) return fallback;
  return `${fallback.slice(0, maxLength).trimEnd()}…`;
}
