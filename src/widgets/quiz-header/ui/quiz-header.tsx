"use client";

import { useState } from "react";
import { Logo } from "@/shared/ui";
import { MenuIcon, X } from "lucide-react";
import { textConfig } from "@/shared/config/text-config";
import styles from "./quiz-header.module.css";

export const QuizHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = textConfig.quiz.menu.items;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo white />
        </div>
        <button
          className={styles.burger}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>{textConfig.quiz.menu.title}</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.menuItem}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            {textConfig.quiz.menu.footer.text}{" "}
            <a
              href={`mailto:${textConfig.quiz.menu.footer.email}`}
              className={styles.emailLink}
            >
              {textConfig.quiz.menu.footer.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
