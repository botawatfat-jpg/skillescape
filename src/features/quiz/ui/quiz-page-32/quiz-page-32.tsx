import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-32.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage32 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ confidenceFactor: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=33");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        What would make you feel confident it will actually work?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="confidenceFactor"
          value="step-by-step"
          label="Step-by-step guidance"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🧩</span>}
          onChange={() => handleChange("step-by-step")}
        />
        <RadioOption
          name="confidenceFactor"
          value="quick-wins"
          label="Seeing quick wins"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>⚡</span>}
          onChange={() => handleChange("quick-wins")}
        />
        <RadioOption
          name="confidenceFactor"
          value="mentorship"
          label="Expert mentorship"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🤝</span>}
          onChange={() => handleChange("mentorship")}
        />
        <RadioOption
          name="confidenceFactor"
          value="tools"
          label="Tools that save time and do the work"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🔧</span>}
          onChange={() => handleChange("tools")}
        />
      </div>
    </div>
  );
};
