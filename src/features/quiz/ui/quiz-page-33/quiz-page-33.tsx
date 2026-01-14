import React from "react";
import { QuizTitle, QuizQuote, RatingScale } from "@/features/quiz/shared";
import styles from "./quiz-page-33.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage33 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: number) => {
    updateQuizData({ guidedPlan: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=34");
    }, 300);
  };

  return (
    <div className={styles.container}>
      <QuizTitle>How true is this for you?</QuizTitle>

      <QuizQuote>
        &quot;It would feel easier if I could follow a simple, guided plan
        instead of figuring out AI on my own&quot;
      </QuizQuote>

      <RatingScale
        name="guidedPlan"
        minLabel="not at all"
        maxLabel="completely"
        onChange={handleChange}
      />
    </div>
  );
};
