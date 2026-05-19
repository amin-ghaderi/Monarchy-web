import { excerptFromPortableText } from "@/lib/content/excerpt";
import type {
  CharterDocument,
  MediaArticleDocument,
  PersonSummary,
  StatementDocument,
  StatementListItem,
} from "@/types/content";

let mockKeyCounter = 0;
const nextKey = (prefix: string) => `${prefix}-${++mockKeyCounter}`;

const block = (text: string) => {
  const key = nextKey("b");
  return {
    _type: "block" as const,
    _key: key,
    style: "normal" as const,
    markDefs: [],
    children: [
      {
        _type: "span" as const,
        _key: `${key}-s`,
        text,
        marks: [],
      },
    ],
  };
};

const h2 = (text: string) => {
  const key = nextKey("h2");
  return {
    _type: "block" as const,
    _key: key,
    style: "h2" as const,
    markDefs: [],
    children: [
      {
        _type: "span" as const,
        _key: `${key}-s`,
        text,
        marks: [],
      },
    ],
  };
};

export const mockAuthors: PersonSummary[] = [
  {
    _id: "person-babak-sina",
    nameFa: "دکتر بابک سینا",
    nameEn: "Dr. Babak Sina",
    roleFa: "دبیر نخست",
    slug: "babak-sina",
  },
  {
    _id: "person-masoud-zamani",
    nameFa: "دکتر مسعود زمانی",
    roleFa: "دبیر دوم",
    slug: "masoud-zamani",
  },
];

export const mockStatements: StatementDocument[] = [
  {
    _id: "stmt-executions",
    _type: "statement",
    titleFa:
      "بیانیه رسمی پارمان پادشاهی ایرانیان در محکومیت موج اعدام‌ها توسط جمهوری اسلامی",
    slug: "statement-condemning-executions",
    statementType: "official",
    publishedAt: "2026-05-04T08:00:00.000Z",
    language: "fa",
    authors: [mockAuthors[0]!, mockAuthors[1]!],
    status: "published",
    seo: {
      metaTitle: "بیانیه محکومیت موج اعدام‌ها",
      metaDescription:
        "بیانیه رسمی پارمان پادشاهی ایرانیان در محکومیت موج اعدام‌ها توسط جمهوری اسلامی.",
    },
    bodyFa: [
      h2("هم‌میهنان و فرزندان سرافراز ایران"),
      block(
        "جمهوری اسلامی بار دیگر چهره واقعی خود را عریان‌تر از همیشه به نمایش گذاشته است؛ حکومتی که بقای خود را نه بر پایه مشروعیت مردمی، بلکه بر ستون‌های دار، شکنجه و سرکوب بنا نهاده است.",
      ),
      block(
        "پارمان پادشاهی ایرانیان این اعدام‌های خودسرانه را محکوم می‌کند و از جامعه بین‌المللی می‌خواهد که صدای آزادی‌خواهان ایران را بشنوند.",
      ),
      {
        _type: "block",
        _key: "quote-1",
        style: "blockquote",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "q1",
            text: "آزادی و کرامت انسان، غیرقابل معامله است.",
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: "stmt-press-transparency",
    _type: "statement",
    titleFa: "اطلاعیه مطبوعاتی پارمان درباره شفافیت انتشارات رسمی",
    slug: "press-transparency-publications",
    statementType: "press",
    publishedAt: "2026-03-20T10:00:00.000Z",
    language: "fa",
    authors: [mockAuthors[0]!],
    status: "published",
    seo: {
      metaTitle: "اطلاعیه شفافیت انتشارات",
      metaDescription:
        "اطلاعیه مطبوعاتی پارمان پادشاهی ایرانیان درباره استانداردهای انتشار بیانیه و اسناد رسمی.",
    },
    bodyFa: [
      block(
        "پارمان پادشاهی ایرانیان متعهد است که تمامی بیانیه‌ها و اسناد رسمی با تاریخ، امضا، و متن کامل در وب‌گاه نهاد منتشر شوند.",
      ),
      block(
        "این رویکرد بخشی از تعهد ما به پاسخ‌گویی مؤسساتی و اعتماد عمومی است.",
      ),
    ],
  },
];

export const mockMediaArticles: MediaArticleDocument[] = [
  {
    _id: "media-interview-sina",
    _type: "mediaArticle",
    titleFa: "مصاحبه با دکتر بابک سینا: مسیر پارلمانی و آینده ایران",
    slug: "interview-babak-sina-parliamentary-path",
    articleType: "interview",
    publishedAt: "2026-04-12T09:00:00.000Z",
    updatedAt: "2026-04-14T12:00:00.000Z",
    dekFa:
      "گفت‌وگوی رسمی با دبیر نخست پارمان درباره چارچوب پادشاهی پارلمانی، قانون‌مداری، و نقش نهادهای مدنی.",
    sourceLabel: "پارمان — واحد رسانه",
    language: "fa",
    authors: [mockAuthors[0]!],
    showHeroImage: true,
    status: "published",
    seo: {
      metaTitle: "مصاحبه با دکتر بابک سینا",
      metaDescription:
        "مصاحبه رسمی با دبیر نخست پارمان پادشاهی ایرانیان درباره مسیر پارلمانی و آینده ایران.",
    },
    bodyFa: [
      h2("پرسش: چشم‌انداز پارمان چیست؟"),
      block(
        "پارمان تلاش می‌کند نیروهای ایران‌گرا را در چارچوبی شفاف و قانون‌مدار سازماندهی کند — بدون شعارزدگی و بدون وعده‌های غیرواقعی.",
      ),
      block(
        "ما باور داریم مشروعیت سیاسی از مشارکت آگاهانه مردم و نهادهای مستقل می‌آید، نه از سرکوب.",
      ),
    ],
    relatedReading: [
      {
        title: "بیانیه محکومیت موج اعدام‌ها",
        href: "/archive/statement-condemning-executions",
        meta: "بیانیه رسمی",
      },
      {
        title: "مرامنامه حزب",
        href: "/charter/motto",
        meta: "اسناد",
      },
    ],
  },
];

export const mockCharterDocuments: CharterDocument[] = [
  {
    _id: "charter-motto",
    _type: "charterDocument",
    titleFa: "مرامنامه حزب",
    docType: "motto",
    slug: "motto",
    versionLabel: "نگارش دوم",
    effectiveDate: "2026-03-01",
    versionStatus: "current",
    useNaskh: false,
    status: "published",
    leadFa:
      "مرامنامه پارمان پادشاهی ایرانیان چارچوب ارزش‌ها و اهداف نهاد را تعریف می‌کند.",
    seo: {
      metaTitle: "مرامنامه حزب پادشاهی ایرانیان",
      metaDescription: "متن مرامنامه پارمان پادشاهی ایرانیان — نگارش دوم.",
    },
    bodyFa: [
      h2("اصول بنیادین"),
      block(
        "پارمان پادشاهی ایرانیان بر پایه ایرانشهری، قانون‌مداری، و پادشاهی پارلمانی بنا شده است.",
      ),
      block(
        "ما باور داریم که آینده ایران در گرو مشارکت آگاهانه شهروندان و احترام به حقوق بشر است.",
      ),
    ],
  },
  {
    _id: "charter-constitution",
    _type: "charterDocument",
    titleFa: "اساسنامه",
    docType: "constitution",
    slug: "constitution",
    versionLabel: "نگارش اول",
    effectiveDate: "2026-03-10",
    versionStatus: "current",
    useNaskh: false,
    status: "published",
    seo: {
      metaTitle: "اساسنامه پارمان پادشاهی ایرانیان",
      metaDescription: "اساسنامه نهاد سیاسی پارمان پادشاهی ایرانیان.",
    },
    sections: [
      {
        title: "فصل اول — نام و اهداف",
        anchor: "chapter-1",
        body: [
          block(
            "نام این نهاد «پارمان پادشاهی ایرانیان» است و هدف آن سازماندهی نیروهای ایران‌گرا در مسیر آزادی و قانون‌مداری است.",
          ),
        ],
      },
      {
        title: "فصل دوم — ساختار",
        anchor: "chapter-2",
        body: [
          block(
            "نهاد دارای شورای مدیریت، دبیران، و سخنگویان است که مطابق اساسنامه انتخاب یا منصوب می‌شوند.",
          ),
        ],
      },
    ],
  },
  {
    _id: "charter-oath",
    _type: "charterDocument",
    titleFa: "سوگندنامه",
    docType: "oath",
    slug: "oath",
    versionLabel: "نگارش اول",
    effectiveDate: "2026-03-10",
    versionStatus: "current",
    useNaskh: true,
    status: "published",
    seo: {
      metaTitle: "سوگندنامه هموندی",
      metaDescription: "سوگندنامه هموندان پارمان پادشاهی ایرانیان.",
    },
    bodyFa: [
      block(
        "من، هموند پارمان پادشاهی ایرانیان، در پیشگاه پرچم جاودانه شیر و خورشید نشان ایران، سوگند یاد می‌کنم که ایران، شاهنشاهی ایران و فروغ جاودان ایران‌گرایی را با همه جان، خرد و توان خویش پاس دارم.",
      ),
      block(
        "جان و اندیشه‌ام در راه بزرگی، یگانگی و سرافرازی ایران باشد.",
      ),
    ],
  },
];

export function getMockStatementBySlug(slug: string) {
  return mockStatements.find((s) => s.slug === slug) ?? null;
}

export function getMockCharterBySlug(slug: string) {
  return mockCharterDocuments.find((c) => c.slug === slug) ?? null;
}

export function getAllMockStatementSlugs() {
  return mockStatements.map((s) => s.slug);
}

export function getMockMediaArticleBySlug(slug: string) {
  return mockMediaArticles.find((a) => a.slug === slug) ?? null;
}

export function getAllMockMediaArticleSlugs() {
  return mockMediaArticles.map((a) => a.slug);
}

export function getMockStatementsList(): StatementListItem[] {
  return [...mockStatements]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .map((statement) => ({
      _id: statement._id,
      titleFa: statement.titleFa,
      slug: statement.slug,
      statementType: statement.statementType,
      publishedAt: statement.publishedAt,
      summary:
        statement.seo?.metaDescription ??
        excerptFromPortableText(statement.bodyFa),
    }));
}
