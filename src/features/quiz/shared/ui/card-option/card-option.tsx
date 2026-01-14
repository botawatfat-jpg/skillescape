"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/shared/lib";
import styles from "./card-option.module.css";

interface CardOptionProps {
  name: string;
  value: string;
  label: string;
  icon?: string;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
}

export const CardOption: React.FC<CardOptionProps> = ({
  name,
  value,
  label,
  icon,
  defaultChecked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <label className={cn(styles.card, isChecked && styles.checked)}>
      <input
        type="checkbox"
        name={name}
        value={value}
        className={styles.checkbox}
        defaultChecked={defaultChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          onChange?.(e.target.value);
        }}
      />
      {icon && (
        <img
          src={icon}
          alt={label}
          width={24}
          height={24}
          className={styles.icon}
        />
      )}
      <span className={styles.label}>{label}</span>
      <div className={styles.checkmark}>
        <Check size={20} />
      </div>
    </label>
  );
};
