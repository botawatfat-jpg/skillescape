"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-46.module.css";
import { useQuizStore } from "@/shared/store";
import Lottie from "lottie-react";
import teaserAnimation from "../../../../../public/assets/quiz/teaser.json";

export const QuizPage46 = () => {
    const router = useRouter();
    const { quizData } = useQuizStore();

    const handleContinue = () => {
        router.push("/quiz/questions?pageId=47");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <QuizTitle>
                    You&apos;re not starting from zero - you&apos;re starting smarter
                </QuizTitle>


                <div className={styles.lotteContainer}>
                    <Lottie animationData={teaserAnimation} loop={true} className={styles.lottie} />

                </div>

                <p className={styles.description}>
                    83 % of Skillescape students landed their first client within 30 days. We&apos;ll
                    guide you through proven client-finding methods and teach you how to sell
                    simple AI automations that businesses already pay for. No guessing. No
                    burnout. Just results you can repeat.
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
