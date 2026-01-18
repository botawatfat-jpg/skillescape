"use client";

import { useTransition } from "react";
import { Button } from "@/shared/ui";
import { MoveRightIcon } from "lucide-react";
import { useAnalytics } from "@/shared/lib/analytics";

interface QuizButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
  className?: string;
  size?: "medium" | "card";
  shrinkOnHover?: boolean;
  href?: string;
  onClick?: () => void;
}

/**
 * Client Component для кнопки квиза
 * Использует useTransition для оптимизации UX при навигации
 * Автоматически отслеживает клики через GTM
 */
export const QuizButton: React.FC<QuizButtonProps> = ({
  children,
  variant = "primary",
  className,
  size,
  shrinkOnHover,
  href,
  onClick,
}) => {
  const [isPending, startTransition] = useTransition();
  const { trackButtonClick, trackQuizStart } = useAnalytics();

  const handleClick = () => {
    // Отслеживаем клик на кнопку квиза
    const buttonText = typeof children === "string" ? children : "Quiz Button";
    trackButtonClick(buttonText);

    // Если это переход на квиз, отслеживаем начало квиза
    if (href === "/quiz" || href?.includes("quiz")) {
      trackQuizStart();
    }

    if (onClick) {
      startTransition(() => {
        onClick();
      });
    }
  };

  // Если есть href, используем Button как ссылку с отслеживанием
  if (href) {
    const handleLinkClick = () => {
      const buttonText = typeof children === "string" ? children : "Quiz Button";
      trackButtonClick(buttonText);

      if (href === "/quiz" || href?.includes("quiz")) {
        trackQuizStart();
      }
    };

    return (
      <Button
        variant={variant}
        className={className}
        size={size}
        shrinkOnHover={shrinkOnHover}
        href={href}
        onClick={handleLinkClick}
      >
        {children}
        {variant !== "secondary" && <MoveRightIcon size={16} />}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      className={className}
      size={size}
      shrinkOnHover={shrinkOnHover}
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? (
        <span>Loading...</span>
      ) : (
        <>
          {children}
          {variant !== "secondary" && <MoveRightIcon size={16} />}
        </>
      )}
    </Button>
  );
};
