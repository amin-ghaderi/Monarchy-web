import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

import { CACHE_TAGS } from "@/lib/sanity/tags";

type SanityWebhookBody = {
  _type?: string;
  slug?: { current?: string };
};

function revalidateForType(type: string | undefined, slug?: string) {
  switch (type) {
    case "statement":
      revalidateTag(CACHE_TAGS.statements);
      if (slug) revalidateTag(CACHE_TAGS.statement(slug));
      revalidatePath("/archive");
      revalidatePath("/");
      break;
    case "mediaArticle":
      revalidateTag(CACHE_TAGS.mediaArticles);
      if (slug) revalidateTag(CACHE_TAGS.mediaArticle(slug));
      break;
    case "historyEra":
    case "historyEvent":
      revalidateTag(CACHE_TAGS.history);
      revalidatePath("/history");
      break;
    case "charterDocument":
      if (slug) revalidateTag(CACHE_TAGS.charter(slug));
      revalidatePath("/charter");
      break;
    case "siteSettings":
      revalidateTag(CACHE_TAGS.siteSettings);
      break;
    default:
      break;
  }
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { ok: false, message: "Revalidation not configured" },
      { status: 503 },
    );
  }

  const headerSecret =
    request.headers.get("x-sanity-secret") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (headerSecret !== secret) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  let body: SanityWebhookBody = {};
  try {
    body = (await request.json()) as SanityWebhookBody;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const slug = body.slug?.current;
  revalidateForType(body._type, slug);

  revalidatePath("/", "layout");

  return NextResponse.json({
    ok: true,
    revalidated: true,
    type: body._type ?? null,
    slug: slug ?? null,
  });
}
