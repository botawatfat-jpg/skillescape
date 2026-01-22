"use client";

import React from "react";
import Image from "next/image";
import styles from "./selling-success.module.css";

const successStories = [
  {
    name: "Emma, 28, New York",
    image: "/assets/testimonials/1.jpg",
    story: "After completing Skillescape's AI automation course, I quit my retail job and now run my own freelance business. I build custom AI solutions for small businesses and consistently earn $6K+ monthly. Best career decision ever!",
  },
  {
    name: "Marcus, 25, Miami",
    image: "/assets/testimonials/2.jpg",
    story: "I was skeptical at first, but Skillescape delivered. Within 2 months of training, I created AI chatbots for 3 local businesses and made $4,500. Now I have a waiting list of clients wanting my services.",
  },
  {
    name: "Olivia, 22, Austin",
    image: "/assets/testimonials/3.png",
    story: "As a college student, I needed flexible income. Skillescape taught me to build AI tools that actually solve problems. My first project paid for my entire semester's tuition. Now I'm building a portfolio while still in school!",
  },
];

export const SellingSuccess: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Results that make us proud</h2>
        
        <div className={styles.stories}>
          {successStories.map((story, index) => (
            <div key={index} className={styles.story}>
              <div className={styles.imageWrapper}>
                <Image
                  src={story.image}
                  alt={story.name}
                  width={295}
                  height={213}
                  className={styles.image}
                />
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.name}>{story.name}</h3>
                <p className={styles.text}>{story.story}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className={styles.disclaimer}>
          *Disclaimer: Following courses and guides is the key in freelancing journey and greatly impacts the results.
        </p>
      </div>
    </section>
  );
};
