import { Check, X } from "lucide-react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-13.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage13 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ coding: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=14");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>Have you tried coding before</QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="coding"
          value="yes"
          label="Yes"
          variant="card"
          icon={<Check size={28} />}
          onChange={() => handleChange("yes")}
        />
        <RadioOption
          name="coding"
          value="no"
          label="No"
          variant="card"
          icon={<X size={28} />}
          onChange={() => handleChange("no")}
        />
      </div>
    </div>
  );
};
