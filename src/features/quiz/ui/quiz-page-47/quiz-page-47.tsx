"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-47.module.css";
import { useQuizStore } from "@/shared/store";
import { Star } from "lucide-react";

export const QuizPage47 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=48");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>You can succeed too!</QuizTitle>

        <div className={styles.ratingBox}>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={32} fill="#00B67A" color="#00B67A" />
            ))}
          </div>
          <p className={styles.ratingText}>4.5 out of 5 3,500+ reviews</p>
        </div>

        <div className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.reviewStars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} fill="#00B67A" color="#00B67A" />
              ))}
            </div>
            <div className={styles.reviewMeta}>
              <span className={styles.reviewAuthor}>James L.</span>
              <span className={styles.separator}>|</span>
              <span className={styles.reviewLocation}>Canada</span>
            </div>
            <div className={styles.reviewDate}>Aug 18, 2025</div>
          </div>

          <h3 className={styles.reviewTitle}>Everything finally works!</h3>
          
          <p className={styles.reviewText}>
            I&apos;ve tried almost every way to earn online - freelancing, social media gigs, even
            automation courses. It always felt overwhelming - too many tools, no clear
            system, and zero real support. Joining Skillescape was a total shift. They gave me
            a clear, step-by-step plan, access to 15+ AI tools, and even ready-made chatbot
            templates I could just copy and customize. Every time I got stuck, their 24/7
            support actually helped, not some auto-bot replies. Within two weeks I landed my
            first client, and now I finally have a business that runs smoothly without chaos or
            burnout. Skillescape really turned &quot;earning with AI&quot; from something confusing into
            something simple and profitable.
          </p>
        </div>

        <div className="buttonContainerQuiz">
          <Button onClick={handleContinue} className={styles.button}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
