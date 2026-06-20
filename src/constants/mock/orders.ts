export const ORDERS = [
  {
    id: 1,
    src: "/mock/product.png",
    alt: "Товар",
    date: "Ожидаем 6 марта, Пт",
    description: "Доставка в пункт выдачи",
    status: "Передаём в доставку",
  },
  {
    id: 2,
    src: "/mock/product.png",
    alt: "Товар",
    date: "Ожидаем 6 марта, Пт",
    description: "Доставка в пункт выдачи",
    status: "Передаём в доставку",
  },
  {
    id: 3,
    src: "/mock/product.png",
    alt: "Товар",
    date: "Ожидаем 6 марта, Пт",
    description: "Доставка в пункт выдачи",
    status: "Передаём в доставку",
  },
  {
    id: 4,
    src: "/mock/product.png",
    alt: "Товар",
    date: "Ожидаем 6 марта, Пт",
    description: "Доставка в пункт выдачи",
    status: "Передаём в доставку",
  },
];

export const getOrders = () => ORDERS;

export interface OrderProduct {
  id: number;
  src: string;
  alt: string;
  price: number;
  storedUntil: string;
  article: string;
}

export interface ActiveOrder {
  id: number;
  status: string;
  pickupPoint: string;
  pickupTime: string;
  products: OrderProduct[];
}

export interface CompletedOrder {
  id: number;
  status: string;
  delivery: string;
  products: OrderProduct[];
}

const makeProduct = (id: number): OrderProduct => ({
  id,
  src: "/mock/product.png",
  alt: "Силиконовая приманка",
  price: 304,
  storedUntil: "18 марта",
  article: "2824318927",
});

export const ACTIVE_ORDERS: ActiveOrder[] = [
  {
    id: 1,
    status: "Можно забирать",
    pickupPoint: "Пункт Ozon: ул. Берёзка, 19/2",
    pickupTime: "Сегодня с 09:00 до 21:00",
    products: [1, 2, 3, 4].map(makeProduct),
  },
  {
    id: 2,
    status: "Можно забирать",
    pickupPoint: "Пункт Ozon: ул. Берёзка, 19/2",
    pickupTime: "Сегодня с 09:00 до 21:00",
    products: [5, 6].map(makeProduct),
  },
];

export const COMPLETED_ORDERS: CompletedOrder[] = [
  {
    id: 1,
    status: "Получен 27 февраля",
    delivery: "Доставка в пункт выдачи Ozon",
    products: [1, 2].map(makeProduct),
  },
  {
    id: 2,
    status: "Получен 27 февраля",
    delivery: "Доставка в пункт выдачи Ozon",
    products: [3, 4, 5].map(makeProduct),
  },
];

export const getActiveOrders = () => ACTIVE_ORDERS;
export const getCompletedOrders = () => COMPLETED_ORDERS;