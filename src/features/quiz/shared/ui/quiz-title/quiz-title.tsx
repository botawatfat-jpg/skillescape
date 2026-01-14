import React from "react";
import styles from "./quiz-title.module.css";

interface QuizTitleProps {
  children: React.ReactNode;
}

export const QuizTitle: React.FC<QuizTitleProps> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
