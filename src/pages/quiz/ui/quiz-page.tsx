import type { Metadata } from "next";
import styles from "./quiz-page.module.css";
import { QuizHeader } from "@/widgets/quiz-header";
import { GenderSelection } from "@/widgets/gender-selection";
import { textConfig } from "@/shared/config/text-config";

export const metadata: Metadata = {
  title: "Quiz",
};

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
