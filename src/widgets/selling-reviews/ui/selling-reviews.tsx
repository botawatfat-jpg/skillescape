"use client";

import React, { useState } from "react";
import { Button } from "@/shared/ui";
import styles from "./selling-reviews.module.css";

const STAR_ICON = "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 1L12.5 7.5L19 9L14 14L15.5 20L10 16.5L4.5 20L6 14L1 9L7.5 7.5L10 1Z' fill='%2300B67A'/%3E%3C/svg%3E";

const reviews = [
  {
    initials: "JR",
    name: "Jessica R",
    location: "TX",
    reviewCount: "3 reviews",
    rating: 5,
    title: "Game changer for my career",
    text: "I was stuck in a dead-end job until I found Skillescape. The AI automation training is incredibly practical - I landed my first client within 3 weeks and made $2,800. The support team is amazing too!",
    date: "January 15, 2025",
  },
  {
    initials: "DK",
    name: "David K",
    location: "NY",
    reviewCount: "2 reviews",
    rating: 5,
    title: "Finally, a course that delivers",
    text: "I've tried countless online courses before, but Skillescape is different. Real projects, real skills, real income. Built my first AI chatbot in 2 weeks and now charging $500+ per project. Highly recommend…",
    date: "January 12, 2025",
    expandable: true,
  },
  {
    initials: "AL",
    name: "Amanda L",
    location: "FL",
    reviewCount: "1 review",
    rating: 5,
    title: "Perfect for beginners",
    text: "Zero tech background, but the step-by-step lessons made everything clear. Created my first AI agent and got paid $350 for it. The confidence this course gave me is priceless. Thank you Skillescape!",
    date: "January 08, 2025",
  },
  {
    initials: "MT",
    name: "Michael T",
    location: "WA",
    reviewCount: "4 reviews",
    rating: 5,
    title: "Best investment I've made",
    text: "As a college student, I needed flexible income. Skillescape taught me marketable AI skills that companies actually need. Now I'm freelancing part-time and making more than most of my friends with full-time jobs.",
    date: "January 05, 2025",
  },
];

export const SellingReviews: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState(2);

  const loadMore = () => {
    setVisibleReviews(prev => prev + 2);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Here's what our freelancing heroes have to say</h2>
        
        <div className={styles.reviews}>
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.header}>
                <div className={styles.avatar}>
                  {review.initials}
                </div>
                
                <div className={styles.userInfo}>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.meta}>{review.location} {review.reviewCount}</div>
                </div>
              </div>
              
              <div className={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                  <img key={i} src={STAR_ICON} alt="" width={20} height={20} />
                ))}
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.reviewTitle}>{review.title}</h3>
                <p className={styles.reviewText}>{review.text}</p>
                {review.expandable && (
                  <button className={styles.moreButton}>More...</button>
                )}
              </div>
              
              <div className={styles.date}>
                <span className={styles.dateLabel}>Date of experience:</span>{" "}
                <span className={styles.dateValue}>{review.date}</span>
              </div>
            </div>
          ))}
          
          {visibleReviews < reviews.length && (
            <Button 
              variant="secondary"
              onClick={loadMore}
              className={styles.loadMoreButton}
            >
              Load more
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
