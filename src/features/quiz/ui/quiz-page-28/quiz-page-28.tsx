"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-28.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage28 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=29");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>AI automations = Bitcoin 10 years ago</QuizTitle>

        <QuizDescription>
          You know that feeling of &quot;I wish I had started earlier&quot;?
          Learning AI automations today feels like catching a rare early moment.
        </QuizDescription>

        <div className={styles.imageContainer}>
          <Image
            src="https://d2tpw6ibsnrlae.cloudfront.net/quiz_prod/v6.0.7/202/media/AI automations bitcoin.webp"
            alt="AI automations"
            width={576}
            height={432}
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
