import React from "react";
import styles from "./quiz-description.module.css";

interface QuizDescriptionProps {
  children: React.ReactNode;
}

export const QuizDescription: React.FC<QuizDescriptionProps> = ({
  children,
}) => {
  return <p className={styles.description}>{children}</p>;
};
