import React from "react";
import Link from "next/link";
import styles from "./logo.module.css";
import { textConfig } from "@/shared/config/text-config";

export const Logo: React.FC<{ white?: boolean }> = ({ white = false }) => {
  return (
    <Link href="/#hero" className={`${styles.logo} ${white ? styles.white : ""}`}>
      {textConfig.logo}
    </Link>
  );
};
