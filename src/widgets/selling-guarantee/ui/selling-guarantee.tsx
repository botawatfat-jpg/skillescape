"use client";

import React from "react";
import Link from "next/link";
import styles from "./selling-guarantee.module.css";

const SHIELD_ICON = "data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 4L8 10V22C8 32 15.2 41.2 24 44C32.8 41.2 40 32 40 22V10L24 4Z' fill='%2315803D'/%3E%3Cpath d='M18 24L22 28L30 18' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

export const SellingGuarantee: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <img src={SHIELD_ICON} alt="" width={48} height={48} />
        </div>
        
        <h2 className={styles.title}>30-day Money-Back Guarantee</h2>
        
        <p className={styles.description}>
          We are so confident in our service that we are ready to offer a full refund within 
          30 days of purchase if you do not achieve initial results and can demonstrate you 
          have followed the plan.{" "}
          <Link href="/terms/subscription" className={styles.link}>
            Learn more about all the conditions in our Subscription Terms
          </Link>
        </p>
      </div>
    </section>
  );
};
