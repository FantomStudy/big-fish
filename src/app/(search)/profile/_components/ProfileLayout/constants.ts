import type { Route } from "next";

export const LINKS: Array<{ label: string; href: Route }> = [
  {
    label: "Главная",
    href: "/profile",
  },
  {
    label: "Заказы",
    href: "/profile/orders",
  },
  {
    label: "Покупки",
    href: "/profile/history",
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
