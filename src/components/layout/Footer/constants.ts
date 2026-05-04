import type { Route } from "next";

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
