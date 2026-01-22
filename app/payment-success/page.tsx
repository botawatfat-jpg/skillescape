"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";
import styles from "./payment-success.module.css";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const { quizData } = useQuizStore();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const userEmail = quizData?.email || "your email";

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#10B981" fillOpacity="0.1"/>
            <circle cx="40" cy="40" r="32" fill="#10B981"/>
            <path d="M25 40L35 50L55 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className={styles.title}>Payment Successful!</h1>
        
        <p className={styles.description}>
          Thank you for your purchase. Your payment has been processed successfully.
        </p>

        <div className={styles.infoCard}>
          <div className={styles.infoItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Confirmation Email</h3>
              <p className={styles.infoText}>
                A confirmation email with your order details and access instructions has been sent to <strong>{userEmail}</strong>
              </p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.infoItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V12L16 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>What's Next?</h3>
              <p className={styles.infoText}>
                Check your inbox for detailed instructions on how to access your personalized AI freelancing plan.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.countdown}>
          <p className={styles.countdownText}>
            Redirecting to homepage in <span className={styles.countdownNumber}>{countdown}</span> {countdown === 1 ? 'second' : 'seconds'}...
          </p>
        </div>

        <button 
          onClick={() => router.push("/")} 
          className={styles.homeButton}
        >
          Go to Homepage Now
        </button>
      </div>
    </div>
  );
}
