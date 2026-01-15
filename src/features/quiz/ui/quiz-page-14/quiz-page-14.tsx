"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-14.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage14 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=15");
  };

  const getContent = () => {
    switch (quizData.coding) {
      case "yes":
        return (
          <>
            <QuizTitle>Your coding skills are a huge advantage!</QuizTitle>

            <QuizDescription>
              With your coding skills you can master AI in just 1 week! Just use
              our step-by-step guide
            </QuizDescription>
          </>
        );

      case "no":
        return (
          <>
            <QuizTitle>No coding? No problem!</QuizTitle>

            <QuizDescription>
              With Skillescape you can master AI in just 2 weeks! No coding
              needed, no degree needed - just use our step-by-step guide
            </QuizDescription>
          </>
        );

      default:
        return (
          <>
            <QuizTitle>No coding? No problem!</QuizTitle>

            <QuizDescription>
              With Skillescape you can master AI in just 2 weeks! No coding
              needed, no degree needed - just use our step-by-step guide
            </QuizDescription>
          </>
        );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {getContent()}
        <div className={styles.imageContainer}>
          <Image
            src="https://d2tpw6ibsnrlae.cloudfront.net/quiz_prod/v6.0.7/18/media/image 10.webp"
            alt="Person working on laptop"
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
    </div>
  );
};
