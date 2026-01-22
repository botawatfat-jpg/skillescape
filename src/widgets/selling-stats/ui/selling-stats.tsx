"use client";

import React from "react";
import Image from "next/image";
import styles from "./selling-stats.module.css";

const PEOPLE_ICON = "data:image/svg+xml,%3Csvg width='56' height='24' viewBox='0 0 56 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='12' r='8' fill='%232563EB'/%3E%3Ccircle cx='20' cy='12' r='8' fill='%2315803D'/%3E%3Ccircle cx='32' cy='12' r='8' fill='%23F59E0B'/%3E%3Ccircle cx='44' cy='12' r='8' fill='%23EC4899'/%3E%3C/svg%3E";

export const SellingStats: React.FC = () => {
  return (
    <div className={styles.badge}>
      <div className={styles.content}>
        <img src={PEOPLE_ICON} alt="" width={56} height={24} className={styles.icon} />
        <div className={styles.text}>
          <span className={styles.count}>122,584</span>
          <span className={styles.label}> freelancer started with us</span>
        </div>
      </div>
    </div>
  );
};
