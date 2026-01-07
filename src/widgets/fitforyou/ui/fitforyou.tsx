import React from "react";
import styles from "./fitforyou.module.css";
import Image from "next/image";
import { textConfig } from "@/shared/config/text-config";

export const FitForYou: React.FC = () => {
  return (
    <section className={styles.fitforyou}>
      <div className={styles.title}>{textConfig.fitForYou.title}</div>
      <div className={styles.suptitle}>{textConfig.fitForYou.subtitle}</div>

      <div className={styles.swiperContainer}>
        <div className={styles.swiperTrack}>
          {[...textConfig.fitForYou.images, ...textConfig.fitForYou.images].map(
            (src, index) => (
              <div key={index} className={styles.swiperSlide}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={240}
                  height={240}
                  className={styles.slideImage}
                  sizes="240px"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>
      </div>
    </section>
  );
};
