import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

export default function ParticipatePage() {
  return (
    <PageContainer variant="institutional" className="flex min-h-[40vh] flex-col justify-center">
      <p className="text-[length:var(--font-size-label)] font-medium text-meta">مشارکت</p>
      <h1 className="mt-2 text-[length:var(--font-size-h1)] font-semibold text-ink">
        مشارکت — به‌زودی
      </h1>
      <p className="mt-4 max-w-xl text-ink-secondary">
        فرآیند هموندی و مشارکت سازمانی در فاز بعدی راه‌اندازی می‌شود. تا آن زمان می‌توانید
        بیانیه‌ها و اسناد رسمی را مطالعه کنید.
      </p>
      <Link
        href="/archive"
        className={cn(
          "mt-6 inline-block text-sm font-medium text-link hover:underline",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
        )}
      >
        مطالعه بیانیه‌ها
      </Link>
    </PageContainer>
  );
}
