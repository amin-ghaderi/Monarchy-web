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

  return (
    <div>
      <HomePrologue />
      <HomePrinciples />
      {latestStatement ? <HomeLatestStatement statement={latestStatement} /> : null}
      <HomeHistoryGateway />
      <HomeParticipate />
      <HomeTrustFootnote />
    </div>
  );
}
