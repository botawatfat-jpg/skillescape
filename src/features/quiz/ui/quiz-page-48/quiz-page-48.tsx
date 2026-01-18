import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-48.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";
import { DollarSign } from "lucide-react";

export const QuizPage48 = () => {
    const router = useRouter();
    const { updateQuizData } = useQuizStore();

    const handleChange = (value: string) => {
        updateQuizData({ priceThreshold: value });
        // Auto-redirect after 300ms
        setTimeout(() => {
            router.push("/quiz/questions?pageId=49");
        }, 300);
    };

    return (
        <div>
            <QuizTitle>
                At what price would a personal <span className={styles.highlight}>AI-Expert plan</span> with
                15+ free AI tools start to feel too expensive?
            </QuizTitle>

            <div className={styles.options}>
                <RadioOption
                    name="priceThreshold"
                    value="29"
                    label="$29"
                    variant="card"
                    icon={<DollarSign size={28} />}
                    onChange={() => handleChange("29")}
                />
                <RadioOption
                    name="priceThreshold"
                    value="39"
                    label="$39"
                    variant="card"
                    icon={<DollarSign size={28} />}
                    onChange={() => handleChange("39")}
                />
                <RadioOption
                    name="priceThreshold"
                    value="49"
                    label="$49"
                    variant="card"
                    icon={<DollarSign size={28} />}
                    onChange={() => handleChange("49")}
                />
            </div>
        </div>
    );
};
