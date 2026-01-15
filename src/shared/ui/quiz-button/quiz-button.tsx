"use client";

import { useTransition } from "react";
import { Button } from "@/shared/ui";
import { MoveRightIcon } from "lucide-react";

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

  const handleClick = () => {
    if (onClick) {
      startTransition(() => {
        onClick();
      });
    }
  };

  // Если есть href, просто используем Button как ссылку без transition логики
  if (href) {
    return (
      <Button
        variant={variant}
        className={className}
        size={size}
        shrinkOnHover={shrinkOnHover}
        href={href}
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
