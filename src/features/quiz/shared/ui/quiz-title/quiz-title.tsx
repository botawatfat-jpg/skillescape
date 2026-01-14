import React from "react";
import styles from "./quiz-title.module.css";

interface QuizTitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const QuizTitle: React.FC<QuizTitleProps> = ({ children, style }) => {
  return (
    <h2 className={styles.title} style={style}>
      {children}
    </h2>
  );
};
