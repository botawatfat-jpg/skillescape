import React from "react";
import styles from "./cta.module.css";
import Image from "next/image";
import { textConfig } from "@/shared/config/text-config";

export const Cta: React.FC = () => {
  return (
    <>
      <section className={styles.cta1}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            {textConfig.cta.section1.title}
            <span>{textConfig.cta.section1.titleHighlight}</span>
          </h2>
          <p className={styles.description}>
            {textConfig.cta.section1.description}
          </p>
        </div>
      </section>
      <section className={styles.cta2}>
        <div className={styles.container}>
          <h2 className={styles.title}>{textConfig.cta.section2.title}</h2>
          <div className={styles.wrapper}>
            <div className={styles.imageCard}>
              <Image
                src="/assets/cta-img.png"
                alt="CTA"
                width={481}
                height={591}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 481px"
                loading="lazy"
              />
            </div>
            <div className={styles.cardsColumn}>
              <div className={styles.cardFlex}>
                {textConfig.cta.section2.cards.slice(0, 2).map((card, index) => (
                  <div key={index} className={styles.card}>
                    <Image
                      src={card.image}
                      alt="CTA"
                      width={321}
                      height={118}
                      sizes="(max-width: 768px) 100vw, 321px"
                      loading="lazy"
                    />
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                ))}
              </div>
              <div className={styles.cardLarge}>
                <Image
                  src={textConfig.cta.section2.cards[2].image}
                  alt="CTA"
                  width={707}
                  height={129}
                  sizes="(max-width: 768px) 100vw, 707px"
                  loading="lazy"
                />
                <h3 className={styles.cardTitle} style={{ marginTop: 24 }}>
                  {textConfig.cta.section2.cards[2].title}
                </h3>
                <p
                  className={styles.cardDescription}
                  style={{ maxWidth: "486px" }}
                >
                  {textConfig.cta.section2.cards[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
