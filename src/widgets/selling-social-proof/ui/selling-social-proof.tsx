"use client";

import React from "react";
import Image from "next/image";
import styles from "./selling-social-proof.module.css";

const LAUREL_LEFT = "data:image/svg+xml,%3Csvg width='31' height='79' viewBox='0 0 31 79' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 39L8 20L15 39L8 58L2 39Z' fill='%23FFCC00'/%3E%3Cpath d='M8 20L15 1L22 20L15 39L8 20Z' fill='%23FFD700'/%3E%3Cpath d='M8 58L15 39L22 58L15 77L8 58Z' fill='%23FFD700'/%3E%3C/svg%3E";
const LAUREL_RIGHT = "data:image/svg+xml,%3Csvg width='31' height='79' viewBox='0 0 31 79' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29 39L23 58L16 39L23 20L29 39Z' fill='%23FFCC00'/%3E%3Cpath d='M23 58L16 77L9 58L16 39L23 58Z' fill='%23FFD700'/%3E%3Cpath d='M23 20L16 39L9 20L16 1L23 20Z' fill='%23FFD700'/%3E%3C/svg%3E";

export const SellingSocialProof: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join Thousands of Successful Freelancers</h2>
        
        <div className={styles.proofCard}>
          <div className={styles.stat}>
            <div className={styles.statContent}>
              <img src={LAUREL_LEFT} alt="" width={31} height={79} className={styles.laurel} />
              
              <div className={styles.statInfo}>
                <div className={styles.statNumber}>120K+</div>
                <p className={styles.statText}>
                  users started freelancing<br />career with us
                </p>
              </div>
              
              <img src={LAUREL_RIGHT} alt="" width={31} height={79} className={styles.laurel} />
            </div>
          </div>
          
          <div className={styles.divider} />
          
          <div className={styles.rating}>
            <div className={styles.stars}>
              <Image
                src="/assets/trustpilot-stars.webp"
                alt="Trustpilot rating"
                width={116}
                height={20}
              />
            </div>
            
            <div className={styles.ratingNumber}>4,6 out of 5</div>
            <p className={styles.reviewCount}>3,500+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};
