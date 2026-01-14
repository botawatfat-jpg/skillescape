"use client";

import { useState } from "react";
import { Logo } from "@/shared/ui";
import { ChevronLeft, Database, X } from "lucide-react";
import { ProgessBar } from "@/features/quiz/shared/bar";
import { useQuizStore } from "@/shared/store";
import styles from "./quiz-layout.module.css";
import { cn } from "@/shared/lib";

interface QuizLayoutProps {
  children: React.ReactNode;
  progress?: number; // 0-100
  onBack?: () => void;
  withoutProgressBar?: boolean;
  title: string;
  barSeparation?: boolean;
}

export const QuizLayout: React.FC<QuizLayoutProps> = ({
  children,
  progress = 0,
  onBack,
  withoutProgressBar = false,
  title,
  barSeparation = false,
}) => {
  const [showDebug, setShowDebug] = useState(false);
  const { quizData, resetQuizData } = useQuizStore();

  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              {onBack && (
                <button className={styles.backButton} onClick={onBack}>
                  <ChevronLeft size={20} />
                </button>
              )}
              <Logo />
            </div>

            <div className={styles.headerRight}>{title}</div>
          </div>
        </header>

        {!withoutProgressBar && <ProgessBar progress={progress} barSeparation={barSeparation} />}

        <main className={cn(styles.main, barSeparation && styles.barSeparation)}>{children}</main>
      </div>

      {/* Debug Button */}
      <button
        className={styles.debugButton}
        onClick={() => setShowDebug(!showDebug)}
        title="Show Quiz Data (Debug)"
      >
        <Database size={20} />
      </button>

      {/* Debug Panel */}
      {showDebug && (
        <div className={styles.debugPanel}>
          <div className={styles.debugHeader}>
            <h3>Quiz Store Data (Debug)</h3>
            <div className={styles.debugActions}>
              <button
                className={styles.resetButton}
                onClick={() => {
                  if (
                    confirm(
                      "Are you sure you want to reset all quiz data?"
                    )
                  ) {
                    resetQuizData();
                  }
                }}
              >
                Reset
              </button>
              <button
                className={styles.closeButton}
                onClick={() => setShowDebug(false)}
              >
                <X size={16} />
              </button>
            </div>
          </div>
          <pre className={styles.debugContent}>
            {JSON.stringify(quizData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
