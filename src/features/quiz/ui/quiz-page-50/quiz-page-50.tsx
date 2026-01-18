"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-50.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage50 = () => {
    const router = useRouter();
    const { updateQuizData } = useQuizStore();

    const handleChange = (value: string) => {
        updateQuizData({ moneyReason: value });
        // Auto-redirect after 300ms
        setTimeout(() => {
            router.push("/quiz/questions?pageId=51");
        }, 300);
    };


    return (
        <div>
            <QuizTitle>
                Do you have specific reason for starting making money online?
            </QuizTitle>

            <div className={styles.options}>
                <RadioOption
                    name="moneyReason"
                    value="debts"
                    label="Get out of debts"
                    variant="card"
                    icon={<span style={{ fontSize: "28px" }}>💳</span>}
                    onChange={() => handleChange("debts")}
                />
                <RadioOption
                    name="moneyReason"
                    value="vacation"
                    label="Go on a vacation"
                    variant="card"
                    icon={<span style={{ fontSize: "28px" }}>🏝️</span>}
                    onChange={() => handleChange("vacation")}
                />
                <RadioOption
                    name="moneyReason"
                    value="wedding"
                    label="Have a perfect wedding"
                    variant="card"
                    icon={<span style={{ fontSize: "28px" }}>🎉</span>}
                    onChange={() => handleChange("wedding")}
                />
                <RadioOption
                    name="moneyReason"
                    value="car"
                    label="Get a new car"
                    variant="card"
                    icon={<span style={{ fontSize: "28px" }}>🚗</span>}
                    onChange={() => handleChange("car")}
                />
                <RadioOption
                    name="moneyReason"
                    value="apartment"
                    label="Buy an apartment"
                    variant="card"
                    icon={<span style={{ fontSize: "28px" }}>🏠</span>}
                    onChange={() => handleChange("apartment")}
                />
                <RadioOption
                    name="moneyReason"
                    value="student-loan"
                    label="Close student loan"
                    variant="card"
                    icon={<span style={{ fontSize: "28px" }}>🏛️</span>}
                    onChange={() => handleChange("student-loan")}
                />
            </div>

        </div>
    );
};
