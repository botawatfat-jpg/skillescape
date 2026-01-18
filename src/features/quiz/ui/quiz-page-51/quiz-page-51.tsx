import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-51.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";
import { DollarSign } from "lucide-react";

export const QuizPage51 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ goalAmount: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=52");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        How much do you plan to make to achieve your goal?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="goalAmount"
          value="5000-10000"
          label="$5000-$10000"
          variant="card"
          icon={<DollarSign size={28} />}
          onChange={() => handleChange("5000-10000")}
        />
        <RadioOption
          name="goalAmount"
          value="10000-15000"
          label="$10000-$15000"
          variant="card"
          icon={<DollarSign size={28} />}
          onChange={() => handleChange("10000-15000")}
        />
        <RadioOption
          name="goalAmount"
          value="15000-20000"
          label="$15000-$20000"
          variant="card"
          icon={<DollarSign size={28} />}
          onChange={() => handleChange("15000-20000")}
        />
        <RadioOption
          name="goalAmount"
          value="more-20000"
          label="More than $20000"
          variant="card"
          icon={<DollarSign size={28} />}
          onChange={() => handleChange("more-20000")}
        />
      </div>
    </div>
  );
};
