import { PageContainer } from "@/components/layout/page-container";

export default function HistoryPage() {
  return (
    <PageContainer variant="institutional" className="flex min-h-[40vh] flex-col justify-center">
      <p className="text-[length:var(--font-size-label)] font-medium text-meta">تاریخ</p>
      <h1 className="mt-2 text-[length:var(--font-size-h1)] font-semibold text-ink">
        تاریخ — به‌زودی
      </h1>
      <p className="mt-4 max-w-xl text-ink-secondary">
        خط زمانی و آرشیو تاریخی در فاز بعدی منتشر می‌شود.
      </p>
    </PageContainer>
  );
}
