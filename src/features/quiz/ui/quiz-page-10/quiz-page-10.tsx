import React from "react";
import {
  QuizTitle,
  QuizQuote,
  RatingScale,
} from "@/features/quiz/shared";
import styles from "./quiz-page-10.module.css";
import { useQuizStore } from "@/shared/store";
import { useRouter } from "next/navigation";

export const QuizPage10 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: number) => {
    updateQuizData({ freedom: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=11");
    }, 300);
  };
  
  return (
    <div className={styles.container}>
      <QuizTitle>How true is this for you?</QuizTitle>

      <QuizQuote>
        &quot;I want more freedom and flexibility in how I work and earn - maybe
        even start something online&quot;
      </QuizQuote>

      <RatingScale name="freedom" minLabel="not at all" maxLabel="completely" onChange={handleChange} />
    </div>
  );
};
