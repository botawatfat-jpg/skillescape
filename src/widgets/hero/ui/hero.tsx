import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { textConfig } from "@/shared/config/text-config";
import { QuizButton } from "@/shared/ui";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {textConfig.hero.title}{" "}
            <span>{textConfig.hero.titleHighlight}</span>{" "}
            {textConfig.hero.titleEnd}
          </h1>

          <p className={styles.description}>{textConfig.hero.description}</p>
          <div className={styles.flexContainer}>

            <QuizButton
              shrinkOnHover
              className={styles.button}
              variant="primary"
              href="/quiz"
            >
              {textConfig.hero.button}
            </QuizButton>

            <p className={styles.cta}>{textConfig.hero.cta}</p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <Image
              src="/assets/hero-img.jpg"
              alt="Hero"
              width={480}
              height={480}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
            />
          </div>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>👩‍💻</span>
              <span className={styles.badgeText}>
                {textConfig.hero.badges.users}
              </span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⭐</span>
              <span className={styles.badgeText}>
                {textConfig.hero.badges.trustpilot}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
