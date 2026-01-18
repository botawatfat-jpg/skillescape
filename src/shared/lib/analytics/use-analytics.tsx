"use client";

import { useCallback, useRef, useEffect } from "react";
import { pushDL } from "./push-datalayer";

/**
 * React Hook для работы с Google Tag Manager аналитикой
 * Используйте в клиентских компонентах для отслеживания событий
 * 
 * Поддерживаемые GTM события:
 * - quiz_start (quiz_id) - начало квиза
 * - quiz_progress (quiz_id, progress_percent) - прогресс квиза
 * - quiz_result_view (quiz_id, result_type) - просмотр результата
 * - lead_submit (lead_type) - отправка лида
 */
export function useAnalytics() {
  // Refs для предотвращения дублирования событий
  const quizStartFiredRef = useRef<Set<string>>(new Set());
  const leadSubmitFiredRef = useRef<Set<string>>(new Set());

  // Очистка при размонтировании (опционально)
  useEffect(() => {
    return () => {
      // При размонтировании можем очистить refs если нужно
      // но обычно хотим сохранять состояние между ре-монтированиями
    };
  }, []);

  /**
   * Отслеживание начала квиза
   * Гарантирует отправку события только один раз за сессию для конкретного quiz_id
   * 
   * @param quizId - Уникальный ID квиза (генерируется автоматически)
   */
  const trackQuizStart = useCallback((quizId: string) => {
    // Проверяем sessionStorage для межстраничной защиты
    const sessionKey = `quiz_start_${quizId}`;

    if (typeof window !== "undefined") {
      const alreadyFired = sessionStorage.getItem(sessionKey);
      if (alreadyFired) {
        console.log(`[Analytics] quiz_start already fired for ${quizId}, skipping`);
        return;
      }
    }

    // Проверяем ref для защиты от React StrictMode
    if (quizStartFiredRef.current.has(quizId)) {
      return;
    }

    // Отправляем событие
    pushDL("quiz_start", {
      quiz_id: quizId,
    });

    // Отмечаем как отправленное
    quizStartFiredRef.current.add(quizId);

    if (typeof window !== "undefined") {
      sessionStorage.setItem(sessionKey, "true");
    }
  }, []);

  /**
   * Отслеживание прогресса квиза
   * 
   * @param progressPercent - Процент прохождения (0-100)
   * @param quizId - Уникальный ID квиза
   */
  const trackQuizProgress = useCallback((
    progressPercent: number,
    quizId: string
  ) => {
    pushDL("quiz_progress", {
      quiz_id: quizId,
      progress_percent: Math.round(progressPercent),
    });
  }, []);

  /**
   * Отслеживание просмотра результата квиза
   * 
   * @param resultType - Тип результата (например "ai_beginner", "ai_expert")
   * @param quizId - Уникальный ID квиза
   */
  const trackQuizResultView = useCallback((
    resultType: string,
    quizId: string
  ) => {
    pushDL("quiz_result_view", {
      quiz_id: quizId,
      result_type: resultType,
    });
  }, []);

  /**
   * Отслеживание отправки лида
   * Гарантирует отправку события только один раз за сессию для конкретного типа лида
   * 
   * @param leadType - Тип лида (например "quiz_email", "waitlist", "consultation")
   * @param quizId - ID квиза (для A/B тестов и атрибуции)
   */
  const trackLeadSubmit = useCallback((leadType: string, quizId?: string) => {
    // Проверяем sessionStorage для межстраничной защиты
    const sessionKey = `lead_submit_${leadType}`;

    if (typeof window !== "undefined") {
      const alreadyFired = sessionStorage.getItem(sessionKey);
      if (alreadyFired) {
        console.log(`[Analytics] lead_submit already fired for ${leadType}, skipping`);
        return;
      }
    }

    // Проверяем ref для защиты от React StrictMode
    if (leadSubmitFiredRef.current.has(leadType)) {
      return;
    }

    // Отправляем событие
    pushDL("lead_submit", {
      lead_type: leadType,
      quiz_id: quizId || null, // Важно для A/B тестов и атрибуции
    });

    // Отмечаем как отправленное
    leadSubmitFiredRef.current.add(leadType);

    if (typeof window !== "undefined") {
      sessionStorage.setItem(sessionKey, "true");
    }
  }, []);

  /**
   * Отслеживание завершения квиза (legacy)
   * @deprecated Используйте trackQuizResultView для GTM событий
   */
  const trackQuizComplete = useCallback((score?: number, quizId?: string) => {
    pushDL("quiz_complete", {
      quiz_id: quizId || "unknown",
      score: score,
      page: typeof window !== "undefined" ? window.location.pathname : undefined,
    });
  }, []);

  // Отслеживание клика на кнопку
  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    pushDL("button_click", {
      button_name: buttonName,
      location: location || (typeof window !== "undefined" ? window.location.pathname : undefined),
    });
  }, []);

  // Отслеживание регистрации
  const trackSignUp = useCallback((method: string) => {
    pushDL("sign_up", {
      method: method, // email, google, facebook, etc.
    });

    // Также отправляем как конверсию
    pushDL("conversion", {
      conversion_name: "sign_up",
    });
  }, []);

  // Отслеживание логина
  const trackLogin = useCallback((method: string) => {
    pushDL("login", {
      method: method,
    });
  }, []);

  // Отслеживание просмотра продукта/курса
  const trackViewProduct = useCallback((productName: string, productId?: string) => {
    pushDL("view_item", {
      item_name: productName,
      item_id: productId,
    });
  }, []);

  // Отслеживание начала оформления подписки
  const trackBeginCheckout = useCallback((planName: string, value: number) => {
    pushDL("begin_checkout", {
      plan_name: planName,
      value: value,
      currency: "USD",
    });
  }, []);

  // Отслеживание покупки подписки
  const trackSubscriptionPurchase = useCallback(
    (transactionId: string, planName: string, value: number) => {
      // E-commerce purchase событие
      pushDL("purchase", {
        transaction_id: transactionId,
        value: value,
        currency: "USD",
      });

      // Дополнительное событие для подписки
      pushDL("subscription_purchase", {
        plan_name: planName,
        transaction_id: transactionId,
        value: value,
      });

      // Конверсия
      pushDL("conversion", {
        conversion_name: "subscription_purchase",
        value: value,
      });
    },
    []
  );

  // Отслеживание просмотра видео
  const trackVideoView = useCallback((videoName: string, duration?: number) => {
    pushDL("video_view", {
      video_name: videoName,
      duration: duration,
    });
  }, []);

  // Отслеживание скачивания
  const trackDownload = useCallback((fileName: string) => {
    pushDL("download", {
      file_name: fileName,
    });
  }, []);

  // Отслеживание поиска
  const trackSearch = useCallback((searchTerm: string) => {
    pushDL("search", {
      search_term: searchTerm,
    });
  }, []);

  // Отслеживание формы
  const trackFormSubmit = useCallback((formName: string) => {
    pushDL("form_submit", {
      form_name: formName,
    });
  }, []);

  /**
   * Универсальное отслеживание события
   * Используйте для кастомных событий, не покрытых специализированными методами
   * 
   * @param eventName - Название события
   * @param params - Параметры события
   */
  const trackEvent = useCallback((eventName: string, params?: Record<string, unknown>) => {
    pushDL(eventName, params);
  }, []);

  return {
    // Базовое событие
    trackEvent,

    // GTM события (новые, приоритетные)
    trackQuizStart,
    trackQuizProgress,
    trackQuizResultView,
    trackLeadSubmit,

    // Другие специфичные события
    trackButtonClick,
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
