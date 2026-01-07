import React from "react";
import styles from "./faq.module.css";
import { FaqAccordion } from "./faq-accordion";
import { Button } from "@/shared/ui";
import { textConfig } from "@/shared/config/text-config";

export const Faq: React.FC = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.title}>{textConfig.faq.title}</div>
      <div className={styles.suptitle}>{textConfig.faq.subtitle}</div>
      <FaqAccordion items={textConfig.faq.items} />

      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>{textConfig.faq.contact.title}</h2>
        <p className={styles.contactText}>
          {textConfig.faq.contact.text}{" "}
          <a
            href={`mailto:${textConfig.faq.contact.email}`}
            className={styles.emailLink}
          >
            {textConfig.faq.contact.email}
          </a>
        </p>
        <Button className={styles.contactButton}>
          {textConfig.faq.contact.button}
        </Button>
      </div>
    </section>
  );
};
