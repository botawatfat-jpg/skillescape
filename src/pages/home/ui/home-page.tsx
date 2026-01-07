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
import { AnimatedSection } from "@/shared/ui";
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
      <AnimatedSection direction="up" delay={0}>
        <Hero />
      </AnimatedSection>

      {/* Остальные секции - Server Components с client анимацией */}
      <AnimatedSection direction="up" delay={0.1}>
        <Cta />
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.2}>
        <div id="courses">
          <Courses />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0}>
        <TakeQuiz />
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.1}>
        <div id="how-it-works">
          <HowItWorks />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.2}>
        <FitForYou />
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.1}>
        <TakeOurQuiz />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.2}>
        <div id="reviews">
          <SocialProof />
        </div>
      </AnimatedSection>

      {/* FAQ с Suspense - единственный тяжелый client component */}
      <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
        <AnimatedSection direction="right" delay={0.1}>
          <div id="faq">
            <Faq />
          </div>
        </AnimatedSection>
      </Suspense>

      <AnimatedSection direction="left" delay={0.2}>
        <TakeOurQuiz reverse />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0}>
        <div id="contact">
          <Footer />
        </div>
      </AnimatedSection>
    </>
  );
};
