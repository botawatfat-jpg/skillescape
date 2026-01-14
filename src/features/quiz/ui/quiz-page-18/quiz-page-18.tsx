import React from "react";
import { QuizTitle, QuizQuote, RatingScale } from "@/features/quiz/shared";
import styles from "./quiz-page-18.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage18 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: number) => {
    updateQuizData({ smarterWay: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=19");
    }, 300);
  };

  return (
    <div className={styles.container}>
      <QuizTitle>How true is this for you?</QuizTitle>

      <QuizQuote>
        &quot;I believe there has to be a smarter, easier way to earn - I just
        haven&apos;t found it yet&quot;
      </QuizQuote>

      <RatingScale
        name="smarterWay"
        minLabel="not at all"
        maxLabel="completely"
        onChange={handleChange}
      />
    </div>
  );
};
