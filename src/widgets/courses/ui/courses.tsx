import React from "react";
import styles from "./courses.module.css";
import { textConfig } from "@/shared/config/text-config";

export const Courses: React.FC = () => {
  return (
    <>
      <section className={styles.courses}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{textConfig.courses.title}</h2>
        </div>

        <div className={styles.wrapper}>
          {textConfig.courses.items.map((course) => (
            <div className={styles.card} key={course.title}>
              <div className={styles.cardContent}>
                <div className={styles.status}>{course.status}</div>
                <h2 className={styles.title}>{course.title}</h2>

                <h5 className={styles.info}>
                  {course.info.map((info) => (
                    <span key={info}>{info}</span>
                  ))}
                </h5>
                <p className={styles.description}>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
