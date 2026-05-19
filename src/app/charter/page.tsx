import Link from "next/link";

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
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-6">
      <h1 className="text-[length:var(--font-size-h1)] font-semibold text-ink">اسناد</h1>
      <p className="mt-3 text-meta">متون رسمی پارمان پادشاهی ایرانیان</p>
      <ul className="mt-10 space-y-4">
        {documents.map((doc) => (
          <li key={doc.href}>
            <Link
              href={doc.href}
              className="block rounded-md border border-mist bg-surface-raised p-5 hover:border-lapis-600"
            >
              <span className="font-medium text-ink">{doc.title}</span>
              <span className="mt-1 block text-sm text-meta">{doc.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
