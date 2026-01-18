import { QuizTitle, QuizQuote, RatingScale } from "@/features/quiz/shared";
import styles from "./quiz-page-17.module.css";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";

export const QuizPage17 = () => {
  const router = useRouter();
  const { updateQuizData } = useQuizStore();

  const handleChange = (value: number) => {
    updateQuizData({ extraIncome: value });
    // Auto-redirect after 300ms
    setTimeout(() => {
      router.push("/quiz/questions?pageId=18");
    }, 300);
  };

  return (
    <div className={styles.container}>
      <QuizTitle>I&apos;ve been looking for ways to earn extra income</QuizTitle>

      <QuizQuote>
        &quot;I&apos;ve been thinking a lot about ways to earn extra income
        lately&quot;
      </QuizQuote>

      <RatingScale
        name="extraIncome"
        minLabel="not at all"
        maxLabel="completely"
        onChange={handleChange}
      />
    </div>
  );
};
