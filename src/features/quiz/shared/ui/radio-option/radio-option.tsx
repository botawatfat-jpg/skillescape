import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/shared/lib";
import styles from "./radio-option.module.css";

interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
  variant?: "default" | "card";
  icon?: React.ReactNode;
  onChange?: () => void;
}

export const RadioOption: React.FC<RadioOptionProps> = ({
  name,
  value,
  label,
  defaultChecked,
  variant = "default",
  icon,
  onChange,
}) => {
  const isCard = variant === "card";

  return (
    <label className={cn(styles.option, isCard && styles.card)}>
      <input
        type="radio"
        name={name}
        value={value}
        className={styles.radio}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {isCard && icon && <div className={styles.iconContainer}>{icon}</div>}
      <span className={styles.optionLabel}>{label}</span>
      {isCard && (
        <div className={styles.checkmark}>
          <Check size={20} />
        </div>
      )}
    </label>
  );
};
