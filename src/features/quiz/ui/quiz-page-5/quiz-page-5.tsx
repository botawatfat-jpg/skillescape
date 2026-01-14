import { X, Loader, Check } from "lucide-react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-5.module.css";
import { useQuizStore } from "@/shared/store";
import { useRouter } from "next/navigation";

export const QuizPage5 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ experience: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=6");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>Have you tried earning online before?</QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="experience"
          value="no-experience"
          label="No, I don't know where to start"
          variant="card"
          icon={<X size={28} />}
          onChange={() => handleChange("no-experience")}
        />
        <RadioOption
          name="experience"
          value="tried-before"
          label="Yes, but it didn't work out"
          variant="card"
          icon={<Loader size={28} />}
          defaultChecked
          onChange={() => handleChange("tried-before")}
        />
        <RadioOption
          name="experience"
          value="experienced"
          label="I'm experienced"
          variant="card"
          icon={<Check size={28} />}
          onChange={() => handleChange("experienced")}
        />
      </div>
    </div>
  );
};
