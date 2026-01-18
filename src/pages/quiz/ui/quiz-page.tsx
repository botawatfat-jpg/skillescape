import type { Metadata } from "next";
import styles from "./quiz-page.module.css";
import { QuizHeader } from "@/widgets/quiz-header";
import { GenderSelection } from "@/widgets/gender-selection";
import { textConfig } from "@/shared/config/text-config";
import { generatePageMetadata } from "@/shared/config/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "AI Freelancing Quiz - Find Your Perfect Path",
  description:
    "Take our personalized quiz to discover which AI freelancing skills match your interests and start your journey to financial freedom.",
  path: "/quiz",
  keywords: [
    "AI quiz",
    "freelancing quiz",
    "career assessment",
    "AI skills test",
    "freelancer assessment",
  ],
});

export const QuizPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <QuizHeader />

      <div className={styles.content}>
        <h1>{textConfig.quiz.title}</h1>

        <h3>{textConfig.quiz.subtitle}</h3>

        <h5>{textConfig.quiz.timer}</h5>

        <GenderSelection />
      </div>
    </div>
  );
};
