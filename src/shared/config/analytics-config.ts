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

  // Google Analytics 4 (настраивается в GTM Dashboard, не в коде)
  ga4: {
    measurementId: "G-JY5TCQH26F", // Настроить в GTM как GA4 Configuration Tag
    enabled: false, // false т.к. управляется через GTM, не напрямую в коде
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
    return analyticsConfig.gtm.enabled;
}

/**
 * @deprecated Используйте pushDL из @/shared/lib/analytics/push-datalayer
 * или используйте useAnalytics() hook
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
 * @deprecated Используйте pushDL("conversion", { conversion_name, value })
 * или используйте useAnalytics() hook
 */
export function trackConversion(conversionName: string, value?: number) {
  trackEvent("conversion", {
    conversion_name: conversionName,
    value: value,
  });
}

/**
 * @deprecated Используйте pushDL("purchase", { transaction_id, value, currency })
 * или используйте useAnalytics() hook
 */
export function trackPurchase(transactionId: string, value: number) {
  trackEvent("purchase", {
    transaction_id: transactionId,
    value: value,
    currency: "USD",
  });
}
