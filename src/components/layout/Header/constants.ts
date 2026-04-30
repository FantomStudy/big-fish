import { ShoppingBagIcon, UserRoundIcon } from "lucide-react";
import { OzonIcon, TelegramIcon, VkIcon, WbIcon } from "@/components/ui";

export const NAV_LINKS = [
  { href: "/", label: "Каталог" },
  { href: "/", label: "О нас" },
  { href: "/", label: "Конкурсы" },
  { href: "/", label: "Страница рок-группы" },
  { href: "/", label: "Новости" },
  { href: "/", label: "Контакты" },
] as const;

export const SOCIAL_LINKS = [
  { href: "/", label: "Telegram", icon: TelegramIcon },
  { href: "/", label: "ВКонтакте", icon: VkIcon },
  { href: "/", label: "Wildberries", icon: WbIcon },
  { href: "/", label: "Ozon", icon: OzonIcon },
] as const;

export const QUICK_LINKS = [
  { href: "/", label: "Корзина", icon: ShoppingBagIcon },
  { href: "/", label: "Личный кабинет", icon: UserRoundIcon },
] as const;
