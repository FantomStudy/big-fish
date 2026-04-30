"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, QUICK_LINKS, SOCIAL_LINKS } from "./constants";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={72} height={48} preload />
          </Link>

          <nav className={styles.nav}>
            {NAV_LINKS.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className={styles.icon} />
                  </a>
                );
              })}
            </div>

            <div className={styles.controls}>
              {QUICK_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.label} href={item.href} aria-label={item.label}>
                    <Icon className={styles.icon} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
