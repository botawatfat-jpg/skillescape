import React from "react";
import styles from "./quiz-quote.module.css";

interface QuizQuoteProps {
  children: React.ReactNode;
}

export const QuizQuote: React.FC<QuizQuoteProps> = ({ children }) => {
  return <div className={styles.quote}>{children}</div>;
};
