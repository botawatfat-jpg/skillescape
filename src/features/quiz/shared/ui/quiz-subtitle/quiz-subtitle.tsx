import React from "react";
import { cn } from "@/shared/lib";
import styles from "./quiz-subtitle.module.css";

interface QuizSubtitleProps {
  children: React.ReactNode;
  withoutMargin?: boolean;
}

export const QuizSubtitle: React.FC<QuizSubtitleProps> = ({
  children,
  withoutMargin = false,
}) => {
  return (
    <h2 className={cn(styles.subtitle, withoutMargin && styles.withoutMargin)}>
      {children}
    </h2>
  );
};
