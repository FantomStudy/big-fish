import type { Route } from "next";

export const LINKS: Array<{ label: string; href: Route }> = [
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
