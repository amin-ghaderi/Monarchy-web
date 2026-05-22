import { HomeChapterBreath } from "@/components/home/home-chapter-breath";
import { HomeChronicleInterlude } from "@/components/home/home-chronicle-interlude";
import { HomeCinematicChrome } from "@/components/home/home-cinematic-chrome";
import { HomeHistoryGateway } from "@/components/home/home-history-gateway";
import { HomeLatestStatement } from "@/components/home/home-latest-statement";
import { HomeParticipate } from "@/components/home/home-participate";
import { HomePrinciples } from "@/components/home/home-principles";
import { HomePrologue } from "@/components/home/home-prologue";
import { HomeTrustFootnote } from "@/components/home/home-trust-footnote";
import { fetchStatementsList } from "@/lib/sanity/fetchers";

export default async function HomePage() {
  const statements = await fetchStatementsList();
  const latestStatement = statements[0] ?? null;

  // TEMP VERCEL TEST
  return (
    <div
      className="min-h-screen bg-black text-white [&_a]:!text-white [&_article]:!bg-black [&_blockquote]:!text-white [&_button]:!text-white [&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_li]:!text-white [&_p]:!text-white [&_section]:!bg-black [&_span]:!text-white [&_time]:!text-white"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <div
        className="bg-red-600 px-6 py-8 text-center text-3xl font-bold text-white"
        role="status"
      >
        VERCEL TEST DEPLOY SUCCESS
      </div>
      <HomeCinematicChrome />
      <HomePrologue />
      <HomePrinciples />
      <HomeChapterBreath />
      <HomeChronicleInterlude />
      {latestStatement ? <HomeLatestStatement statement={latestStatement} /> : null}
      <HomeHistoryGateway />
      <HomeParticipate />
      <HomeTrustFootnote />
    </div>
  );
}
