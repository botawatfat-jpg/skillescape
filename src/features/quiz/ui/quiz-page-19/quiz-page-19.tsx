import React from "react";
import { DollarSign, Rocket, Search } from "lucide-react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-19.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage19 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ aiMeaning: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=20");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>What would earning with AI mean for you?</QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="aiMeaning"
          value="extra-income"
          label="A way to make extra income on the side"
          variant="card"
          icon={<DollarSign size={28} />}
          onChange={() => handleChange("extra-income")}
        />
        <RadioOption
          name="aiMeaning"
          value="new-focus"
          label="A new focus I want to fully dive into - I'm serious about it"
          variant="card"
          icon={<Rocket size={28} />}
          onChange={() => handleChange("new-focus")}
        />
        <RadioOption
          name="aiMeaning"
          value="exploring"
          label="Just exploring better opportunities"
          variant="card"
          icon={<Search size={28} />}
          onChange={() => handleChange("exploring")}
        />
      </div>
    </div>
  );
};
