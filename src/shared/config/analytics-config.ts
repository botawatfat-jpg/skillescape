/**
 * Конфигурация аналитических сервисов
 * Централизованное место для всех tracking ID
 */

export const analyticsConfig = {
  // Google Tag Manager
  gtm: {
    id: "GTM-T3S2P2LK",
    enabled: true,
  },

  // Google Analytics 4 (если используется напрямую, не через GTM)
  ga4: {
    measurementId: "", // Если нужен прямой GA4, добавьте ID
    enabled: false,
  },

  // Meta (Facebook) Pixel
  facebook: {
    pixelId: "", // Добавьте FB Pixel ID если нужен
    enabled: false,
  },

  // TikTok Pixel
  tiktok: {
    pixelId: "", // Добавьте TikTok Pixel ID если нужен
    enabled: false,
  },

  // Yandex Metrika
  yandex: {
    counterId: "", // Добавьте Yandex Metrika ID если нужен
    enabled: false,
  },

  // Hotjar
  hotjar: {
    id: "", // Добавьте Hotjar ID если нужен
    version: 6,
    enabled: false,
  },

  // Microsoft Clarity
  clarity: {
    projectId: "", // Добавьте Clarity ID если нужен
    enabled: false,
  },
} as const;

/**
 * Проверяет, включена ли аналитика
 */
export function isAnalyticsEnabled(): boolean {
  // В production всегда включено, если GTM настроен
  if (process.env.NODE_ENV === "production") {
    return analyticsConfig.gtm.enabled;
  }

  // В development можно включить через env переменную
  return process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
}

/**
 * Хелпер для отправки кастомных событий в GTM
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
}

/**
 * Хелпер для отправки событий конверсии
 */
export function trackConversion(conversionName: string, value?: number) {
  trackEvent("conversion", {
    conversion_name: conversionName,
    value: value,
  });
}

/**
 * Хелпер для отправки событий покупки
 */
export function trackPurchase(transactionId: string, value: number) {
  trackEvent("purchase", {
    transaction_id: transactionId,
    value: value,
    currency: "USD",
  });
}

// Расширяем Window interface для TypeScript
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}
