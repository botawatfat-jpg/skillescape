"use client";
import Image from "next/image";
import React from "react";
import styles from "./takeourquiz.module.css";
import { textConfig } from "@/shared/config/text-config";
import { QuizButton } from "@/shared/ui";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export const TakeOurQuiz: React.FC<{ reverse?: boolean }> = ({
  reverse = false,
}) => {
  const isWidthSmall = useMediaQuery({ maxWidth: 1280 });

  return (
    <section className={styles.takeourquiz}>
      <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.content}>
          <div className={styles.title}>{textConfig.takeOurQuiz.title}</div>
          <QuizButton className={styles.button}>
            <Link href="/quiz">{textConfig.takeOurQuiz.button}</Link>
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
            height={isWidthSmall ? 600 : 488}
            loading="lazy"
            style={{ borderRadius: "16px" }}
          />
        </div>
      </div>
    </section>
  );
};
