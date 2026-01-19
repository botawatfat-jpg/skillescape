"use client";

import React, { useState } from "react";
import styles from "./selling-plans.module.css";

interface PlanData {
  id: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  originalPerDay: string;
  discountedPerDay: string;
  isPopular?: boolean;
}

export const SellingPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState("4-week");

  const plans: PlanData[] = [
    {
      id: "1-week",
      title: "1-week plan",
      originalPrice: "$17.77",
      discountedPrice: "$6.93",
      originalPerDay: "$0.63",
      discountedPerDay: "$0.99",
    },
    {
      id: "4-week",
      title: "4-week plan",
      originalPrice: "$38.95",
      discountedPrice: "$15.19",
      originalPerDay: "$1.39",
      discountedPerDay: "$0.54",
      isPopular: true,
    },
    {
      id: "12-week",
      title: "12-week plan",
      originalPrice: "$66.65",
      discountedPrice: "$25.99",
      originalPerDay: "$0.79",
      discountedPerDay: "$0.31",
    },
  ];

  return (
    <div className={styles.plansContainer}>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`${styles.planCard} ${
            plan.isPopular ? styles.popularCard : ""
          }`}
          onClick={() => setSelectedPlan(plan.id)}
        >
          {plan.isPopular && (
            <div className={styles.popularBadge}>
              <svg
                className={styles.starIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.52 1.845a.5.5 0 01.96 0l1.065 3.523a.5.5 0 00.465.347h3.733a.5.5 0 01.296.904l-3.02 2.193a.5.5 0 00-.182.558l1.065 3.523a.5.5 0 01-.768.558l-3.02-2.193a.5.5 0 00-.588 0l-3.02 2.193a.5.5 0 01-.768-.558l1.065-3.523a.5.5 0 00-.182-.558l-3.02-2.193a.5.5 0 01.296-.904h3.733a.5.5 0 00.465-.347L7.52 1.845z"
                  fill="white"
                />
              </svg>
              <div className={styles.popularText}>Popular</div>
            </div>
          )}

          <div className={styles.planContent}>
            <div className={styles.planHeader}>
              <div className={styles.titleRow}>
                <div className={styles.planTitle}>{plan.title}</div>
                <div
                  className={`${styles.checkbox} ${
                    selectedPlan === plan.id ? styles.checkboxSelected : ""
                  }`}
                >
                  {selectedPlan === plan.id && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M11.667 3.5L5.25 9.917 2.333 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className={styles.priceRow}>
                <div className={styles.originalPrice}>{plan.originalPrice}</div>
                <svg className={styles.arrow} width="12" height="12" viewBox="0 0 12 12">
                  <line
                    x1="2.5"
                    y1="6"
                    x2="9.5"
                    y2="6"
                    stroke="#737373"
                    strokeWidth="1"
                  />
                  <path d="M6.5 3L9.5 6L6.5 9" fill="none" stroke="#737373" strokeWidth="1" />
                </svg>
                <div className={styles.discountedPrice}>{plan.discountedPrice}</div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.perDaySection}>
              <div className={styles.perDayRow}>
                <div className={styles.originalPerDay}>{plan.originalPerDay}</div>
                <svg className={styles.arrow} width="12" height="12" viewBox="0 0 12 12">
                  <line
                    x1="2.5"
                    y1="6"
                    x2="9.5"
                    y2="6"
                    stroke="#737373"
                    strokeWidth="1"
                  />
                  <path d="M6.5 3L9.5 6L6.5 9" fill="none" stroke="#737373" strokeWidth="1" />
                </svg>
              </div>
              <div className={styles.perDayBottom}>
                <div className={styles.perDayPrice}>{plan.discountedPerDay}</div>
                <div className={styles.perDayLabel}>per day</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
