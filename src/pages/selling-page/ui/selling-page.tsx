"use client";

import React, { useEffect } from "react";
import { useAnalytics } from "@/shared/lib/analytics";
import { useQuizStore } from "@/shared/store";
import { SellingHeader } from "@/widgets/selling-header";
import { SellingPlan } from "@/widgets/selling-plan";
import { SellingPlanMobile } from "@/widgets/selling-plan-mobile";
import { SellingStats } from "@/widgets/selling-stats";
import { SellingTitle } from "@/widgets/selling-title";
import { SellingPricing } from "@/widgets/selling-pricing";
import { SellingGuarantee } from "@/widgets/selling-guarantee";
import { SellingTools } from "@/widgets/selling-tools";
import { SellingHighlights } from "@/widgets/selling-highlights";
import { SellingSuccess } from "@/widgets/selling-success";
import { SellingFAQ } from "@/widgets/selling-faq";
import { SellingReviews } from "@/widgets/selling-reviews";
import { SellingSocialProof } from "@/widgets/selling-social-proof";
import { SellingCTA } from "@/widgets/selling-cta";
import { SellingFooter } from "@/widgets/selling-footer";
import { PaymentModal } from "@/widgets/payment-modal";
import styles from "./selling-page.module.css";

export const SellingPage: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const { quizData } = useQuizStore();

  useEffect(() => {
    trackEvent("plan_view", {
      page_type: "selling_page",
      plan_status: "generated",
      user_name: quizData?.name || "unknown",
      user_email: quizData?.email ? "provided" : "missing",
      user_goal: quizData?.goal || "unknown",
      user_status: quizData?.status || "unknown",
      income_goal: quizData?.incomeGoal || "unknown",
      experience_level: quizData?.experience || "unknown",
    });
  }, [trackEvent, quizData]);

  return (
    <div className={styles.page}>
      <SellingHeader />
      <main className={styles.main}>
        <SellingPlan />
        <div className={styles.pricingSection}>
          <SellingPlanMobile />
          <SellingStats />
          <SellingTitle />
          <SellingPricing />
          <SellingGuarantee />
        </div>
        <SellingTools />
        <SellingHighlights />
        <SellingSuccess />
        <SellingFAQ />
        <SellingReviews />
        <SellingSocialProof />
        <SellingCTA />
      </main>
      <SellingFooter />
      <PaymentModal />
    </div>
  );
};
