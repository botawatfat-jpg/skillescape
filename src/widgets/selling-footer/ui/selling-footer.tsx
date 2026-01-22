"use client";

import React from "react";
import Link from "next/link";
import styles from "./selling-footer.module.css";

export const SellingFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.company}>
          <span className={styles.companyName}>71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom

          </span>
        </div>

        <div className={styles.links}>
          <Link href="/terms/privacy" className={styles.link}>
            Privacy
          </Link>
          <div className={styles.linkDivider} />
          <Link href="/terms/terms-and-conditions" className={styles.link}>
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};
