"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-45.module.css";
import Image from "next/image";

export const QuizPage45 = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=37");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>
          83% of students got their first paying client within 30 days
        </QuizTitle>

        <div className={styles.lotteContainer}>
          <Image src="/assets/quiz/quiz45-1.png" alt="Quiz 45" width={506} height={320} />

        </div>

        <p className={styles.description}>
          We&apos;ll teach you proven methods to get clients on{" "}
          <span className={styles.link}>Upwork</span>,{" "}
          <span className={styles.link}>Fiverr</span>. Even total beginners can
          do that.
        </p>

        <div className="buttonContainerQuiz">
          <Button onClick={handleContinue} className={styles.button}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
