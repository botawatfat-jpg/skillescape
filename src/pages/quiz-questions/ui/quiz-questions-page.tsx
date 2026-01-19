"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { QuizLayout } from "@/widgets/quiz-layout";
import {
  QuizPage1,
  QuizPage2,
  QuizPage3,
  QuizPage4,
  QuizPage5,
  QuizPage6,
  QuizPage7,
  QuizPage8,
  QuizPage9,
  QuizPage10,
  QuizPage11,
  QuizPage12,
  QuizPage13,
  QuizPage14,
  QuizPage15,
  QuizPage16,
  QuizPage17,
  QuizPage18,
  QuizPage19,
  QuizPage20,
  QuizPage21,
  QuizPage22,
  QuizPage23,
  QuizPage24,
  QuizPage25,
  QuizPage26,
  QuizPage27,
  QuizPage28,
  QuizPage29,
  QuizPage30,
  QuizPage31,
  QuizPage32,
  QuizPage33,
  QuizPage34,
  QuizPage35,
  QuizPage36,
  QuizPage37,
  QuizPage38,
  QuizPage39,
  QuizPage40,
  QuizPage41,
  QuizPage42,
  QuizPage43,
  QuizPage44,
  QuizPage45,
  QuizPage46,
  QuizPage47,
  QuizPage48,
  QuizPage49,
  QuizPage50,
  QuizPage51,
  QuizPage52,
  QuizPage53,
  QuizPage54,
  QuizPage55,
  QuizPage56,
  QuizPage57,
} from "@/features/quiz/ui";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useAnalytics } from "@/shared/lib/analytics";
import { useQuizStore } from "@/shared/store";

export const QuizQuestionsPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageId = Number(searchParams?.get("pageId")) || 0;

  // Analytics
  const { trackQuizStart, trackQuizProgress, trackEvent } = useAnalytics();
  const lastTrackedProgress = useRef<number>(-1);

  // Quiz data для отправки в GTM
  const { quizData, generateQuizId } = useQuizStore();

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    if (pageId === 0) {
      router.push("/quiz/questions?pageId=1");
    }
  }, [router, pageId]);

  const renderContent = () => {
    switch (pageId) {
      case 1:
        return {
          content: <QuizPage1 />,
          progress: 0,
          title: "My profile",
          withLayout: true,
        };
      case 2:
        return {
          content: <QuizPage2 />,
          progress: 10,
          title: "My profile",
          withLayout: true,
        };
      case 3:
        return {
          content: <QuizPage3 />,
          progress: 20,
          title: "My profile",
          withLayout: true,
        };
      case 4:
        return {
          content: <QuizPage4 />,
          progress: 30,
          title: "My profile",
          withLayout: true,
        };
      case 5:
        return {
          content: <QuizPage5 />,
          progress: 40,
          title: "My profile",
          withLayout: true,
        };
      case 6:
        return {
          content: <QuizPage6 />,
          progress: 50,
          title: "My profile",
          withLayout: true,
        };
      case 7:
        return {
          content: <QuizPage7 />,
          progress: 50,
          title: "My profile",
          withLayout: true,
        };
      case 8:
        return {
          content: <QuizPage8 />,
          progress: 50,
          title: "My profile",
          withLayout: true,
        };
      case 9:
        return {
          content: <QuizPage9 />,
          progress: 60,
          title: "My profile",
          withLayout: true,
        };
      case 10:
        return {
          content: <QuizPage10 />,
          progress: 70,
          title: "My profile",
          withLayout: true,
        };
      case 11:
        return {
          content: <QuizPage11 />,
          progress: 80,
          title: "My profile",
          withLayout: true,
        };
      case 12:
        return {
          content: <QuizPage12 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 13:
        return {
          content: <QuizPage13 />,
          progress: 90,
          title: "My profile",
          withLayout: true,
        };
      case 14:
        return {
          content: <QuizPage14 />,
          progress: 0,
          title: "My profile",
          withLayout: true,
        };
      case 15:
        return {
          content: <QuizPage15 />,
          progress: 33.33,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 16:
        return {
          content: <QuizPage16 />,
          progress: 36,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 17:
        return {
          content: <QuizPage17 />,
          progress: 39,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 18:
        return {
          content: <QuizPage18 />,
          progress: 42,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 19:
        return {
          content: <QuizPage19 />,
          progress: 45,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 20:
        return {
          content: <QuizPage20 />,
          progress: 48,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 21:
        return {
          content: <QuizPage21 />,
          progress: 0,
          title: "Income Goals",
          withLayout: true,
        };
      case 22:
        return {
          content: <QuizPage22 />,
          progress: 0,
          title: "Income Goals",
          withLayout: true,
        };
      case 23:
        return {
          content: <QuizPage23 />,
          progress: 55,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 24:
        return {
          content: <QuizPage24 />,
          progress: 58,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 25:
        return {
          content: <QuizPage25 />,
          progress: 61,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 26:
        return {
          content: <QuizPage26 />,
          progress: 65,
          barSeparation: true,
          title: "Income Goals",
          withLayout: true,
        };
      case 27:
        return {
          content: <QuizPage27 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 28:
        return {
          content: <QuizPage28 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 29:
        return {
          content: <QuizPage29 />,
          progress: 70,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };

      // развилка 1 - 31, 2 - 39 (37 это пересечение)
      case 30:
        return {
          content: <QuizPage30 />,
          progress: 73,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 31:
        return {
          content: <QuizPage31 />,
          progress: 0,
          title: "AI Skills",
          withLayout: true,
        };
      case 32:
        return {
          content: <QuizPage32 />,
          progress: 76,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 33:
        return {
          content: <QuizPage33 />,
          progress: 79,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 34:
        return {
          content: <QuizPage34 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 35:
        return {
          content: <QuizPage35 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 36:
        return {
          content: <QuizPage36 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 37:
        return {
          content: <QuizPage37 />,
          progress: 82,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 38:
        return {
          content: <QuizPage38 />,
          progress: 85,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 39:
        return {
          content: <QuizPage39 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 40:
        return {
          content: <QuizPage40 />,
          progress: 88,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 41:
        return {
          content: <QuizPage41 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 42:
        return {
          content: <QuizPage42 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 43:
        return {
          content: <QuizPage43 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 44:
        return {
          content: <QuizPage44 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 45:
        return {
          content: <QuizPage45 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 46:
        return {
          content: <QuizPage46 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 47:
        return {
          content: <QuizPage47 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 48:
        return {
          content: <QuizPage48 />,
          progress: 91,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 49:
        return {
          content: <QuizPage49 />,
          progress: 0,
          title: "",
          withLayout: true,
        };
      case 50:
        return {
          content: <QuizPage50 />,
          progress: 94,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 51:
        return {
          content: <QuizPage51 />,
          progress: 97,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 52:
        return {
          content: <QuizPage52 />,
          progress: 99,
          barSeparation: true,
          title: "AI Skills",
          withLayout: true,
        };
      case 53:
        return {
          content: <QuizPage53 />,
          progress: 100,
          barSeparation: true,
          title: "",
          withLayout: true,
        };
      case 54:
        return {
          content: <QuizPage54 />,
          progress: 100,
          barSeparation: true,
          title: "",
          withLayout: true,
        };
      case 55:
        return {
          content: <QuizPage55 />,
          progress: 100,
          barSeparation: true,
          title: "Email",
          withLayout: true,
        };
      case 56:
        return {
          content: <QuizPage56 />,
          progress: 100,
          barSeparation: true,
          title: "Name",
          withLayout: true,
        };
      case 57:
        return {
          content: <QuizPage57 />,
          progress: 100,
          barSeparation: true,
          title: "Your Plan",
          withLayout: true,
        };
      default:
        return null;
    }
  };


  // GTM Analytics: Отслеживание прогресса квиза
  useEffect(() => {
    const content = renderContent();

    if (!content) return;

    // Генерируем или получаем существующий quiz ID
    const quizId = generateQuizId();
    const progress = content.progress || 0;
    const title = content.title || "";
    const isMotivationScreen = title === ""; // Мотивационный экран если title пустой

    // Отслеживаем начало квиза на первой странице
    if (pageId === 1) {
      trackQuizStart(quizId);
    }

    // Отслеживаем прогресс только если:
    // 1. Прогресс больше 0
    // 2. Это не мотивационный экран
    // 3. Прогресс изменился с последнего отслеживания
    if (progress > 0 && !isMotivationScreen && progress !== lastTrackedProgress.current) {
      trackQuizProgress(progress, quizId);
      lastTrackedProgress.current = progress;
    }

    // Отслеживаем просмотр результата на финальной странице (57)
    if (pageId === 57) {
      // Отправляем все данные квиза в GTM как JSON
      trackEvent("quiz_result_view", {
        quiz_id: quizId,
        // Демографические данные
        gender: quizData.gender || null,
        age_group: quizData.age || null,
        // Навыки
        coding_level: quizData.coding || null,
        freelancing_level: quizData.freelancing || null,
        ai_tools: quizData.aiTools || [],
        // Финансы
        income_goal: quizData.incomeGoal || null,
        goal_amount: quizData.goalAmount || null,
        price_threshold: quizData.priceThreshold || null,
        // Мотивация
        readiness: quizData.readiness || null,
        guided_plan: quizData.guidedPlan || null,
        // Контакты (НЕ отправляем сам email - только факт наличия)
        has_email: !!quizData.email,
        has_name: !!quizData.name,
        // Рабочие предпочтения
        work_style: quizData.workStyle || null,
        ideal_hours: quizData.idealHours || null,
        time_commitment: quizData.timeCommitment || null,
        // Опыт и цели
        user_goal: quizData.goal || null,
        user_status: quizData.status || null,
        user_experience: quizData.experience || null,
      });

    }
  }, [pageId, trackQuizStart, trackQuizProgress, trackEvent, quizData]);


  const pageData = renderContent();

  if (!pageData) return null;

  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  if (pageData.withLayout) {
    return (
      <QuizLayout
        title={pageData.title}
        progress={pageData.progress}
        onBack={handleBack}
        barSeparation={pageData.barSeparation || false}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pageId}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {pageData.content}
          </motion.div>
        </AnimatePresence>
      </QuizLayout>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageId}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {pageData.content}
      </motion.div>
    </AnimatePresence>
  );
};
