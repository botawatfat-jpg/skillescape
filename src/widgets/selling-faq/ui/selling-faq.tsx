"use client";

import React, { useState } from "react";
import styles from "./selling-faq.module.css";

const CHEVRON_DOWN = "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%230A0A0A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

const faqs = [
  {
    question: "What happens after payment?",
    answer: "Immediately after payment, you'll get access to your personalized learning dashboard with all courses, AI tools, and step-by-step guides. You can start learning right away!",
  },
  {
    question: "How can I make money using Skillescape?",
    answer: "You'll learn to build AI chatbots, automation tools, and AI agents that businesses need. After completing the training, you can offer these services on freelancing platforms or directly to clients.",
  },
  {
    question: "How can I cancel my subscription?",
    answer: "You can cancel your subscription anytime from your account settings. Go to 'Subscription' and click 'Cancel'. You'll still have access until the end of your billing period.",
  },
  {
    question: "I've tried many resources. Why Skillescape is better?",
    answer: "Skillescape provides hands-on, practical training focused on real freelancing skills. You get access to 20+ AI tools, personalized learning paths, and proven strategies that have helped thousands earn $5K+/month.",
  },
];

export const SellingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>People often ask</h2>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <div className={styles.faqItem}>
                <button
                  className={styles.question}
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <img
                    src={CHEVRON_DOWN}
                    alt=""
                    width={16}
                    height={16}
                    className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className={styles.answer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
              
              {index < faqs.length - 1 && <div className={styles.divider} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
