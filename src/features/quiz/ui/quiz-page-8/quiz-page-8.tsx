import React from "react";
import { Image, Clock, CalendarOff, HelpCircle } from "lucide-react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-8.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage8 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ stopping: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=9");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        What&apos;s stopping you from trying AI to earn online?
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="stopping"
          value="no-plan"
          label="I don't have the right plan or guidance"
          variant="card"
          icon={<Image size={28} />}
          onChange={() => handleChange("no-plan")}
        />
        <RadioOption
          name="stopping"
          value="waste-time"
          label="I'm afraid I'll waste time and see no results"
          variant="card"
          icon={<Clock size={28} />}
          onChange={() => handleChange("waste-time")}
        />
        <RadioOption
          name="stopping"
          value="too-busy"
          label="I'm too busy with my 9-5 job to start something new"
          variant="card"
          icon={<CalendarOff size={28} />}
          onChange={() => handleChange("too-busy")}
        />
        <RadioOption
          name="stopping"
          value="confusing"
          label="It all seems too new and confusing"
          variant="card"
          icon={<HelpCircle size={28} />}
          onChange={() => handleChange("confusing")}
        />
      </div>
    </div>
  );
};
