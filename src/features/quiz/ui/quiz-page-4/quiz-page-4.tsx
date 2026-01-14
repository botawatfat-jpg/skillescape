import React from "react";
import { Briefcase, Handshake, PenTool, Compass } from "lucide-react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-4.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage4 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ status: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=5");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>Which one describes you best?</QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="status"
          value="full-time-worker"
          label="Full-time worker"
          variant="card"
          icon={<Briefcase size={28} />}
          onChange={() => handleChange("full-time-worker")}
        />
        <RadioOption
          name="status"
          value="business-owner"
          label="Business owner"
          variant="card"
          icon={<Handshake size={28} />}
          onChange={() => handleChange("business-owner")}
        />
        <RadioOption
          name="status"
          value="freelancer"
          label="Freelancer"
          variant="card"
          icon={<PenTool size={28} />}
          onChange={() => handleChange("freelancer")}
        />
        <RadioOption
          name="status"
          value="exploring"
          label="Exploring options"
          variant="card"
          icon={<Compass size={28} />}
          onChange={() => handleChange("exploring")}
        />
      </div>
    </div>
  );
};
