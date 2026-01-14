import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-23.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage23 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ workStyle: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=24");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>What kind of work style feels right for you?</QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="workStyle"
          value="flexible"
          label="Flexible & independent"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🏝️</span>}
          onChange={() => handleChange("flexible")}
        />
        <RadioOption
          name="workStyle"
          value="creative"
          label="Creative & self-driven"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🧠</span>}
          onChange={() => handleChange("creative")}
        />
        <RadioOption
          name="workStyle"
          value="structured"
          label="Structured & stable"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>📊</span>}
          onChange={() => handleChange("structured")}
        />
        <RadioOption
          name="workStyle"
          value="fast-paced"
          label="Fast-paced & challenging"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>⚡</span>}
          onChange={() => handleChange("fast-paced")}
        />
      </div>
    </div>
  );
};
