"use client";

import { useCallback } from "react";
import { trackEvent, trackConversion, trackPurchase } from "@/shared/config/analytics-config";

/**
 * React Hook для работы с аналитикой
 * Используйте в клиентских компонентах для отслеживания событий
 */
export function useAnalytics() {
  // Отслеживание клика на кнопку
  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    trackEvent("button_click", {
      button_name: buttonName,
      location: location || window.location.pathname,
    });
  }, []);

  // Отслеживание начала квиза
  const trackQuizStart = useCallback(() => {
    trackEvent("quiz_start", {
      page: window.location.pathname,
    });
  }, []);

  // Отслеживание завершения квиза
  const trackQuizComplete = useCallback((score?: number) => {
    trackEvent("quiz_complete", {
      score: score,
      page: window.location.pathname,
    });
  }, []);

  // Отслеживание регистрации
  const trackSignUp = useCallback((method: string) => {
    trackConversion("sign_up");
    trackEvent("sign_up", {
      method: method, // email, google, facebook, etc.
    });
  }, []);

  // Отслеживание логина
  const trackLogin = useCallback((method: string) => {
    trackEvent("login", {
      method: method,
    });
  }, []);

  // Отслеживание просмотра продукта/курса
  const trackViewProduct = useCallback((productName: string, productId?: string) => {
    trackEvent("view_item", {
      item_name: productName,
      item_id: productId,
    });
  }, []);

  // Отслеживание начала оформления подписки
  const trackBeginCheckout = useCallback((planName: string, value: number) => {
    trackEvent("begin_checkout", {
      plan_name: planName,
      value: value,
      currency: "USD",
    });
  }, []);

  // Отслеживание покупки подписки
  const trackSubscriptionPurchase = useCallback(
    (transactionId: string, planName: string, value: number) => {
      trackPurchase(transactionId, value);
      trackConversion("subscription_purchase");
      trackEvent("subscription_purchase", {
        plan_name: planName,
        transaction_id: transactionId,
      });
    },
    []
  );

  // Отслеживание просмотра видео
  const trackVideoView = useCallback((videoName: string, duration?: number) => {
    trackEvent("video_view", {
      video_name: videoName,
      duration: duration,
    });
  }, []);

  // Отслеживание скачивания
  const trackDownload = useCallback((fileName: string) => {
    trackEvent("download", {
      file_name: fileName,
    });
  }, []);

  // Отслеживание поиска
  const trackSearch = useCallback((searchTerm: string) => {
    trackEvent("search", {
      search_term: searchTerm,
    });
  }, []);

  // Отслеживание формы
  const trackFormSubmit = useCallback((formName: string) => {
    trackEvent("form_submit", {
      form_name: formName,
    });
  }, []);

  return {
    // Базовое событие
    trackEvent,
    
    // Специфичные события
    trackButtonClick,
    trackQuizStart,
    trackQuizComplete,
    trackSignUp,
    trackLogin,
    trackViewProduct,
    trackBeginCheckout,
    trackSubscriptionPurchase,
    trackVideoView,
    trackDownload,
    trackSearch,
    trackFormSubmit,
  };
}
