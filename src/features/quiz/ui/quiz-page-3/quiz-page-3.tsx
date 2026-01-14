import React from "react";
import { DollarSign, Wallet, Heart, Bot } from "lucide-react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-3.module.css";
import { useQuizStore } from "@/shared/store";
import { useRouter } from "next/navigation";

export const QuizPage3 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ goal: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=4");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>What is your goal?</QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="goal"
          value="side-hustle"
          label="Get a side-hustle and earn extra +1000$ a month"
          variant="card"
          icon={<DollarSign size={28} />}
          onChange={() => handleChange("side-hustle")}
        />
        <RadioOption
          name="goal"
          value="financial-freedom"
          label="Financial freedom"
          variant="card"
          icon={<Wallet size={28} />}
          defaultChecked
          onChange={() => handleChange("financial-freedom")}
        />
        <RadioOption
          name="goal"
          value="quit-job"
          label="Quit my 9-5 job and be my own boss"
          variant="card"
          icon={<Heart size={28} />}
          onChange={() => handleChange("quit-job")}
        />
        <RadioOption
          name="goal"
          value="ai-business"
          label="Start AI Automation business"
          variant="card"
          icon={<Bot size={28} />}
          onChange={() => handleChange("ai-business")}
        />
      </div>
    </div>
  );
};
