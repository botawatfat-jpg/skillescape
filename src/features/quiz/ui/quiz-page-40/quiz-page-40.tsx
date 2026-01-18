import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-40.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";
import { Check, X } from "lucide-react";

export const QuizPage40 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ knowsAiAutomation: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=41");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        Do you know how AI can automate tasks for businesses?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="knowsAiAutomation"
          value="yes"
          label="Yes"
          variant="card"
          icon={<Check size={28} />}
          onChange={() => handleChange("yes")}
        />
        <RadioOption
          name="knowsAiAutomation"
          value="no"
          label="No, I want to know"
          variant="card"
          icon={<X size={28} />}
          onChange={() => handleChange("no")}
        />
      </div>
    </div>
  );
};
