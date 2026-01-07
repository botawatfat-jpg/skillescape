"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import styles from "./loading.module.css";

export const Loading: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/assets/loader.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div className={styles.loading}>
      <div className={styles.container}>
        <Lottie
          animationData={animationData}
          loop={true}
          className={styles.animation}
        />
      </div>
    </div>
  );
};
