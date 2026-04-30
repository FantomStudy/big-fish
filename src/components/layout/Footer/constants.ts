import type { Route } from "next";
import { OzonIcon, TelegramIcon, VkIcon, WbIcon } from "@/components/ui";

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
      { label: "Новости", href: "/" },
      { label: "Контакты", href: "/" },
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

export const SOCIAL_LINKS = [
  { href: "/", label: "Telegram", icon: TelegramIcon },
  { href: "/", label: "ВКонтакте", icon: VkIcon },
  { href: "/", label: "Wildberries", icon: WbIcon },
  { href: "/", label: "Ozon", icon: OzonIcon },
] as const;
