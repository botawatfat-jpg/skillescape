import { DollarSign, Coins, Banknote, CircleDollarSign } from "lucide-react";
import { RadioOption, QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-20.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage20 = () => {
  const router = useRouter();
  const { quizData, updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    updateQuizData({ incomeGoal: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=21");
    }, 300);
  };

  return (
    <div>
      <QuizTitle>
        {quizData.aiMeaning === "new-focus"
          ? "How much money do you want to make a year?"
          : "How much extra income would make a real difference in your life?"}
      </QuizTitle>

      <div className={styles.options}>
        <RadioOption
          name="incomeGoal"
          value="500-1000"
          label="$500-$1000/month"
          variant="card"
          icon={<DollarSign size={28} />}
          onChange={() => handleChange("500-1000")}
        />
        <RadioOption
          name="incomeGoal"
          value="1000-2000"
          label="$1000-$2000/month"
          variant="card"
          icon={<Coins size={28} />}
          onChange={() => handleChange("1000-2000")}
        />
        <RadioOption
          name="incomeGoal"
          value="2000-3000"
          label="$2000-$3000/month"
          variant="card"
          icon={<Banknote size={28} />}
          onChange={() => handleChange("2000-3000")}
        />
        <RadioOption
          name="incomeGoal"
          value="3000+"
          label="$3000+/month"
          variant="card"
          icon={<CircleDollarSign size={28} />}
          onChange={() => handleChange("3000+")}
        />
      </div>
    </div>
  );
};
