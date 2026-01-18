# SEO Оптимизация проекта Skillescape

## Обзор

Этот документ описывает все SEO-оптимизации, применённые к проекту, и рекомендации по дальнейшему улучшению.

## Что было сделано

### 1. Структурированные данные (JSON-LD Schema.org)

**Файл:** `src/shared/lib/seo/json-ld.tsx`

Реализованы следующие типы структурированных данных:

- **Organization** - информация о компании Skillescape
- **WebSite** - данные о сайте с поддержкой поиска
- **Course** - информация о курсах
- **BreadcrumbList** - навигационные хлебные крошки
- **FAQPage** - вопросы и ответы (отдельный файл)

Структурированные данные помогают поисковым системам лучше понимать контент и отображать rich snippets в результатах поиска.

### 2. Централизованная конфигурация SEO

**Файл:** `src/shared/config/seo-config.ts`

Создана единая конфигурация для:

- Базовых метаданных сайта
- Open Graph изображений
- Twitter Card
- Ключевых слов
- Контактной информации

Функция `generatePageMetadata()` упрощает создание SEO-оптимизированных метаданных для каждой страницы.

### 3. Улучшенный Root Layout

**Файл:** `app/layout.tsx`

Добавлено:

- Структурированные данные Organization и WebSite
- Расширенные метаданные (creator, publisher, category)
- Улучшенные настройки robots
- Поддержка верификации для Google, Yandex, Bing
- Canonical URLs
- Оптимизированные Open Graph и Twitter Card теги

### 4. Обновлённый Sitemap

**Файл:** `app/sitemap.ts`

- Добавлены все существующие страницы
- Правильные приоритеты для каждой страницы
- Частота обновления (changeFrequency)
- Временные метки

Страницы в sitemap:

- `/` - главная (приоритет 1.0)
- `/quiz` - квиз (приоритет 0.9)
- `/quiz/questions` - вопросы квиза (приоритет 0.85)
- `/selling-page` - продающая страница (приоритет 0.9)
- `/subscription` - подписка (приоритет 0.8)
- `/auth/*` - страницы авторизации (приоритет 0.5-0.6)
- `/terms/*` - юридические страницы (приоритет 0.4)

### 5. Улучшенный robots.txt

**Файл:** `app/robots.ts`

- Запрет индексации служебных папок (`/api/`, `/admin/`, `/_next/`)
- Запрет индексации больших JSON файлов
- Специальные правила для Google Bot и Yandex Bot
- Ссылка на sitemap

### 6. Метаданные для всех страниц

Обновлены метаданные для:

- **Главная страница** (`src/pages/home/index.ts`)
- **Страница квиза** (`src/pages/quiz/ui/quiz-page.tsx`)
- **Вопросы квиза** (`src/pages/quiz-questions/index.ts`) - noindex
- **Продающая страница** (`src/pages/selling-page/index.ts`)
- **Аутентификация** (`app/auth/layout.tsx`) - noindex
- **Юридические страницы** - уже содержали метаданные

### 7. PWA Manifest

**Файл:** `app/manifest.ts`

Улучшен манифест для PWA:

- Расширенное описание
- Категории приложения
- Ориентация и направление текста
- Scope приложения

### 8. FAQ Schema

**Файл:** `src/shared/lib/seo/faq-schema.tsx`

Компонент для добавления структурированных данных FAQ на страницы с вопросами и ответами.

## Дальнейшие рекомендации

### Критически важные задачи

#### 1. Создать Open Graph изображения

**Приоритет: ВЫСОКИЙ**

Создайте следующие изображения:

```
/public/og-image.jpg - 1200x630px (главное изображение для соцсетей)
/public/icon-192.png - 192x192px (иконка PWA)
/public/icon-512.png - 512x512px (иконка PWA)
/public/logo.png - логотип компании
```

**Рекомендации по дизайну:**

- Используйте брендовые цвета
- Добавьте логотип и слоган
- Убедитесь, что текст читаем на маленьких экранах
- Оптимизируйте размер файлов (< 300KB для og-image)

#### 2. Добавить реальные коды верификации

**Файл:** `app/layout.tsx`, строка 66

Зарегистрируйте сайт в:

- [Google Search Console](https://search.google.com/search-console)
- [Yandex Webmaster](https://webmaster.yandex.com/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

Замените placeholder коды на реальные:

```typescript
verification: {
  google: "your-actual-google-verification-code",
  yandex: "your-actual-yandex-verification-code",
  bing: "your-actual-bing-verification-code",
}
```

#### 3. Добавить ссылки на социальные сети

**Файл:** `src/shared/lib/seo/json-ld.tsx`, строка 75

Добавьте реальные ссылки на соцсети в sameAs массив:

```typescript
sameAs: [
  "https://facebook.com/skillescape",
  "https://twitter.com/skillescape",
  "https://linkedin.com/company/skillescape",
  "https://instagram.com/skillescape",
  "https://youtube.com/@skillescape",
]
```

#### 4. Обновить Twitter handle

**Файл:** `src/shared/config/seo-config.ts`, строка 25

Замените `@skillescape` на реальный Twitter/X handle.

### Рекомендуемые улучшения

#### 5. Создать блог для контент-маркетинга

Блог значительно улучшит SEO через:

- Органический трафик по long-tail ключевым словам
- Регулярно обновляемый контент
- Возможности для внутренних ссылок

**Примеры тем:**

- "How to Start AI Freelancing in 2026"
- "Top 10 AI Tools for Freelancers"
- "Building Your First AI Agent: Step-by-Step Guide"
- "AI Copywriting: Complete Guide for Beginners"

#### 6. Добавить canonical URLs для всех страниц

Уже реализовано через `generatePageMetadata()`, но убедитесь что:

- URL всегда в lowercase
- Нет дублирующих страниц
- Redirect с www на non-www (или наоборот)

#### 7. Оптимизация изображений

- Используйте Next.js Image компонент везде
- Конвертируйте изображения в WebP/AVIF
- Добавьте alt текст ко всем изображениям
- Используйте lazy loading

#### 8. Улучшить внутреннюю перелинковку

- Добавьте breadcrumbs на все страницы
- Создайте footer с важными ссылками
- Добавьте "Related Articles" в блоге

#### 9. Мониторинг производительности

**Core Web Vitals важны для SEO!**

Текущие метрики можно проверить:

```bash
npm run build
npm run start
# Откройте Lighthouse в Chrome DevTools
```

Целевые показатели:

- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

#### 10. Настроить Google Analytics и Tag Manager

Добавьте в `app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

#### 11. Реализовать страницу 404

**Файл:** `app/not-found.tsx` (уже существует)

Убедитесь что содержит:

- Дружелюбное сообщение об ошибке
- Ссылки на главные разделы сайта
- Поиск по сайту
- Правильный HTTP статус код 404

#### 12. Добавить structured data для отзывов

Если есть отзывы клиентов, добавьте Review schema:

```typescript
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Customer Name"
  },
  "reviewBody": "Review text..."
}
```

### Продвинутые техники

#### 13. Динамический sitemap для курсов

Если курсы хранятся в БД, создайте динамический sitemap:

```typescript
// app/sitemap-courses.ts
export default async function sitemap() {
  const courses = await fetchCourses();
  return courses.map(course => ({
    url: `https://skillescape.me/courses/${course.slug}`,
    lastModified: course.updatedAt,
    priority: 0.7,
  }));
}
```

#### 14. Hreflang теги для мультиязычности

Если планируете добавить другие языки:

```typescript
alternates: {
  canonical: 'https://skillescape.me/page',
  languages: {
    'en': 'https://skillescape.me/en/page',
    'ru': 'https://skillescape.me/ru/page',
  }
}
```

#### 15. Video Schema

Если добавите видео-контент:

```typescript
{
  "@type": "VideoObject",
  "name": "Video Title",
  "description": "Video description",
  "thumbnailUrl": "thumbnail.jpg",
  "uploadDate": "2026-01-18",
  "contentUrl": "video-url"
}
```

## Как использовать

### Для новой страницы:

```typescript
import { generatePageMetadata } from "@/shared/config/seo-config";

export const metadata = generatePageMetadata({
  title: "Page Title",
  description: "Page description",
  path: "/page-path",
  keywords: ["keyword1", "keyword2"],
});
```

### Для добавления FAQ:

```tsx
import { FAQSchema } from "@/shared/lib/seo/faq-schema";

const faqItems = [
  {
    question: "How does it work?",
    answer: "It works by..."
  }
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      {/* Your content */}
    </>
  );
}
```

### Для добавления breadcrumbs:

```tsx
import { JsonLd, getBreadcrumbJsonLd } from "@/shared/lib/seo/json-ld";

const breadcrumbs = [
  { name: "Home", url: "https://skillescape.me" },
  { name: "Courses", url: "https://skillescape.me/courses" },
  { name: "AI Freelancing" }
];

export default function Page() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd(breadcrumbs)} />
      {/* Your content */}
    </>
  );
}
```

## Проверка SEO

### Инструменты для тестирования:

1. **Google Rich Results Test**
   https://search.google.com/test/rich-results

2. **Google Mobile-Friendly Test**
   https://search.google.com/test/mobile-friendly

3. **PageSpeed Insights**
   https://pagespeed.web.dev/

4. **Schema.org Validator**
   https://validator.schema.org/

5. **Open Graph Debugger**
   https://www.opengraph.xyz/

6. **Twitter Card Validator**
   https://cards-dev.twitter.com/validator

### Локальная проверка:

```bash
# Проверка sitemap
curl http://localhost:3000/sitemap.xml

# Проверка robots.txt
curl http://localhost:3000/robots.txt

# Проверка manifest
curl http://localhost:3000/manifest.json
```

## Мониторинг результатов

После внедрения отслеживайте:

1. **Позиции в поиске** - Google Search Console
2. **Органический трафик** - Google Analytics
3. **CTR из поиска** - Search Console → Performance
4. **Индексация страниц** - Search Console → Coverage
5. **Core Web Vitals** - Search Console → Experience
6. **Backlinks** - Ahrefs, SEMrush, или Moz

## Контрольный список запуска

- [ ] Создать Open Graph изображение (og-image.jpg)
- [ ] Создать иконки PWA (icon-192.png, icon-512.png)
- [ ] Добавить реальные коды верификации
- [ ] Обновить Twitter handle
- [ ] Добавить ссылки на социальные сети
- [ ] Зарегистрировать сайт в Google Search Console
- [ ] Зарегистрировать сайт в Yandex Webmaster
- [ ] Настроить Google Analytics
- [ ] Проверить все страницы в Rich Results Test
- [ ] Проверить Mobile-Friendly
- [ ] Проверить PageSpeed (должен быть 90+)
- [ ] Убедиться что все изображения имеют alt текст
- [ ] Проверить работу 404 страницы
- [ ] Отправить sitemap в Search Console

## Дополнительные ресурсы

- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/docs/documents.html)
- [Web.dev SEO](https://web.dev/learn/seo/)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)

## Поддержка

Если возникнут вопросы по SEO оптимизации, обращайтесь к этому документу или консультируйтесь с SEO специалистом.

---

**Последнее обновление:** 18 января 2026
