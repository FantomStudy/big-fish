import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui";
import { SOCIAL_LINKS } from "@/constants/social";
import { BLOCKS } from "./constants";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logoLink}>
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
                <Link key={item.label} href={item.href} className={styles.iconLink}>
                  <Icon className={styles.socialIcon} />
                  {item.label}
                </Link>
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
