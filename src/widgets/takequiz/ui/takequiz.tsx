import React from "react";
import styles from "./takequiz.module.css";
import { textConfig } from "@/shared/config/text-config";
import { QuizButton } from "@/features/quiz";

export const TakeQuiz: React.FC = () => {
  return (
    <section className={styles.takeQuiz}>
      <div className={styles.container}>
        <h2 className={styles.title}>{textConfig.takeQuiz.title}</h2>
        <p className={styles.description}>{textConfig.takeQuiz.description}</p>

        <QuizButton size="card" variant="white" className={styles.button}>
          {textConfig.takeQuiz.button}
        </QuizButton>
      </div>
    </section>
  );
};
