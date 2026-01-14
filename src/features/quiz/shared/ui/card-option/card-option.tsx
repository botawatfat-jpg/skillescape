"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/shared/lib";
import styles from "./card-option.module.css";

interface CardOptionProps {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
}

export const CardOption: React.FC<CardOptionProps> = ({
  name,
  value,
  label,
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
      <span className={styles.label}>{label}</span>
      <div className={styles.checkmark}>
        <Check size={20} />
      </div>
    </label>
  );
};
