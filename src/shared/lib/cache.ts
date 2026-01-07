/**
 * Утилиты для кеширования данных в Next.js 15/16
 * Используем встроенный fetch с revalidate
 */

/**
 * Типы стратегий кеширования
 */
export const CacheStrategy = {
  // Статические данные - кешируются навсегда
  STATIC: { next: { revalidate: false } },
  
  // Короткое кеширование - 60 секунд
  SHORT: { next: { revalidate: 60 } },
  
  // Среднее кеширование - 5 минут
  MEDIUM: { next: { revalidate: 300 } },
  
  // Длинное кеширование - 1 час
  LONG: { next: { revalidate: 3600 } },
  
  // Очень длинное кеширование - 1 день
  VERY_LONG: { next: { revalidate: 86400 } },
  
  // Без кеширования
  NO_CACHE: { cache: "no-store" as const },
} as const;

/**
 * Получение данных с кешированием
 */
export async function fetchWithCache<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...CacheStrategy.MEDIUM,
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Получение статических данных (кешируются навсегда)
 */
export async function fetchStatic<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...CacheStrategy.STATIC,
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
}

