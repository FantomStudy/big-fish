"use client";

import { UserRoundIcon } from "lucide-react";
import Link from "next/link";
import { AuthDialog } from "../AuthDialog";
import { Button } from "../ui";
import styles from "./Header.module.css";

function checkAuth() {
  return { isAuthenticated: true };
}

export const ProfileControl = () => {
  const { isAuthenticated } = checkAuth();

  if (isAuthenticated) {
    return (
      <Link href="/profile" aria-label="Личный кабинет">
        <UserRoundIcon className={styles.icon} />
      </Link>
    );
  }

  return (
    <AuthDialog>
      <Button variant="ghost" size="icon" aria-label="Войти" className={styles.authButton}>
        <UserRoundIcon className={styles.icon} />
      </Button>
    </AuthDialog>
  );
};
