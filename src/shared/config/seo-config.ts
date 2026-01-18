/**
 * Централизованная конфигурация SEO для всего сайта
 */

export const seoConfig = {
  siteName: "Skillescape",
  siteUrl: "https://skillescape.me",
  defaultTitle: "Skillescape - Start Earning as an AI-Powered Freelancer",
  defaultDescription:
    "We will teach you how to build AI agents that handle business tasks like writing, content creation, and automation without any experience.",
  defaultKeywords: [
    "AI freelancing",
    "AI agents",
    "freelancer",
    "AI automation",
    "online courses",
    "AI business",
    "copywriting",
    "social media manager",
    "facebook ads",
    "machine learning",
    "artificial intelligence courses",
    "remote work",
    "digital nomad",
    "passive income",
    "AI tools",
  ],
  locale: "en_US" as const,
  twitterHandle: "@skillescape", // Обновите на реальный
  supportEmail: "support@skillescape.co",
  companyAddress: {
    street: "71–75 Shelton Street, Covent Garden",
    city: "London",
    postalCode: "WC2H 9JQ",
    country: "United Kingdom",
  },
  // Open Graph изображения
  ogImage: {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Skillescape - AI-Powered Freelancing Platform",
  },
  // Structured data
  organization: {
    name: "Skillescape",
    legalName: "Skillescape Ltd",
    foundingDate: "2025",
  },
};

/**
 * Генерирует полный URL для пути
 */
export function getAbsoluteUrl(path: string): string {
  return `${seoConfig.siteUrl}${path}`;
}

/**
 * Генерирует метаданные для страницы
 */
export function generatePageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage,
  noindex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}) {
  const pageTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;
  const pageDescription = description || seoConfig.defaultDescription;
  const pageUrl = getAbsoluteUrl(path);
  const pageKeywords = [
    ...seoConfig.defaultKeywords,
    ...keywords,
  ].join(", ");
  const imageUrl = ogImage
    ? getAbsoluteUrl(ogImage)
    : getAbsoluteUrl(seoConfig.ogImage.url);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: imageUrl,
          width: seoConfig.ogImage.width,
          height: seoConfig.ogImage.height,
          alt: seoConfig.ogImage.alt,
        },
      ],
      locale: seoConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
      creator: seoConfig.twitterHandle,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
          },
        },
  };
}
