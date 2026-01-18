import type { Metadata } from "next";
import { generatePageMetadata } from "@/shared/config/seo-config";

export { QuizQuestionsPage as default } from "./ui/quiz-questions-page";

export const metadata: Metadata = generatePageMetadata({
  title: "Quiz Questions - Discover Your AI Skills",
  description:
    "Answer personalized questions to find the best AI freelancing path for your skills and interests.",
  path: "/quiz/questions",
  keywords: [
    "AI assessment",
    "skill evaluation",
    "personalized quiz",
    "AI career path",
  ],
  noindex: true, // Не индексируем страницу с вопросами, так как это процесс
});
