import type { Route } from "next";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/socials";
import { Typography } from "../ui";
import styles from "./Footer.module.css";

interface Block {
  name: string;
  links: Array<{
    label: string;
    href: Route;
  }>;
}

export const BLOCKS: Block[] = [
  {
    name: "Компания",
    links: [
      { label: "О нас", href: "/" },
      { label: "Отзывы клиентов", href: "/" },
      { label: "Новости", href: "/news" },
      { label: "Контакты", href: "/contacts" },
    ],
  },
  {
    name: "Информация",
    links: [
      { label: "Как сделать заказ", href: "/" },
      { label: "Оплата", href: "/" },
      { label: "Условия доставки", href: "/" },
      { label: "Обмен и возврат", href: "/" },
      { label: "Персональные данные", href: "/" },
    ],
  },
] as const;

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.svg" alt="logo" width={124} height={84} />
          </Link>

          {BLOCKS.map((block) => (
            <div key={block.name} className={styles.block}>
              <Typography className={styles.blockTitle}>{block.name}</Typography>
              {block.links.map((link) => (
                <Link key={link.label} href={link.href} className={styles.blockLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div className={styles.block}>
            <Typography className={styles.blockTitle}>Мы в сети</Typography>
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.href} href={item.href} className={styles.iconLink}>
                  <Icon className={styles.icon} />
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className={styles.meta}>
            <a href="tel:+79198457646" className={styles.iconLink}>
              <PhoneIcon aria-hidden="true" />
              +7 919 845 7646
            </a>

            <div className={styles.schedule}>
              <p>ПН-ПТ</p>
              <p>10:00-19:00</p>
            </div>

            <p className={styles.copyright}>&copy; 2026 BIGFISH</p>
          </div>
        </div>
      </div>
    </footer>
  );
};