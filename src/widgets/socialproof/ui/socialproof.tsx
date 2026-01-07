import React from "react";
import styles from "./socialproof.module.css";
import { textConfig } from "@/shared/config/text-config";

export const SocialProof: React.FC = () => {
  return (
    <section className={styles.socialproof}>
      <div className={styles.title}>{textConfig.socialProof.title}</div>
      <div className={styles.grid}>
        {textConfig.socialProof.reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div
                className={styles.avatar}
                style={{ backgroundColor: review.color }}
              >
                {review.initials}
              </div>
              <div className={styles.userInfo}>
                <div className={styles.name}>{review.name}</div>
                <div className={styles.date}>{review.date}</div>
              </div>
            </div>
            <div className={styles.stars}>
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className={styles.star}>
                  ★
                </span>
              ))}
            </div>
            <p className={styles.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
