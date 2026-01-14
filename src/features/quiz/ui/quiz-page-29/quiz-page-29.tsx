import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-29.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage29 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ excitingThing: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=30");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        What&apos;s the most exciting thing about earning with AI for you?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="excitingThing"
          value="high-earning"
          label="High earning potential"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>💰</span>}
          onChange={() => handleChange("high-earning")}
        />
        <RadioOption
          name="excitingThing"
          value="flexibility"
          label="Flexibility & remote work"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🌍</span>}
          onChange={() => handleChange("flexibility")}
        />
        <RadioOption
          name="excitingThing"
          value="automating"
          label="Automating work & scaling income"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>⚙️</span>}
          onChange={() => handleChange("automating")}
        />
        <RadioOption
          name="excitingThing"
          value="learning"
          label="Learning cutting-edge AI skills"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🚀</span>}
          onChange={() => handleChange("learning")}
        />
      </div>
    </div>
  );
};
