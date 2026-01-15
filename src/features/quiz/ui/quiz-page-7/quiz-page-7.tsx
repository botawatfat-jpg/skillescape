"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { CardOption, QuizTitle, QuizSubtitle } from "@/features/quiz/shared";
import styles from "./quiz-page-7.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage7 = () => {
  const router = useRouter();
  const { quizData, updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ challenges: [...(quizData.challenges || []), value] });
  };

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=8");
  };

  return (
    <div>
      <QuizTitle>
        What challenges are you facing in your current job or business?
      </QuizTitle>

      <QuizSubtitle>Choose all that apply</QuizSubtitle>

      <div className={styles.grid}>
        <CardOption
          name="challenges"
          value="low-income"
          label="Low income"
          onChange={() => handleChange("low-income")}
        />
        <CardOption
          name="challenges"
          value="lack-of-time"
          label="Lack of free time"
          onChange={() => handleChange("lack-of-time")}
        />
        <CardOption
          name="challenges"
          value="feeling-stuck"
          label="Feeling stuck"
          onChange={() => handleChange("feeling-stuck")}
        />
        <CardOption
          name="challenges"
          value="work-life-balance"
          label="Poor work-life balance"
          onChange={() => handleChange("work-life-balance")}
        />
        <CardOption
          name="challenges"
          value="burnout"
          label="Burnout & stress"
          onChange={() => handleChange("burnout")}
        />
        <CardOption
          name="challenges"
          value="toxic-culture"
          label="Toxic work culture"
          onChange={() => handleChange("toxic-culture")}
        />
        <CardOption
          name="challenges"
          value="no-recognition"
          label="No recognition"
          onChange={() => handleChange("no-recognition")}
        />
        <CardOption
          name="challenges"
          value="no-growth"
          label="No career growth"
          onChange={() => handleChange("no-growth")}
        />
        <CardOption name="challenges" value="boring-job" label="Boring job" />
      </div>

      <div className="buttonContainerQuiz">
        <Button onClick={handleContinue} className={styles.button}>
          Continue
        </Button>
      </div>
    </div>
  );
};
