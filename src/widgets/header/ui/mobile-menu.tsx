"use client";

import React, { useState } from "react";
import styles from "./header.module.css";
import { Button, Logo } from "@/shared/ui";
import Link from "next/link";
import { Menu, X, MoveRightIcon } from "lucide-react";

interface MobileMenuProps {
  navigationItems: Array<{ label: string; href: string }>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navigationItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className={styles.burgerButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenuHeader}>
            <Logo />
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className={styles.mobileNavigation}>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {item.label}
                <MoveRightIcon size={16} />
              </Link>
            ))}
          </nav>

          <div className={styles.mobileActions}>
            <Button variant="secondary" className={styles.mobileButton}>
              Login
            </Button>
            <Button variant="primary" className={styles.mobileButton}>
              Start Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
