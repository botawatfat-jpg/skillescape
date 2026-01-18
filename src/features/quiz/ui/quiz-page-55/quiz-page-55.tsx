"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-55.module.css";
import { useQuizStore } from "@/shared/store";
import Image from "next/image";
import { useAnalytics } from "@/shared/lib/analytics";

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const QuizPage55 = () => {
    const router = useRouter();
    const { updateQuizData } = useQuizStore();
    const { trackLeadSubmit, trackFormSubmit } = useAnalytics();
    const [email, setEmail] = useState("");
    const [agreeToReceive, setAgreeToReceive] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [checkboxError, setCheckboxError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Reset errors
        setEmailError("");
        setCheckboxError("");

        // Validate email
        if (!email.trim()) {
            setEmailError("Email is required");
            return;
        }

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        // Validate checkbox
        if (!agreeToReceive) {
            setCheckboxError("Please agree to receive updates");
            return;
        }

        // All validations passed
        updateQuizData({ email, agreeToReceive });
        
        // GTM: Отслеживаем отправку лида (email capture)
        // Событие сработает только один раз за сессию
        // ВАЖНО: передаём quiz_id для атрибуции и A/B тестов
        trackLeadSubmit("quiz_email", "ai_quiz_v1");
        trackFormSubmit("quiz_email_form");
        
        router.push("/quiz/questions?pageId=56");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <QuizTitle>
                    Enter your email to get your personal{" "}
                    <span className={styles.highlight}>AI-Expert Plan</span>
                </QuizTitle>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputContainer}>
                        <Input
                            type="email"
                            placeholder="email@gmail.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (emailError) setEmailError("");
                            }}
                            className={`${styles.emailInput} ${emailError ? styles.inputError : ""}`}
                        />
                        {emailError && (
                            <span className={styles.errorText}>{emailError}</span>
                        )}
                    </div>

                    <div className={styles.checkboxContainer}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={agreeToReceive}
                                onChange={(e) => {
                                    setAgreeToReceive(e.target.checked);
                                    if (checkboxError) setCheckboxError("");
                                }}
                                className={`${styles.checkbox} ${checkboxError ? styles.checkboxError : ""}`}
                            />
                            <span>I agree to receive latest updates and tips on earning with AI from Jobescape</span>
                        </label>
                        {checkboxError && (
                            <span className={styles.errorText}>{checkboxError}</span>
                        )}
                    </div>

                    <div className={styles.infoBox}>
                        <div className={styles.giftIcon}>
                            <Image
                                src="https://d2tpw6ibsnrlae.cloudfront.net/quiz_prod/v6.0.7/50/media/Image.png"
                                alt="Gift"
                                width={72}
                                height={72}
                            />
                        </div>
                        <div className={styles.infoText}>
                            <p>
                                Make sure your email is valid - get{" "}
                                <strong className={styles.highlight}>AI Agents Guidebook</strong> from us
                            </p>
                        </div>
                    </div>

                    <div className="buttonContainerQuiz">
                        <Button type="submit" className={styles.continueButton}>
                            Continue
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
