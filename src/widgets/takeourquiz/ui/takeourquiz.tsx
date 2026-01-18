"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./takeourquiz.module.css";
import { textConfig } from "@/shared/config/text-config";
import { QuizButton } from "@/shared/ui";
import { useMediaQuery } from "react-responsive";

export const TakeOurQuiz: React.FC<{ reverse?: boolean }> = ({
  reverse = false,
}) => {
  // Избегаем hydration mismatch - используем дефолтное значение на сервере
  const [mounted, setMounted] = useState(false);
  const isWidthSmall = useMediaQuery({ maxWidth: 1280 });

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  // На сервере всегда используем большую высоту
  const imageHeight = mounted ? (isWidthSmall ? 350 : 488) : 488;

  return (
    <section className={styles.takeourquiz}>
      <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.content}>
          <div className={styles.title}>{textConfig.takeOurQuiz.title}</div>
          <QuizButton className={styles.button} href="/quiz">
            {textConfig.takeOurQuiz.button}
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
            height={imageHeight}
            loading="lazy"
            style={{ borderRadius: "16px" }}
          />
        </div>
      </div>
    </section>
  );
};
