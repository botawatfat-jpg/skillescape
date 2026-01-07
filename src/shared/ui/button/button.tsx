import React from "react";
import styles from "./button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white";
  children: React.ReactNode;
  href?: string;
  size?: "medium" | "card";
  shrinkOnHover?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  href,
  shrinkOnHover = false,
  ...props
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    shrinkOnHover && styles.shrinkOnHover,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
