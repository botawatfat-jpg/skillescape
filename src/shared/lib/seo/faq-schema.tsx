/**
 * FAQ Schema для SEO (Schema.org)
 * Помогает поисковым системам отображать FAQ прямо в результатах поиска
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

/**
 * Генерирует JSON-LD разметку для FAQ страницы
 */
export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Компонент для вставки FAQ Schema в страницу
 */
export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = generateFAQSchema(items);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
