"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { RadioOption, QuizTitle, QuizSubtitle } from "@/features/quiz/shared";
import { useQuizStore } from "@/shared/store";
import styles from "./quiz-page-1.module.css";

export const QuizPage1 = () => {
  const router = useRouter();
  const { quizData, updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ age: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=2");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>Let&apos;s create personal AI-Expert plan for you!</QuizTitle>

      <QuizSubtitle>First, how old are you?</QuizSubtitle>

      <div className={styles.options}>
        <RadioOption
          name="age"
          value="18-24"
          label="18-24"
          defaultChecked={quizData.age === "18-24"}
          onChange={() => handleChange("18-24")}
        />
        <RadioOption
          name="age"
          value="25-34"
          label="25-34"
          defaultChecked={quizData.age === "25-34"}
          onChange={() => handleChange("25-34")}
        />
        <RadioOption
          name="age"
          value="35-44"
          label="35-44"
          defaultChecked={quizData.age === "35-44" || !quizData.age}
          onChange={() => handleChange("35-44")}
        />
        <RadioOption
          name="age"
          value="45+"
          label="45+"
          defaultChecked={quizData.age === "45+"}
          onChange={() => handleChange("45+")}
        />
      </div>
    </div>
  );
};
