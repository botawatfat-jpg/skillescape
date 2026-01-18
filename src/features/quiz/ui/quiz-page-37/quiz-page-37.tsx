import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-37.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";
import { Check, X } from "lucide-react";

export const QuizPage37 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ knowsClientMethods: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=38");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        Do you know what methods of finding clients there are?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="knowsClientMethods"
          value="yes"
          label="Yes, I'm experienced freelancer"
          variant="card"
          icon={<Check size={28} />}
          onChange={() => handleChange("yes")}
        />
        <RadioOption
          name="knowsClientMethods"
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
