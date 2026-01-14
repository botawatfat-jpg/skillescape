"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-22.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage22 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=23");
  };

  const financesNormal = quizData.financesNormal;

  const content = financesNormal ? (
    <>
      <QuizTitle>Build your next income engine with AI</QuizTitle>

      <QuizDescription>
        Turn your experience into a new, scalable income stream using AI.
        Skillescape gives you a proven system - our students often see their first
        $2,000 within a month, spending only a few hours a day
      </QuizDescription>
    </>
  ) : (
    <>
      <QuizTitle>Leave financial stress and worries behind</QuizTitle>

      <QuizDescription>
        With Skillescape, you&apos;ll learn how to build and sell simple AI
        automations - even as a complete beginner. Most students made their
        first $2,000 within one month by following our guided plan
      </QuizDescription>
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {content}

        <div className={styles.imageContainer}>
          <Image
            src="https://d2tpw6ibsnrlae.cloudfront.net/templates/teaser-default/media/15.webp"
            alt="Income growth"
            width={320}
            height={320}
            className={styles.image}
          />
        </div>

        <p className={styles.disclaimer}>
          This course is for educational purposes only and does not guarantee
          specific results. Success depends on individual effort and
          application.
        </p>

        <div className={styles.buttonContainer}>
          <Button onClick={handleContinue} className={styles.button}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
