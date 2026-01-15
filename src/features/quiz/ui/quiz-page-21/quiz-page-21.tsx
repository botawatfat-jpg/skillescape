import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import { ProgressBlockers } from "@/features/quiz/shared/ui/progress-blockers";
import styles from "./quiz-page-21.module.css";
import { useQuizStore } from "@/shared/store";
import { calculateBlockers, toPercentages } from "./calculate-blockers";

export const QuizPage21 = () => {
  const router = useRouter();
  const { quizData, updateQuizData } = useQuizStore();

  const scores = calculateBlockers(quizData);
  const blockers = toPercentages(scores);

  const handleContinue = () => {
    // Проверяем, находится ли "Financial Pressure & Stability" на последнем месте
    const sortedBlockers = [...blockers].sort(
      (a, b) => b.percentage - a.percentage
    );
    const lastBlocker = sortedBlockers[sortedBlockers.length - 1];

    // Если Financial Pressure на последнем месте - false, иначе - true
    const financesNormal =
      lastBlocker.label !== "Financial Pressure & Stability";

    updateQuizData({ financesNormal });
    router.push("/quiz/questions?pageId=22");
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Image
          src="https://d2tpw6ibsnrlae.cloudfront.net/quiz_prod/v6.0.7/184/media/icon.webp"
          alt="Lock"
          width={72}
          height={72}
        />
      </div>

      <QuizTitle style={{ marginBottom: 12, marginTop: 0 }}>
        Your Progress Blockers
      </QuizTitle>

      <QuizDescription style={{ marginBottom: 0, maxWidth: 576 }}>
        Your answers helped us identify the key factors holding you back from
        earning online
      </QuizDescription>

      <ProgressBlockers blockers={blockers} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Confusion & Lack of Guidance</h3>
        <p className={styles.sectionText}>
          You&apos;ve probably tried learning online before - but everything
          felt scattered, confusing, or outdated. Skillescape gives you one clear
          path with simple milestones and real expert guidance, so you always
          know your next step. Your personalized plan is built around your
          background, helping you grow faster and with confidence - not
          guesswork.
        </p>
      </div>

      <div className="buttonContainerQuiz">
        <Button onClick={handleContinue} className={styles.button}>
          Continue
        </Button>
      </div>
    </div>
  );
};
