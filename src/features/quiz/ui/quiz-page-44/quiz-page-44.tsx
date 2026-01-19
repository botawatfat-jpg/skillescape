"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-44.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage44 = () => {
    const router = useRouter();
    const { quizData } = useQuizStore();

    const handleContinue = () => {
        router.push("/quiz/questions?pageId=45");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <QuizTitle>
                    These are just a few of the automations you can build and sell
                </QuizTitle>

                <QuizDescription>
                    Skillescape gives you the proven frameworks and AI tools to create,
                    sell, and scale real automations that businesses already pay for.
                    Your Personal AI Expert Plan is designed to help you reach a
                    consistent $5K-7K/month.
                </QuizDescription>

                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/quiz/quiz44.png"
                        alt="Automation examples"
                        width={576}
                        height={432}
                        className={styles.image}
                    />
                </div>

                <p className={styles.disclaimer}>
                    This course is for educational purposes only and does not guarantee specific results. Success
                    depends on individual effort and application.
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
