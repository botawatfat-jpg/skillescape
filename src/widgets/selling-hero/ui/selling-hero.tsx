"use client";

import React from "react";
import Image from "next/image";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-hero.module.css";

interface StatusCardData {
  icon: string;
  iconAlt: string;
  label: string;
  title: string;
  proficiencyLabel: string;
  proficiencyLevel: string;
  proficiencyBars: number;
}

export const SellingHero: React.FC = () => {
  const { quizData } = useQuizStore();
  
  const statusCards: StatusCardData[] = [
    {
      icon: "https://d2tpw6ibsnrlae.cloudfront.net/local_components/4/media/status.svg",
      iconAlt: "Status svg",
      label: "Status",
      title: quizData?.status || "9-5 office worker",
      proficiencyLabel: "Proficiency in AI tools",
      proficiencyLevel: "LOW",
      proficiencyBars: 1,
    },
    {
      icon: "https://d2tpw6ibsnrlae.cloudfront.net/local_components/4/media/Goal.png",
      iconAlt: "Goal",
      label: "Goal",
      title: quizData?.goal || "Start freelancing with AI tools",
      proficiencyLabel: "Proficiency in AI tools",
      proficiencyLevel: "HIGH",
      proficiencyBars: 3,
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Your Freelancing Plan is ready!</h1>
        </header>

        <section className={styles.comparisonSection}>
          <div className={styles.labelsContainer}>
            <div className={styles.labelWrapper}>
              <div className={styles.label}>Now</div>
            </div>
            <div className={styles.labelWrapper}>
              <div className={styles.label}>Your goal</div>
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

            <div className={styles.arrowContainer}>
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

          <div className={styles.cardsContainer}>
            {statusCards.map((card, index) => (
              <React.Fragment key={index}>
                {index > 0 && <div className={styles.cardDivider} />}
                <article className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <Image
                        src={card.icon}
                        alt={card.iconAlt}
                        width={16}
                        height={16}
                        className={styles.cardIcon}
                      />
                      <span className={styles.cardLabel}>{card.label}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{card.title}</h2>
                  </div>

                  <div className={styles.cardDividerHorizontal} />

                  <div className={styles.proficiencySection}>
                    <span className={styles.proficiencyLabel}>
                      {card.proficiencyLabel}
                    </span>
                    <strong className={styles.proficiencyLevel}>
                      {card.proficiencyLevel}
                    </strong>
                    <div
                      className={styles.progressBars}
                      role="progressbar"
                      aria-valuenow={card.proficiencyBars}
                      aria-valuemin={0}
                      aria-valuemax={3}
                      aria-label={`${card.proficiencyLabel}: ${card.proficiencyLevel}`}
                    >
                      {[1, 2, 3].map((bar) => (
                        <div
                          key={bar}
                          className={`${styles.progressBar} ${
                            bar <= card.proficiencyBars
                              ? styles.progressBarActive
                              : styles.progressBarInactive
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
