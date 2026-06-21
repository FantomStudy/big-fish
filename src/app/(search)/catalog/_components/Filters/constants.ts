export const CATEGORIES = [
  { id: "1", name: "Самцы" },
  { id: "2", name: "Безумная лягушка" },
  { id: "3", name: "Валькирия" },
  { id: "4", name: "Оснащенные/готовые наборы" },
  { id: "5", name: "Виброхвосты" },
  { id: "6", name: "Крупные приманки" },
  { id: "7", name: "Наборы Mix" },
  { id: "7", name: "Микроджиг/Мормышинг/Поплавок" },
] as const;

export const USAGE_TYPE = [
  { id: "1", name: "Микроджиг" },
  { id: "2", name: "Мормышинг" },
  { id: "3", name: "Поплавок" },
  { id: "4", name: "Джиг" },
  { id: "5", name: "Пелагика" },
] as const;

export const COLORS = [
  "#60CBFF",
  "#CAF417",
  "#FF67FC",
  "#FBC314",
  "#FA6950",
  "#9F9358",
  "#A7E0DA",
  "#FBE03C",
] as const;

export const PRICE_DEFAULTS = [
  { id: "1", name: "До 500 ₽" },
  { id: "2", name: "500 ₽ и дороже" },
  { id: "3", name: "Неважно" },
] as const;
