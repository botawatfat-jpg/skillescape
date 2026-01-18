import React from "react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-38.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";
import { Check, Circle, Calendar, Lock } from "lucide-react";

export const QuizPage38 = () => {
  const router = useRouter();
  const { updateQuizData, quizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ earningTimeline: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      if (quizData.aiTools?.includes("none")) {
        router.push("/quiz/questions?pageId=32");
      } else {
        router.push("/quiz/questions?pageId=46");
      }
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        If we gave you a proven system for finding clients - how fast do you think you could start earning with AI automation?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="earningTimeline"
          value="within-1-month"
          label="Within 1 month"
          variant="card"
          icon={<Check size={28} />}
          onChange={() => handleChange("within-1-month")}
        />
        <RadioOption
          name="earningTimeline"
          value="1-2-months"
          label="1-2 months"
          variant="card"
          icon={<Circle size={28} />}
          onChange={() => handleChange("1-2-months")}
        />
        <RadioOption
          name="earningTimeline"
          value="2-3-months"
          label="2-3 months"
          variant="card"
          icon={<Calendar size={28} />}
          onChange={() => handleChange("2-3-months")}
        />
        <RadioOption
          name="earningTimeline"
          value="test-first"
          label="I'd test it first"
          variant="card"
          icon={<Lock size={28} />}
          onChange={() => handleChange("test-first")}
        />
      </div>
    </div>
  );
};
