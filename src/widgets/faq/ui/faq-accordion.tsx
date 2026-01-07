"use client";

import React, { useState } from "react";
import styles from "./faq.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionWrapper}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionButton}
            onClick={() => toggleAccordion(index)}
          >
            <span className={styles.accordionQuestion}>{item.question}</span>
            <span
              className={`${styles.accordionIcon} ${
                openIndex === index ? styles.accordionIconOpen : ""
              }`}
            >
              ❯
            </span>
          </button>
          {openIndex === index && (
            <div className={styles.accordionContent}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
