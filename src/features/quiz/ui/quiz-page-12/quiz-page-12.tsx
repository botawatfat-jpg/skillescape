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
        Most HARD workers felt the same before finding a smarter path.
        Skillescape&apos;s AI Expert Plan helps you turn your experience into
        freedom. You don&apos;t need to start over or take big risks - just a
        clear, guided path to grow income on your pace.
      </QuizDescription>

      <div className={styles.imageContainer}>
        <Image
          src="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.0.4/90/media/Aspect Ratio-1.webp"
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
