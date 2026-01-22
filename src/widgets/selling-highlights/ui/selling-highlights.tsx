"use client";

import React from "react";
import Image from "next/image";
import styles from "./selling-highlights.module.css";

const VIDEO_ICON = "data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 9.5L8 5.5V13.5L15 9.5Z' fill='%232563EB'/%3E%3Ccircle cx='11' cy='11' r='9' stroke='%232563EB' stroke-width='2'/%3E%3C/svg%3E";
const SPARKLES_ICON = "data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 1L13 8L20 10L13 12L11 19L9 12L2 10L9 8L11 1Z' fill='%23F59E0B'/%3E%3C/svg%3E";
const ROUTE_ICON = "data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8L11 2L17 8M11 2V20' stroke='%232563EB' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E";
const MAP_ICON = "data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 6L8 2L14 6L20 2V16L14 20L8 16L2 20V6Z' stroke='%232563EB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const SHIELD_ICON = "data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 2L3 5V10C3 15 7 19 11 20C15 19 19 15 19 10V5L11 2Z' stroke='%2315803D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 11L10 13L14 9' stroke='%2315803D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

const weeklyPlan = [
  { week: 1, title: "Foundation\nand Mindset" },
  { week: 2, title: "Master AI\nAgents" },
  { week: 3, title: "Find your\nfirst client" },
  { week: 4, title: "Make $2000\nper project" },
];

const features = [
  {
    icon: VIDEO_ICON,
    title: "50+ lectures by TOP 1% AI Experts",
    description: "You will get immediate access to videos in 5 different courses",
  },
  {
    icon: SPARKLES_ICON,
    title: "20+ AI Tools in one place!",
    description: "Get access to ChatGPT, Gemini, Leonardo AI and other tools",
  },
  {
    icon: ROUTE_ICON,
    title: "Personal plan focused on rapid growth",
    description: "Crafted by AI-experts to meet your situation and goals",
  },
  {
    icon: MAP_ICON,
    title: "Step-By-Step Guides",
    description: "Guides will help you build you freelancer profile",
  },
  {
    icon: SHIELD_ICON,
    title: "Proven 5* Freelancing Strategies",
    description: "Implement strategies that makes our students $5K+/month",
  },
];

const highlights = [
  "No prior coding experience is needed",
  "No need for a university degree",
  "You can work at your own pace",
  "Full remote",
];

export const SellingHighlights: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Highlight of your plan</h2>
        
        <div className={styles.content}>
          {/* Left Card */}
          <div className={styles.highlightCard}>
            <Image
              src="/assets/quiz/selling_after.png"
              alt="Freelancer"
              width={220}
              height={220}
              className={styles.cardImage}
            />
            
            <div className={styles.cardHeader}>
              <p className={styles.cardTitle}>You have everything to achieve results!</p>
            </div>
            
            <div className={styles.cardBadges}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.badge}>
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className={styles.rightContent}>
            {/* Weekly Plan */}
            <div className={styles.weeklyPlan}>
              {weeklyPlan.map((item, index) => (
                <div key={index} className={styles.weekItem}>
                  <p className={styles.weekLabel}>Week {item.week}</p>
                  <p className={styles.weekTitle}>{item.title}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <img src={feature.icon} alt="" width={22} height={22} className={styles.featureIcon} />
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
