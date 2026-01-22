"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/shared/ui";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-cta.module.css";

const CHECK_ICON = "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.3337 4L6.00033 11.3333L2.66699 8' stroke='%2305DF72' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const BADGE_ICON = "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' fill='%2305DF72'/%3E%3C/svg%3E";
const SHIELD_ICON = "data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 4L8 10V22C8 32 15.2 41.2 24 44C32.8 41.2 40 32 40 22V10L24 4Z' fill='%2315803D'/%3E%3Cpath d='M18 24L22 28L30 18' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

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
    discountedPrice: "$25.99",
    perDay: "$0.31",
    perDayOriginal: "$0.80",
  },
];

export const SellingCTA: React.FC = () => {
  const { quizData, openPaymentModal } = useQuizStore();
  const [selectedPlan, setSelectedPlan] = useState("4-week");
  const [timeLeft, setTimeLeft] = useState(595);
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
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Choose your plan</h2>
        
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
                  Popular
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
          By clicking "Get My Plan" I agree to pay $15.19 for a 4-week Membership plan. Unless I cancel before it ends, 
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
          <span className={styles.paymentMethod}>Apple Pay</span>
          <span className={styles.paymentMethod}>Visa</span>
          <span className={styles.paymentMethod}>Mastercard</span>
          <span className={styles.paymentMethod}>Maestro</span>
          <span className={styles.paymentMethod}>Amex</span>
        </div>

        {/* Money-Back Guarantee */}
        <div className={styles.guarantee}>
          <div className={styles.guaranteeIcon}>
            <img src={SHIELD_ICON} alt="" width={48} height={48} />
          </div>
          
          <h3 className={styles.guaranteeTitle}>30-day Money-Back Guarantee</h3>
          
          <p className={styles.guaranteeText}>
            We are so confident in our service that we are ready to offer a full refund within 
            30 days of purchase if you do not achieve initial results and can demonstrate you 
            have followed the plan.{" "}
            <Link href="/terms/subscription" className={styles.guaranteeLink}>
              Learn more about all the conditions in our Subscription Terms
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
