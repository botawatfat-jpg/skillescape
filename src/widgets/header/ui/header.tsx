import React from "react";
import styles from "./header.module.css";
import { Button, Logo } from "@/shared/ui";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { textConfig } from "@/shared/config/text-config";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mobileHeader}>
        <div className={styles.mobileLogo}>
          <Logo />
        </div>
        <MobileMenu navigationItems={textConfig.header.navigation} />
      </div>

      <div className={styles.desktopHeader}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          {textConfig.header.navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
              <MoveRightIcon size={16} />
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button variant="secondary">{textConfig.header.loginButton}</Button>
          <Button variant="primary">{textConfig.header.startButton}</Button>
        </div>
      </div>
    </header>
  );
};
