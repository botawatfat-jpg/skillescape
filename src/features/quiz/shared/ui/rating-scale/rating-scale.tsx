"use client";

import React, { useState } from "react";
import { cn } from "@/shared/lib";
import styles from "./rating-scale.module.css";

interface RatingScaleProps {
  name: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  minLabel?: string;
  maxLabel?: string;
  onChange?: (value: number) => void;
}

export const RatingScale: React.FC<RatingScaleProps> = ({
  name,
  min = 1,
  max = 5,
  defaultValue,
  minLabel = "not at all",
  maxLabel = "completely",
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className={styles.container}>
      <div className={styles.scaleContainer}>
        {options.map((value) => (
          <label
            key={value}
            className={cn(
              styles.option,
              selectedValue === value && styles.selected
            )}
          >
            <input
              type="radio"
              name={name}
              value={value}
              className={styles.radio}
              defaultChecked={value === defaultValue}
              onChange={() => {
                setSelectedValue(value);
                onChange?.(value);
              }}
            />
            <span className={styles.number}>{value}</span>
          </label>
        ))}
      </div>

      <div className={styles.labels}>
        <span className={styles.label}>{minLabel}</span>
        <span className={styles.label}>{maxLabel}</span>
      </div>
    </div>
  );
};
