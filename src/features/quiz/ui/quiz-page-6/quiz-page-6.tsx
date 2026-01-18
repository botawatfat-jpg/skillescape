"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-6.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage6 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=7");
  };

  const getContent = () => {
    switch (quizData.experience) {
      case "no-experience":
        return (
          <>
            <QuizTitle>No experience? Perfect.</QuizTitle>

            <QuizDescription>
              120,000+ complete beginners started exactly like you. You’ll
              follow a simple, step-by-step plan - no tech skills needed.
            </QuizDescription>
          </>
        );

      case "tried-before":
        return (
          <>
            <QuizTitle>Let’s make this time different - and safer!</QuizTitle>

            <QuizDescription>
              No big promises. <br /> No hype. Just a proven, simple path that
              thousands followed after their previous attempts.
            </QuizDescription>
          </>
        );

      case "experienced":
        return (
          <>
            <QuizTitle>Thousands are earning with AI - you can too</QuizTitle>

            <QuizDescription>
            Skillescape gives you the exact tools, lessons, and roadmap to start and scale your AI-powered income, even if you&apos;re starting from zero
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
            src="https://d2tpw6ibsnrlae.cloudfront.net/quiz_prod/v6.0.7/10/media/Aspect Ratio.png"
            alt="Person using phone"
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
