"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-41.module.css";
import { useQuizStore } from "@/shared/store";
import Lottie from "lottie-react";
import chatbotAnimation from "../../../../../public/assets/quiz/chatbot.json";

export const QuizPage41 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=42");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>AI Chatbot for Customer Support</QuizTitle>

        <div className={styles.lottieContainer}>
          <Lottie
            animationData={chatbotAnimation}
            loop={true}
            className={styles.lottie}
          />
        </div>


        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>💰</span>
            <span className={styles.text}>
              <strong>Average selling price:</strong> $2,000 - $10,000
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>⏱</span>
            <span className={styles.text}>
              <strong>Setup time:</strong> ~2 hours
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Answers customer inquiries 24/7</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Handles messages, returns, and FAQs</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Works on WhatsApp, Facebook</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>You just copy, connect, and start earning</span>
          </div>
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
