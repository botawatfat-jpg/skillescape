/**
 * Утилиты для мониторинга производительности
 * Next.js 15/16 - Web Vitals tracking
 */

export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  navigationType: string;
}

/**
 * Отправка метрик в аналитику
 */
export function sendToAnalytics(metric: WebVitalsMetric) {
  // В production отправляем в Google Analytics, Vercel Analytics и т.д.
    const body = JSON.stringify(metric);
    const url = "/api/analytics";

    // Используем sendBeacon если доступен, иначе fetch
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, {
        body,
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
      });
    }
}

/**
 * Debounce функция для оптимизации событий
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle функция для оптимизации событий
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Lazy load компонента только при видимости
 */
export function lazyLoadOnVisible(
  element: HTMLElement,
  callback: () => void
): IntersectionObserver {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    },
    { rootMargin: "50px" }
  );

  observer.observe(element);
  return observer;
}

/**
 * Prefetch ресурса
 */
export function prefetchResource(
  url: string,
  type: "script" | "style" | "image"
) {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = url;
  link.as = type;
  document.head.appendChild(link);
}

/**
 * Измерение времени выполнения функции
 */
export async function measurePerformance<T>(
  name: string,
  fn: () => Promise<T> | T
): Promise<T> {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();

  console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);

  return result;
}
