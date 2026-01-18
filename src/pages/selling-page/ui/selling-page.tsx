"use client";

import React, { useEffect } from "react";
import { SellingHeader } from "@/widgets/selling-header";
import { SellingHero } from "@/widgets/selling-hero";
import { useAnalytics } from "@/shared/lib/analytics";
import { useQuizStore } from "@/shared/store";

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
      <SellingHero />
    </>
  );
};
