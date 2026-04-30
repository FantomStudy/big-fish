"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, QUICK_LINKS, SOCIAL_LINKS } from "./constants";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo.svg"
              alt="BIG FISH"
              width={72}
              height={48}
              className={styles.logo}
              preload
            />
          </Link>

          <nav className={clsx(styles.navigation, styles.desktopNavigation)}>
            {NAV_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={clsx(styles.actions, styles.desktopActions)}>
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.link}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className={styles.icon} />
                </a>
              );
            })}

            {QUICK_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={styles.link}
                  aria-label={item.label}
                >
                  <Icon className={styles.icon} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
