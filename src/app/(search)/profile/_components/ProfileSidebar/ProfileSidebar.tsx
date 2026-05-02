"use client";

import { GiftIcon, LinkIcon, WalletIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import styles from "./ProfileSidebar.module.css";

const LINKS = [
  {
    label: "Мои заказы",
    href: "/profile",
  },
  {
    label: "Достижения",
    href: "/profile/achievements",
  },
  {
    label: "Избранное",
    href: "/profile/favorites",
  },
];

interface ProfileSidebarProps {
  user: {
    name: string;
    avatarUrl: string;
    balance: number;
    bonus: number;
    referalLink: string;
  };
}

export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
  const pathname = usePathname();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(user.referalLink);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
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
      </div>

      <div>
        <p>{user.name}</p>
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
    </div>
  );
};
