import React from "react";
import {
  QuizTitle,
  QuizQuote,
  RatingScale,
} from "@/features/quiz/shared";
import styles from "./quiz-page-11.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage11 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: number) => {
    updateQuizData({ readiness: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=12");
    }, 300);
  };

  return (
    <div className={styles.container}>
      <QuizTitle>How true is this for you?</QuizTitle>

      <QuizQuote>
        &quot;I&apos;m ready to learn new skills that could help me earn more
        or build something of my own&quot;
      </QuizQuote>

      <RatingScale name="readiness" minLabel="not at all" maxLabel="completely" onChange={handleChange} />
    </div>
  );
};
