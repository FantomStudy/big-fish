import { OzonIcon, TelegramIcon, VkIcon, WbIcon } from "@/components/ui";

export const SOCIAL_LINKS = [
  { href: "https://t.me/bigfish_fishplanet", label: "Telegram", icon: TelegramIcon },
  { href: "https://vk.ru/bigfish_fishplanet", label: "ВКонтакте", icon: VkIcon },
  { href: "https://www.wildberries.ru/brands/big-fish", label: "Wildberries", icon: WbIcon },
  {
    href: "https://www.ozon.ru/brand/silikonovye-primanki-big-fish-100921801/?all_items=true",
    label: "Ozon",
    icon: OzonIcon,
  },
] as const;
