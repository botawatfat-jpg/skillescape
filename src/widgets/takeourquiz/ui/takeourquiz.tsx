import React from "react";
import styles from "./takeourquiz.module.css";
import Image from "next/image";
import { textConfig } from "@/shared/config/text-config";
import { QuizButton } from "@/features/quiz";

export const TakeOurQuiz: React.FC<{ reverse?: boolean }> = ({
  reverse = false,
}) => {
  return (
    <section className={styles.takeourquiz}>
      <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.content}>
          <div className={styles.title}>{textConfig.takeOurQuiz.title}</div>
          <QuizButton className={styles.button}>
            <span>{textConfig.takeOurQuiz.button}</span>
          </QuizButton>
        </div>

        <div className={styles.image}>
          <Image
            src={
              reverse
                ? textConfig.takeOurQuiz.images.reverse
                : textConfig.takeOurQuiz.images.normal
            }
            alt="Take our quiz"
            width={1233}
            height={488}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1233px"
            loading="lazy"
            style={{ borderRadius: "16px" }}
          />
        </div>
      </div>
    </section>
  );
};
