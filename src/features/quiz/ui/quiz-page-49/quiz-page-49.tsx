"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-49.module.css";
import { Star, Code, Laptop, Bot } from "lucide-react";

export const QuizPage49 = () => {
    const router = useRouter();
    const [potentialScore, setPotentialScore] = useState(0);
    const targetScore = 75;

    useEffect(() => {
        const duration = 1000; // 2 seconds
        const steps = 60;
        const increment = targetScore / steps;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setPotentialScore(targetScore);
                clearInterval(timer);
            } else {
                setPotentialScore(Math.round(increment * currentStep));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, []);

    const handleContinue = () => {
        router.push("/quiz/questions?pageId=50");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <QuizTitle>Here&apos;s Your AI-Driven Income Growth Profile</QuizTitle>

                <div className={styles.profileCard}>
                    <div className={styles.scoreHeader}>
                        <h2 className={styles.scoreTitle}>AI-Expert potential score</h2>
                    </div>

                    <div className={styles.sliderSection}>
                        <div className={styles.sliderWrapper}>
                            <div className={styles.gradientBar}>
                                <div
                                    className={styles.indicator}
                                    style={{ left: `${potentialScore}%` }}
                                >
                                    <div className={styles.tooltip}>
                                        <div className={styles.tooltipContent}>
                                            Your potential<span> - {potentialScore}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.labels}>
                            <span>Low</span>
                            <span>Intermediate</span>
                            <span>High</span>
                        </div>
                    </div>

                    <div className={styles.infoBox}>
                        <div className={styles.infoSidebar}></div>
                        <div className={styles.infoContent}>
                            <h3 className={styles.infoTitle}>
                                Turn your AI automation potential into profit!
                            </h3>
                            <p className={styles.infoText}>
                                You have everything to monetize your skills! Let&apos;s get you started!
                            </p>
                        </div>
                    </div>

                    <div className={styles.skillsContainer}>
                        <div className={styles.skillsList}>
                            <div className={styles.skillItem}>
                                <div className={styles.iconBox}>
                                    <Star size={24} />
                                </div>
                                <div>
                                    <p className={styles.skillLabel}>Mindset match</p>
                                    <p className={styles.skillValue}>High</p>
                                </div>
                            </div>

                            <div className={styles.skillItem}>
                                <div className={styles.iconBox}>
                                    <Code size={24} />
                                </div>
                                <div>
                                    <p className={styles.skillLabel}>Coding Skills</p>
                                    <p className={styles.skillValue}>Absent</p>
                                </div>
                            </div>

                            <div className={styles.skillItem}>
                                <div className={styles.iconBox}>
                                    <Laptop size={24} />
                                </div>
                                <div>
                                    <p className={styles.skillLabel}>Freelancing Skills</p>
                                    <p className={styles.skillValue}>Sufficient</p>
                                </div>
                            </div>

                            <div className={styles.skillItem}>
                                <div className={styles.iconBox}>
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <p className={styles.skillLabel}>AI Awareness</p>
                                    <p className={styles.skillValue}>High</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/assets/quiz/quiz49-1.png"
                                alt="Summary illustration"
                                width={400}
                                height={400}
                                className={styles.image}
                            />
                        </div>

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
