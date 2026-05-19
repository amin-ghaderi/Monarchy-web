import { PageContainer } from "@/components/layout/page-container";

export default function HomePage() {
  return (
    <PageContainer variant="institutional" className="flex min-h-[40vh] flex-col justify-center">
      <p className="text-[length:var(--font-size-label)] font-medium text-meta">صفحه اصلی</p>
      <h1 className="mt-2 text-[length:var(--font-size-h1)] font-semibold text-ink">
        Homepage — Coming Soon
      </h1>
      <p className="mt-4 max-w-xl text-ink-secondary">
        طراحی صفحه اصلی در فاز بعدی انجام می‌شود. برای مطالعه بیانیه‌ها و اسناد رسمی از
        منوی بالا استفاده کنید.
      </p>
    </PageContainer>
  );
}
