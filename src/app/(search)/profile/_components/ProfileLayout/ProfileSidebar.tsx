"use client";

import type { User } from "@/constants/mock/user";
import { GiftIcon, LinkIcon, WalletIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typography, Button, Avatar, Card } from "@/components/ui";
import { LINKS } from "./constants";
import styles from "./ProfileSidebar.module.css";

interface ProfileSidebarProps {
  user: User;
}

export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
  const pathname = usePathname();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(user.referalLink);
  };

  return (
    <Card variant="medium" className={styles.card}>
      <header className={styles.header}>
        <Avatar src={user.avatarUrl} fallback={user.avatarUrl} />

        <div className={styles.finance}>
          <div className={styles.balance}>
            <p>{user.balance} ₽</p>
            <WalletIcon />
          </div>
          <div className={styles.bonus}>
            <p>{user.bonus} ₽</p>
            <GiftIcon />
          </div>
        </div>
      </header>

      <div>
        <Typography>{user.name}</Typography>
        <Link href="/cart" className={styles.editProfile}>
          Изменить профиль
        </Link>
      </div>

      <Button onClick={handleCopy} className={styles.copyButton}>
        <div className={styles.linkWrapper}>
          <LinkIcon /> <span>{user.referalLink}</span>
        </div>
        <div className={styles.copyDescript}>+50 БигФишек за приглашение друга</div>
      </Button>

      <nav className={styles.nav}>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.link}
            data-active={pathname === link.href}
          >
            {link.label}
          </Link>
        ))}
        <Button variant="link">Выход</Button>
      </nav>
    </Card>
  );
};
