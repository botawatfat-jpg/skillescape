import React from "react";
import styles from "./footer.module.css";
import { Logo } from "@/shared/ui";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import { textConfig } from "@/shared/config/text-config";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo white />

          <div className={styles.socialLinks}>
            <a
              href={textConfig.footer.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href={textConfig.footer.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </a>
            <a
              href={textConfig.footer.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className={styles.policyContainer}>
          {textConfig.footer.policy.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};
