"use client";

import React from "react";
import Image from "next/image";
import styles from "./selling-guarantee.module.css";

export const SellingGuarantee: React.FC = () => {
  return (
    <>
      <Image
        src="https://d2tpw6ibsnrlae.cloudfront.net/local_components/4/media/container.svg"
        alt="Trusted brands"
        width={896}
        height={100}
        className={styles.brandsImage}
      />

      <div className={styles.wrapper}>
        <div className={styles.border}>
          <div className={styles.iconWrapper}>
            <div className={styles.shieldCheck} />
          </div>

          <div className={styles.titleWrapper}>
            <div className={styles.title}>30-day Money-Back Guarantee</div>
          </div>

          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <p className={styles.textMain}>
                We are so confident in our service that we are ready to offer a
                full refund within
                <br />
                30 days of purchase if you do not achieve initial results and
                can demonstrate
                <br />
                you have followed the plan. Learn more about all the conditions
                in our
              </p>
              <p className={styles.linkText}>
                <span className={styles.link}>Subscription Terms</span>
                <span className={styles.period}>.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
