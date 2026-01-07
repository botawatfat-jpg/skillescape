"use client";

import { useReportWebVitals } from "next/web-vitals";
import { sendToAnalytics } from "@/shared/lib";

/**
 * Web Vitals reporter component
 * Next.js 15/16 - автоматический трекинг метрик производительности
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    // Отправляем метрики в аналитику
    sendToAnalytics({
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      navigationType: metric.navigationType,
    });
  });

  return null;
}

