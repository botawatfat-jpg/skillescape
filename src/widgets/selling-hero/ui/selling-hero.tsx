"use client";

import React from "react";
import Image from "next/image";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-hero.module.css";

export const SellingHero: React.FC = () => {
  const { quizData } = useQuizStore();
  const name = quizData?.name || "there";
  const status = quizData?.status || "9-5 office worker";
  const goal = quizData?.goal || "Start freelancing with AI tools";

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your Freelancing Plan is ready!</h1>

        <div className={styles.comparison}>
          <div className={styles.comparisonLabels}>
            <div className={styles.labelItem}>
              <p>Now</p>
            </div>
            <div className={styles.labelItem}>
              <p>Your goal</p>
            </div>
          </div>

          <div className={styles.imagesWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="https://d2tpw6ibsnrlae.cloudfront.net/local_components/4/media/selling_before.webp"
                alt="Before"
                width={320}
                height={320}
                className={styles.image}
              />
            </div>

            <div className={styles.arrow}>
              <Image
                src="https://d2tpw6ibsnrlae.cloudfront.net/local_components/4/media/Chevrons.svg"
                alt="Arrow"
                width={32}
                height={20}
              />
            </div>

            <div className={styles.imageContainer}>
              <Image
                src="https://d2tpw6ibsnrlae.cloudfront.net/local_components/4/media/selling_after.webp"
                alt="After"
                width={320}
                height={320}
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <Image
                  src="https://d2tpw6ibsnrlae.cloudfront.net/local_components/4/media/status.svg"
                  alt="Status"
                  width={16}
                  height={16}
                />
                <p className={styles.infoLabel}>Status</p>
              </div>
              <p className={styles.infoValue}>{status}</p>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "20%" }}></div>
              </div>
              <div className={styles.skillInfo}>
                <p className={styles.skillName}>Proficiency in AI tools</p>
                <p className={styles.skillLevel}>LOW</p>
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <Image
                  src="https://d2tpw6ibsnrlae.cloudfront.net/local_components/4/media/Goal.png"
                  alt="Goal"
                  width={16}
                  height={16}
                />
                <p className={styles.infoLabel}>Goal</p>
              </div>
              <p className={styles.infoValue}>{goal}</p>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "80%" }}></div>
              </div>
              <div className={styles.skillInfo}>
                <p className={styles.skillName}>Proficiency in AI tools</p>
                <p className={styles.skillLevel}>HIGH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
