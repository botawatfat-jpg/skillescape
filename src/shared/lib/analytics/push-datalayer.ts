/**
 * Helper для безопасной отправки событий в Google Tag Manager dataLayer
 * SSR-safe: проверяет наличие window перед использованием
 */

/**
 * Расширяем Window interface для TypeScript
 */
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

/**
 * Инициализирует dataLayer если он еще не существует
 */
function ensureDataLayer(): void {
  if (typeof window !== "undefined" && !window.dataLayer) {
    window.dataLayer = [];
  }
}

/**
 * Отправляет событие в GTM dataLayer
 * 
 * @param eventName - Название события (будет в поле event)
 * @param payload - Дополнительные параметры события
 * 
 * @example
 * pushDL("quiz_start", { quiz_id: "ai_quiz_v1" });
 * pushDL("purchase", { transaction_id: "123", value: 49.99 });
 */
export function pushDL(
  eventName: string,
  payload?: Record<string, unknown>
): void {
  // SSR guard
  if (typeof window === "undefined") {
    if (process.env.NODE_ENV === "development") {
      console.log("[Analytics SSR]", eventName, payload);
    }
    return;
  }

  // Инициализируем dataLayer если нужно
  ensureDataLayer();

  // Формируем объект события
  const eventData = {
    event: eventName,
    ...payload,
  };

  // Отправляем в dataLayer
  window.dataLayer.push(eventData);

  // Логируем в development режиме
  if (process.env.NODE_ENV === "development") {
    console.log("[GTM DataLayer]", eventData);
  }
}

/**
 * Очищает все переменные в dataLayer (полезно между событиями)
 * Использует специальное событие GTM для очистки
 */
export function clearDataLayer(): void {
  if (typeof window === "undefined") return;

  ensureDataLayer();
  
  window.dataLayer.push({
    event: "gtm.clear",
  });
}

/**
 * Проверяет, доступен ли dataLayer
 */
export function isDataLayerAvailable(): boolean {
  return typeof window !== "undefined" && Array.isArray(window.dataLayer);
}
