import React from "react";
import { QuizTitle, QuizQuote, RatingScale } from "@/features/quiz/shared";
import styles from "./quiz-page-25.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage25 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: number) => {
    updateQuizData({ fallingBehind: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=26");
    }, 300);
  };

  return (
    <div className={styles.container}>
      <QuizTitle>How true is this for you?</QuizTitle>

      <QuizQuote>
        &quot;Sometimes it feels like everyone is moving faster - and I&apos;m
        falling behind.&quot;
      </QuizQuote>

      <RatingScale
        name="fallingBehind"
        minLabel="not at all"
        maxLabel="completely"
        onChange={handleChange}
      />
    </div>
  );
};
