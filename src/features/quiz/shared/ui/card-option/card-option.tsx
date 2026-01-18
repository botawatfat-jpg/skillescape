"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { cn } from "@/shared/lib";
import styles from "./card-option.module.css";

interface CardOptionProps {
  name: string;
  value: string;
  label: string;
  icon?: string;
  defaultChecked?: boolean;
  checked?: boolean; // Добавляем controlled проп
  onChange?: (value: string) => void;
}

export const CardOption: React.FC<CardOptionProps> = ({
  name,
  value,
  label,
  icon,
  defaultChecked = false,
  checked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  
  // Если передан checked проп, используем его (controlled mode)
  const isControlled = checked !== undefined;
  const checkedValue = isControlled ? checked : isChecked;

  // Синхронизируем внутренний state с внешним checked
  useEffect(() => {
    if (isControlled) {
      setIsChecked(checked);
    }
  }, [checked, isControlled]);

  return (
    <label className={cn(styles.card, checkedValue && styles.checked)}>
      <input
        type="checkbox"
        name={name}
        value={value}
        className={styles.checkbox}
        checked={checkedValue}
        onChange={(e) => {
          if (!isControlled) {
          setIsChecked(e.target.checked);
          }
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
    </label>
  );
};
