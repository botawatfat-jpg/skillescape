# SEO Library

Библиотека утилит для SEO оптимизации проекта Skillescape.

## Быстрый старт

### JSON-LD структурированные данные

```tsx
import { JsonLd, getOrganizationJsonLd, getBreadcrumbJsonLd } from "@/shared/lib/seo";

export default function Page() {
  const organizationData = getOrganizationJsonLd();
  const breadcrumbs = [
    { name: "Home", url: "https://skillescape.me" },
    { name: "Courses" }
  ];

  return (
    <>
      <JsonLd data={organizationData} />
      <JsonLd data={getBreadcrumbJsonLd(breadcrumbs)} />
      <h1>Your content</h1>
    </>
  );
}
```

### FAQ Schema

```tsx
import { FAQSchema } from "@/shared/lib/seo";

const faqs = [
  {
    question: "How does Skillescape work?",
    answer: "Skillescape teaches you to build AI agents through personalized courses..."
  },
  {
    question: "Do I need coding experience?",
    answer: "No, our courses are designed for complete beginners..."
  }
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={faqs} />
      {/* Your FAQ content */}
    </>
  );
}
```

### Метаданные страницы

```tsx
import { generatePageMetadata } from "@/shared/config/seo-config";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Courses for Freelancers",
  description: "Learn AI freelancing with our comprehensive courses",
  path: "/courses",
  keywords: ["AI courses", "freelancing", "online learning"],
  ogImage: "/images/courses-og.jpg", // опционально
});

export default function CoursesPage() {
  return <div>Courses</div>;
}
```

## Доступные функции

### JSON-LD Schema

- `getOrganizationJsonLd()` - данные об организации
- `getWebSiteJsonLd()` - данные о сайте
- `getCourseJsonLd()` - данные о курсе
- `getBreadcrumbJsonLd(items)` - навигационные крошки
- `JsonLd` - компонент для вставки schema

### FAQ Schema

- `generateFAQSchema(items)` - генерация FAQ schema
- `FAQSchema` - компонент для вставки FAQ schema

### SEO Config

- `generatePageMetadata(options)` - генерация метаданных
- `getAbsoluteUrl(path)` - получение абсолютного URL
- `seoConfig` - базовая конфигурация сайта

## Примеры использования

См. полный гайд в `/SEO_GUIDE.md`
