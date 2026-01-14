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
} from "@/features/quiz/ui";
import { useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export const QuizQuestionsPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageId = Number(searchParams?.get("pageId")) || 0;

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
      default:
        return null;
    }
  };

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
