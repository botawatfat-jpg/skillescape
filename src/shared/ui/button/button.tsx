import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white";
  children: React.ReactNode;
  href?: string;
  size?: "medium" | "card";
  shrinkOnHover?: boolean;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  href,
  shrinkOnHover = false,
  target,
  rel,
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
    // Для внешних ссылок используем обычный <a>
    const isExternal = href.startsWith("http") || href.startsWith("//");

    if (isExternal) {
      return (
        <a href={href} className={classNames} target={target} rel={rel}>
          {children}
        </a>
      );
    }

    // Для внутренних ссылок используем Next.js Link
    return (
      <Link href={href} className={classNames} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
