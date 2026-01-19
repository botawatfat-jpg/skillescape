"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-12.module.css";

export const QuizPage12 = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=13");
  };

  return (
    <div className={styles.content}>
      <QuizTitle>You&apos;re not alone</QuizTitle>

      <QuizDescription>
        Thousands of people were in the same place before discovering Skillescape. With the AI Expert Plan, you don’t need to reinvent yourself - just follow a clear roadmap that helps you earn more and create flexibility in your life.
      </QuizDescription>

      <div className={styles.imageContainer}>
        <Image
          src="/assets/quiz/quiz12.png"
          alt="People around the world"
          width={576}
          height={432}
          className={styles.image}
        />
      </div>

      <div className="buttonContainerQuiz">
        <Button onClick={handleContinue} className={styles.button}>
          Continue
        </Button>
      </div>
    </div>
  );
};
