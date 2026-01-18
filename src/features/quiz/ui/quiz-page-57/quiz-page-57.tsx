"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-57.module.css";
import { useQuizStore } from "@/shared/store";
import Lottie from "lottie-react";
import animationData from "../../../../../public/assets/quiz/graph.json";

export const QuizPage57 = () => {
    const router = useRouter();
    const { quizData } = useQuizStore();
    const name = quizData?.name || "there";

    const handleSeePlan = () => {
        router.push("/subscription");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <QuizTitle>
                    {name}, your 4-week AI-Expert Plan is ready
                </QuizTitle>

                <div className={styles.lottieContainer}>
                    <Lottie animationData={animationData} />
                </div>

                <div className={styles.planFocus}>
                    <p className={styles.focusTitle}>
                        🎯 Here&apos;s what your AI-Expert Plan focuses on:
                    </p>

                    <div className={styles.focusList}>
                        <div className={styles.focusItem}>
                            <span className={styles.focusIcon}>📎</span>
                            <div className={styles.focusContent}>
                                <strong className={styles.focusLabel}>Clarity & structure</strong>
                                <span className={styles.focusText}>
                                    {" "}- finally see a clear, week-by-week path to earning with AI
                                </span>
                            </div>
                        </div>

                        <div className={styles.focusItem}>
                            <span className={styles.focusIcon}>📁</span>
                            <div className={styles.focusContent}>
                                <strong className={styles.focusLabel}>Client-ready portfolio</strong>
                                <span className={styles.focusText}>
                                    {" "}- finish with a proven freelancer profile, automations, and templates ready to pitch to clients
                                </span>
                            </div>
                        </div>

                        <div className={styles.focusItem}>
                            <span className={styles.focusIcon}>📈</span>
                            <div className={styles.focusContent}>
                                <strong className={styles.focusLabel}>Results, not theory</strong>
                                <span className={styles.focusText}>
                                    {" "}- build 6+ working automations for real businesses in a short time
                                </span>
                            </div>
                        </div>

                        <div className={styles.focusItem}>
                            <span className={styles.focusIcon}>🛠️</span>
                            <div className={styles.focusContent}>
                                <strong className={styles.focusLabel}>Confidence & skills</strong>
                                <span className={styles.focusText}>
                                    {" "}- learn the exact tools that top freelancers use daily
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttonContainerQuiz">
                    <Button
                        onClick={handleSeePlan}
                        className={styles.seePlanButton}
                    >
                        See My Plan
                    </Button>
                </div>
            </div>
        </div>
    );
};
