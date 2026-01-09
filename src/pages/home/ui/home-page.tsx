import React, { Suspense } from "react";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Cta } from "@/widgets/cta";
import { Courses } from "@/widgets/courses";
import { TakeQuiz } from "@/widgets/takequiz";
import { HowItWorks } from "@/widgets/howitworks";
import { FitForYou } from "@/widgets/fitforyou";
import { TakeOurQuiz } from "@/widgets/takeourquiz";
import { SocialProof } from "@/widgets/socialproof";
import { Footer } from "@/widgets/footer";
import dynamic from "next/dynamic";

// Динамический импорт только для тяжелого FAQ компонента с аккордеоном
const Faq = dynamic(() => import("@/widgets/faq").then((mod) => mod.Faq), {
  ssr: true, // SSR включен для SEO
  loading: () => <div style={{ minHeight: "400px" }} />,
});

// Server Component - максимальная оптимизация
export const HomePage: React.FC = () => {
  return (
    <>
      {/* Header - частично client component (MobileMenu) */}
      <Header />

      {/* Hero - критический контент, рендерится сразу на сервере */}
        <Hero />

      {/* Остальные секции - Server Components с client анимацией */}
        <Cta />

        <div id="courses">
          <Courses />
        </div>

        <TakeQuiz />

        <div id="how-it-works">
          <HowItWorks />
        </div>

        <FitForYou />

        <TakeOurQuiz />

        <div id="reviews">
          <SocialProof />
        </div>

      {/* FAQ с Suspense - единственный тяжелый client component */}
      <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
        <div id="faq">
          <Faq />
        </div>
        ¸{" "}
      </Suspense>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
};
