/**
 * JSON-LD структурированные данные для SEO
 * Schema.org разметка для улучшения индексации в поисковых системах
 */

type JsonLdData = Record<string, unknown>;

interface Organization extends JsonLdData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    "@type": string;
    email: string;
    contactType: string;
    availableLanguage: string;
  };
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
}

interface WebSite extends JsonLdData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  potentialAction: {
    "@type": string;
    target: {
      "@type": string;
      urlTemplate: string;
    };
    "query-input": string;
  };
}

interface Course extends JsonLdData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    url: string;
  };
  educationalLevel: string;
  hasCourseInstance: {
    "@type": string;
    courseMode: string;
    courseWorkload: string;
  };
}

interface BreadcrumbList extends JsonLdData {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
}

/**
 * Генерирует JSON-LD разметку для организации
 */
export function getOrganizationJsonLd(): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skillescape",
    url: "https://skillescape.me",
    logo: "https://skillescape.me/logo.png",
    description:
      "AI-powered freelancing platform teaching users to build AI agents for business automation and content creation",
    sameAs: [
      // Добавьте ссылки на социальные сети
      // "https://facebook.com/skillescape",
      // "https://twitter.com/skillescape",
      // "https://linkedin.com/company/skillescape",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@skillescape.co",
      contactType: "Customer Support",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "71–75 Shelton Street, Covent Garden",
      addressLocality: "London",
      postalCode: "WC2H 9JQ",
      addressCountry: "GB",
    },
  };
}

/**
 * Генерирует JSON-LD разметку для сайта
 */
export function getWebSiteJsonLd(): WebSite {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Skillescape",
    url: "https://skillescape.me",
    description:
      "Learn to build AI agents and start your freelancing career with AI-powered tools",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://skillescape.me/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Генерирует JSON-LD разметку для курса
 */
export function getCourseJsonLd(): Course {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI-Powered Freelancing Masterclass",
    description:
      "Complete course on building AI agents for freelancing, covering automation, content creation, and business processes",
    provider: {
      "@type": "Organization",
      name: "Skillescape",
      url: "https://skillescape.me",
    },
    educationalLevel: "Beginner to Advanced",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "P4W",
    },
  };
}

/**
 * Генерирует JSON-LD разметку для хлебных крошек
 */
export function getBreadcrumbJsonLd(
  items: Array<{ name: string; url?: string }>
): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

/**
 * Компонент для вставки JSON-LD в страницу
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
