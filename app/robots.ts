import { MetadataRoute } from "next";

/**
 * Robots.txt для управления индексацией
 * Next.js 15/16 - автоматическая генерация robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://skillescape.me";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/auth/reset-password", // Приватные страницы
          "/*.json$", // JSON файлы
          "/assets/quiz/*.json", // Большие JSON файлы квиза
        ],
      },
      // Специальные правила для Google Bot
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/auth/reset-password"],
      },
      // Специальные правила для Yandex Bot
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/auth/reset-password"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

