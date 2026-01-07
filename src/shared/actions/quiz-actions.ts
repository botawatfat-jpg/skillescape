"use server";

/**
 * Server Actions для работы с квизом
 * Next.js 15/16 - серверные действия для форм без API routes
 */

interface QuizData {
  answers: Record<string, string>;
  timestamp: number;
}

interface QuizResult {
  success: boolean;
  recommendedCourse?: string;
  learningPath?: string[];
  message?: string;
}

/**
 * Обработка отправки квиза
 * Использует Server Actions для обработки на сервере
 */
export async function submitQuiz(formData: FormData): Promise<QuizResult> {
  try {
    // Извлекаем данные из FormData
    const answers: Record<string, string> = {};

    for (const [key, value] of formData.entries()) {
      answers[key] = value.toString();
    }

    // Здесь будет логика обработки квиза
    // Например, отправка на внешний API или обработка на сервере

    // Симуляция задержки обработки
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Возвращаем рекомендации на основе ответов
    return {
      success: true,
      recommendedCourse: "AI Powered Problem Solver",
      learningPath: [
        "Introduction to AI Tools",
        "ChatGPT Mastery",
        "Automation Basics",
        "Client Acquisition",
      ],
    };
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return {
      success: false,
      message: "Failed to submit quiz. Please try again.",
    };
  }
}

/**
 * Валидация email
 */
export async function validateEmail(email: string): Promise<boolean> {
  "use server";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Подписка на newsletter
 */
export async function subscribeNewsletter(
  email: string
): Promise<{ success: boolean; message: string }> {
  "use server";

  try {
    const isValid = await validateEmail(email);

    if (!isValid) {
      return {
        success: false,
        message: "Please enter a valid email address",
      };
    }

    // Здесь будет интеграция с email сервисом
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "Failed to subscribe. Please try again later.",
    };
  }
}
