import React from "react";
import { QuizTitle, QuizQuote, RatingScale } from "@/features/quiz/shared";
import styles from "./quiz-page-9.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage9 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: number) => {
    updateQuizData({ agreement: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=10");
    }, 300);
  };

  return (
    <div className={styles.container}>
      <QuizTitle>How true is this for you?</QuizTitle>

      <QuizQuote>
        &quot;Lately I&apos;ve been thinking that working harder isn&apos;t the
        answer - I need a smarter way to grow&quot;
      </QuizQuote>

      <RatingScale
        name="agreement"
        minLabel="not at all"
        maxLabel="completely"
        onChange={handleChange}
      />
    </div>
  );
};
