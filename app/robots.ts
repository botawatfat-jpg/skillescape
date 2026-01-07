import { MetadataRoute } from "next";

/**
 * Robots.txt для управления индексацией
 * Next.js 15/16 - автоматическая генерация robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://jobescape.me";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

