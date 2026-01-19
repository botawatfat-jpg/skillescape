"use client";

import React, { useEffect } from "react";
import { SellingHeader } from "@/widgets/selling-header";
import { SellingHero } from "@/widgets/selling-hero";
import { SellingStats } from "@/widgets/selling-stats";
import { SellingTitle } from "@/widgets/selling-title";
import { SellingPromo } from "@/widgets/selling-promo";
import { SellingPlans } from "@/widgets/selling-plans";
import { SellingCTA } from "@/widgets/selling-cta";
import { SellingGuarantee } from "@/widgets/selling-guarantee";
import { useAnalytics } from "@/shared/lib/analytics";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-page.module.css";

export const SellingPage: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const { quizData } = useQuizStore();

  // GTM: Отслеживаем просмотр продающей страницы с планом
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
    <>
      <SellingHeader />
      <main className={styles.container}>
        <div className={styles.content}>
          <SellingStats />
          <SellingTitle />
          <div className={styles.section}>
            <SellingPromo />
            <SellingPlans />
          </div>
          <SellingCTA />
          <SellingGuarantee />
        </div>
      </main>
      <SellingHero />
    </>
  );
};
