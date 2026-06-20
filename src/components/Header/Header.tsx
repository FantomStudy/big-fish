import type { Route } from "next";
import { MenuIcon, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/socials";
import { Button, Sheet, SheetContent, SheetTrigger } from "../ui";
import { ProfileControl } from "./ProfileControl";
import styles from "./Header.module.css";

interface NavLink {
  href: Route;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/catalog", label: "Каталог" },
  { href: "/", label: "О нас" },
  { href: "/", label: "Конкурсы" },
  { href: "/rock-group", label: "Рок-группа" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={72} height={48} preload />
          </Link>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.right}>
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
              <Link href="/cart" aria-label="Корзина">
                <ShoppingBagIcon className={styles.icon} />
              </Link>

              <ProfileControl />

              <Sheet>
                <SheetTrigger
                  render={<Button variant="ghost" size="icon" className="mobile-only" />}
                >
                  <MenuIcon className={styles.icon} />
                </SheetTrigger>
                <SheetContent className={styles.mobile}>
                  <nav className={styles.mobileNav}>
                    {NAV_LINKS.map((link) => (
                      <Link key={link.href} href={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className={styles.mobileSocials}>
                    {SOCIAL_LINKS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={`mobile-${item.label}`}
                          href={item.href}
                          aria-label={item.label}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon />
                        </a>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
