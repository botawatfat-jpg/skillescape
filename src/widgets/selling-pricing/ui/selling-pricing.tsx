"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-pricing.module.css";

const CHECK_ICON = "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.3337 4L6.00033 11.3333L2.66699 8' stroke='%2305DF72' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const BADGE_ICON = "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' fill='%2305DF72'/%3E%3C/svg%3E";

interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  perDay: string;
  perDayOriginal: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: "1-week",
    name: "1-week plan",
    duration: "1 week",
    originalPrice: "$17.77",
    discountedPrice: "$6.93",
    perDay: "$0.99",
    perDayOriginal: "$0.63",
  },
  {
    id: "4-week",
    name: "4-week plan",
    duration: "4 weeks",
    originalPrice: "$38.95",
    discountedPrice: "$15.19",
    perDay: "$0.54",
    perDayOriginal: "$0.69",
    isPopular: true,
  },
  {
    id: "12-week",
    name: "12-week plan",
    duration: "12 weeks",
    originalPrice: "$90.09",
    discountedPrice: "$23.98",
    perDay: "$0.31",
    perDayOriginal: "$0.80",
  },
];

export const SellingPricing: React.FC = () => {
  const { quizData, openPaymentModal } = useQuizStore();
  const [selectedPlan, setSelectedPlan] = useState("4-week");
  const [timeLeft, setTimeLeft] = useState(595); // 9:55 in seconds
  const [promoCode] = useState(`${quizData?.name?.toLowerCase().substring(0, 3) || "joh"}_jan_18`);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleGetPlan = () => {
    console.log("Selected plan:", selectedPlan);
    openPaymentModal();
  };

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        {/* Promocode Banner */}
        <div className={styles.promoBanner}>
          <div className={styles.promoHeader}>
            <img src={BADGE_ICON} alt="" width={24} height={24} />
            <span className={styles.promoTitle}>Promocode applied</span>
          </div>

          <div className={styles.promoDivider} />

          <div className={styles.promoDetails}>
            <div className={styles.promoCode}>
              <img src={CHECK_ICON} alt="" width={16} height={16} />
              <span className={styles.promoCodeText}>{promoCode}</span>
            </div>

            <div className={styles.promoTimer}>
              <div className={styles.timerValue}>{formatTime(timeLeft)}</div>
              <div className={styles.timerLabels}>
                <span className={styles.timerLabel}>min</span>
                <span className={styles.timerLabel}>sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className={styles.plans}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.plan} ${selectedPlan === plan.id ? styles.selected : ""} ${plan.isPopular ? styles.popular : ""}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.isPopular && (
                <div className={styles.popularBadge}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5668 5.74706C2.46949 5.30874 2.48443 4.85295 2.61023 4.42195C2.73604 3.99095 2.96863 3.59869 3.28644 3.28154C3.60425 2.96439 3.997 2.73262 4.42827 2.60772C4.85953 2.48282 5.31535 2.46883 5.75346 2.56706C5.9946 2.18992 6.3268 1.87956 6.71943 1.66458C7.11206 1.4496 7.55249 1.33691 8.00013 1.33691C8.44776 1.33691 8.8882 1.4496 9.28083 1.66458C9.67346 1.87956 10.0057 2.18992 10.2468 2.56706C10.6856 2.46841 11.1422 2.48233 11.5741 2.60753C12.0061 2.73274 12.3994 2.96515 12.7174 3.28316C13.0354 3.60117 13.2678 3.99444 13.393 4.42639C13.5182 4.85834 13.5321 5.31495 13.4335 5.75372C13.8106 5.99486 14.121 6.32706 14.3359 6.71969C14.5509 7.11232 14.6636 7.55276 14.6636 8.00039C14.6636 8.44803 14.5509 8.88846 14.3359 9.28109C14.121 9.67372 13.8106 10.0059 13.4335 10.2471C13.5317 10.6852 13.5177 11.141 13.3928 11.5723C13.2679 12.0035 13.0361 12.3963 12.719 12.7141C12.4018 13.0319 12.0096 13.2645 11.5786 13.3903C11.1476 13.5161 10.6918 13.531 10.2535 13.4337C10.0126 13.8123 9.68018 14.124 9.28688 14.3399C8.89358 14.5559 8.45215 14.6691 8.00346 14.6691C7.55478 14.6691 7.11335 14.5559 6.72004 14.3399C6.32674 14.124 5.99429 13.8123 5.75346 13.4337C5.31535 13.5319 4.85953 13.518 4.42827 13.3931C3.997 13.2682 3.60425 13.0364 3.28644 12.7192C2.96863 12.4021 2.73604 12.0098 2.61023 11.5788C2.48443 11.1478 2.46949 10.692 2.5668 10.2537C2.18677 10.0132 1.87374 9.68051 1.65683 9.28653C1.43992 8.89256 1.32617 8.45013 1.32617 8.00039C1.32617 7.55065 1.43992 7.10822 1.65683 6.71425C1.87374 6.32028 2.18677 5.98756 2.5668 5.74706Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 8.00033L7.33333 9.33366L10 6.66699" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>                  Popular
                </div>
              )}

              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.checkbox}>
                  {selectedPlan === plan.id && <div className={styles.checkboxChecked} />}
                </div>
              </div>

              <div className={styles.planPrice}>
                <span className={styles.originalPrice}>{plan.originalPrice}</span>
                <span className={styles.arrow}>→</span>
                <span className={styles.discountedPrice}>{plan.discountedPrice}</span>
              </div>

              <div className={styles.planDivider} />

              <div className={styles.perDay}>
                <div className={styles.perDayOriginal}>{plan.perDayOriginal}</div>
                <div className={styles.perDayPrice}>
                  <span className={styles.perDayAmount}>{plan.perDay}</span>
                  <span className={styles.perDayLabel}>per day</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant="primary"
          onClick={handleGetPlan}
          className={styles.ctaButton}
        >
          GET MY PLAN
        </Button>

        {/* Terms Text */}
        <p className={styles.terms}>
          By clicking &quot;Get My Plan&quot; I agree to pay $15.19 for a 4-week Membership plan. Unless I cancel before it ends,
          subsequent will automatically renew $15.19 for every 4 weeks. I can cancel anytime from the subscription
          page in my account before the next charge.
        </p>

        {/* Payment Security */}
        <div className={styles.security}>
          <img src={CHECK_ICON} alt="" width={16} height={16} />
          <span className={styles.securityText}>Pay safe and secure</span>
        </div>

        {/* Payment Methods */}
        <div className={styles.paymentMethods}>
          <Image
            src="/assets/payment-methods.png"
            alt="Payment methods: Apple Pay, Visa, Mastercard, Maestro, Discover, American Express"
            width={232}
            height={16}
            className={styles.paymentMethodsImage}
          />
        </div>
      </div>
    </section>
  );
};
