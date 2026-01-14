import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-26.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage26 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ socialMediaTime: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=27");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        Be honest - how much time do you spend on social media (tiktok,
        instagram, youtube) each day?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="socialMediaTime"
          value="0-1"
          label="0-1 hours"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>💤</span>}
          onChange={() => handleChange("0-1")}
        />
        <RadioOption
          name="socialMediaTime"
          value="1-3"
          label="1-3 hours"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>😊</span>}
          onChange={() => handleChange("1-3")}
        />
        <RadioOption
          name="socialMediaTime"
          value="3-5"
          label="3-5 hours"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>📱</span>}
          onChange={() => handleChange("3-5")}
        />
        <RadioOption
          name="socialMediaTime"
          value="5+"
          label="More than 5 hours"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🤪</span>}
          onChange={() => handleChange("5+")}
        />
      </div>
    </div>
  );
};
