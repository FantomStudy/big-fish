import type { LucideIcon } from "lucide-react";
import type { Route } from "next";
import { ShoppingBagIcon, UserRoundIcon } from "lucide-react";

interface NavLink {
  href: Route;
  label: string;
}

interface QuickLink {
  href: Route;
  label: string;
  icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/catalog", label: "Каталог" },
  { href: "/", label: "О нас" },
  { href: "/", label: "Конкурсы" },
  { href: "/rock-group", label: "Страница рок-группы" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const QUICK_LINKS: QuickLink[] = [
  { href: "/cart", label: "Корзина", icon: ShoppingBagIcon },
  { href: "/profile", label: "Личный кабинет", icon: UserRoundIcon },
] as const;
