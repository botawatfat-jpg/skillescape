import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-24.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage24 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ idealHours: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=25");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        Ideally, how many hours a day would you like to work - if money
        wasn&apos;t a problem?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="idealHours"
          value="less-4"
          label="Less than 4 hours"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🧘</span>}
          onChange={() => handleChange("less-4")}
        />
        <RadioOption
          name="idealHours"
          value="4-6"
          label="4-6 hours"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>😊</span>}
          onChange={() => handleChange("4-6")}
        />
        <RadioOption
          name="idealHours"
          value="6-8"
          label="6-8 hours"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>💼</span>}
          onChange={() => handleChange("6-8")}
        />
        <RadioOption
          name="idealHours"
          value="more-8"
          label="More than 8 hours"
          variant="card"
          icon={<span style={{ fontSize: "28px" }}>🔥</span>}
          onChange={() => handleChange("more-8")}
        />
      </div>
    </div>
  );
};
