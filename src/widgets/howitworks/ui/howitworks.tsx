import React from "react";
import styles from "./howitworks.module.css";
import { textConfig } from "@/shared/config/text-config";

export const HowItWorks: React.FC = () => {
  return (
    <section className={styles.howitworks}>
      <div className={styles.container}>
        <h2 className={styles.title}>{textConfig.howItWorks.title}</h2>
        <div className={styles.wrapper}>
          {textConfig.howItWorks.steps.map((step) => {
            const isLeft = step.number % 2 === 1;
            return (
              <div
                key={step.number}
                className={isLeft ? styles.itemLeft : styles.itemRight}
              >
                {isLeft && <div className={styles.number}>{step.number}</div>}
                <div className={styles.content}>
                  <h2 className={styles.name}>
                    {step.name}{" "}
                    {step.number === 2 || step.number === 4 ? (
                      <span>{step.highlight}</span>
                    ) : (
                      <b>{step.highlight}</b>
                    )}
                    {step.nameEnd && (
                      <>
                        {step.number === 4 && <br />} {step.nameEnd}
                      </>
                    )}
                  </h2>
                  <p className={styles.description}>{step.description}</p>
                </div>
                {!isLeft && <div className={styles.number}>{step.number}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
