import React from "react";
import styles from "./quiz-description.module.css";

interface QuizDescriptionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const QuizDescription: React.FC<QuizDescriptionProps> = ({
  children,
  style,
}) => {
  return <p className={styles.description} style={style}>{children}</p>;
};
