import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-52.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";
import { Clock } from "lucide-react";

export const QuizPage52 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ timeCommitment: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=53");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        How much time you want to dedicate to achieve your goal?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="timeCommitment"
          value="30-60-minutes"
          label="30-60 minutes a day"
          variant="card"
          icon={<Clock size={28} />}
          onChange={() => handleChange("30-60-minutes")}
        />
        <RadioOption
          name="timeCommitment"
          value="1-2-hours"
          label="1-2 hours a day"
          variant="card"
          icon={<Clock size={28} />}
          onChange={() => handleChange("1-2-hours")}
        />
        <RadioOption
          name="timeCommitment"
          value="more-2-hours"
          label="More than 2 hours"
          variant="card"
          icon={<Clock size={28} />}
          onChange={() => handleChange("more-2-hours")}
        />
      </div>
    </div>
  );
};
