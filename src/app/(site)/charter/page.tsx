import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

export default function CharterHubPage() {
  const documents = [
    { href: "/charter/motto", title: "مرامنامه", description: "ارزش‌ها و اهداف پارمان" },
    {
      href: "/charter/constitution",
      title: "اساسنامه",
      description: "چارچوب سازمانی و حکمرانی",
    },
    { href: "/charter/oath", title: "سوگندنامه", description: "پیمان هموندی" },
  ];

  return (
    <PageContainer variant="institutional">
      <header className="border-b border-mist pb-8">
        <p className="text-[length:var(--font-size-label)] font-medium text-meta">اسناد</p>
        <h1 className="mt-2 text-[length:var(--font-size-h1)] font-semibold text-ink">اسناد</h1>
        <p className="mt-4 text-ink-secondary">متون رسمی پارمان پادشاهی ایرانیان</p>
      </header>
      <ul className="mt-10 space-y-4">
        {documents.map((doc) => (
          <li key={doc.href}>
            <Link
              href={doc.href}
              className={cn(
                "block rounded-md border border-mist bg-surface-raised p-5",
                "hover:border-lapis-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
              )}
            >
              <span className="font-medium text-ink">{doc.title}</span>
              <span className="mt-1 block text-sm text-meta">{doc.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
