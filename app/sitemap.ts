import { MetadataRoute } from "next";

/**
 * Динамический sitemap для SEO
 * Next.js 15/16 - автоматическая генерация sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skillescape.me";
  const currentDate = new Date();

  return [
    // Главная страница
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Квиз и вопросы
    {
      url: `${baseUrl}/quiz`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quiz/questions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Продающая страница
    {
      url: `${baseUrl}/selling-page`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Подписка
    {
      url: `${baseUrl}/subscription`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Аутентификация
    {
      url: `${baseUrl}/auth/login`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/auth/reset-password`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    // Юридические страницы
    {
      url: `${baseUrl}/terms/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms/subscription`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}

