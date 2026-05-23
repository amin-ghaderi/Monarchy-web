"use client";

import { EditorialSectionMasthead } from "@/components/editorial/editorial-section-masthead";
import { HomeMagneticCta } from "@/components/home/home-magnetic-cta";
import { HomeSection } from "@/components/home/home-section";
import { typeSupporting } from "@/lib/editorial/typography";

export function HomeHistoryGateway() {
  return (
    <HomeSection id="history" chapter="textured">
      <EditorialSectionMasthead
        label="تاریخ"
        title="خط زمانی و حافظه نهادی"
        description="چهار دوره از مشروطه تا امروز — رویدادهای کلیدی در چارچوبی قابل استناد."
      />
      <div className="mt-8 border-t border-mist pt-8">
        <p className={`${typeSupporting} max-w-2xl`}>
          برای درک بهتر مواضع امروز، مسیر تحولات تاریخی ایران را در خط زمانی رسمی
          پارمان مرور کنید.
        </p>
        <HomeMagneticCta href="/history" variant="text" className="mt-5 inline-block text-sm">
          ورود به بخش تاریخ
        </HomeMagneticCta>
      </div>
    </HomeSection>
  );
}
