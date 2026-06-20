export interface ProductColor {
  id: string;
  image: string;
}

export interface ProductCharacteristic {
  label: string;
  value: string;
}

export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  variant: string;
  text: string;
  photos: string[];
}

export interface ProductReviewStats {
  average: number;
  total: number;
  distribution: Record<1 | 2 | 3 | 4 | 5, number>;
}

const IMAGE = "/mock/product.png";

export const PRODUCT_GALLERY = Array.from({ length: 12 }).map(() => IMAGE);

export const PRODUCT_COLORS: ProductColor[] = Array.from({ length: 27 }).map((_, i) => ({
  id: `color-${i + 1}`,
  image: IMAGE,
}));

export const PRODUCT_SHORT_CHARACTERISTICS: ProductCharacteristic[] = [
  { label: "Тип", value: "Мягкая приманка для рыбалки" },
  { label: "Вес, г", value: "6,7" },
  { label: "Размеры, мм", value: "100" },
  { label: "Длина, мм", value: "100" },
  { label: "Страна-изготовитель", value: "Россия" },
];

export const PRODUCT_FULL_CHARACTERISTICS = {
  left: [
    { label: "Артикул", value: "2824297749" },
    { label: "Тип", value: "Мягкая приманка для рыбалки" },
    { label: "Вес, г.", value: "6.7" },
    { label: "Размеры, мм.", value: "100" },
    { label: "Длина, мм.", value: "100" },
    { label: "Страна-изготовитель", value: "Россия" },
    { label: "Плавучесть", value: "Медленно тонущий (Slow sinking)" },
    { label: "Количество в упаковке, шт.", value: "4" },
  ],
  right: [
    { label: "Вид мягкой приманки", value: "Съедобная" },
    { label: "Форма мягкой приманки", value: "Слаг, Твистер, Червь" },
    { label: "Бренд", value: "BIG FISH" },
    { label: "Размер приманки, дюймы", value: "4" },
    { label: "Материал приманки", value: "Силикон" },
    { label: "Цвет", value: "8" },
    { label: "Вид крючка", value: "Без крючка" },
    { label: "Упаковка", value: "Пластиковый пакет" },
  ],
} satisfies { left: ProductCharacteristic[]; right: ProductCharacteristic[] };

export const PRODUCT_CUSTOMER_PHOTOS = Array.from({ length: 8 }).map(() => IMAGE);

export const PRODUCT_DETAIL = {
  name: "Мягкие силиконовые приманки для рыбалки твистер 100мм на щуку судака и окуня",
  rating: 4.9,
  reviewsCount: 9499,
  sizes: [100, 120, 140, 160, 200],
  totalColors: 27,
  price: 304,
  oldPrice: 950,
  article: "2824318927",
  customerPhotosCount: 781,
  descriptionBanner: "/mock/product.png",
  descriptionHeadline: "Заставьте хищника атаковать с первого заброса!",
  description: [
    "Этот классический твистер длиной 100 мм — проверенное оружие для охоты за трофейной щукой, клыкастым судаком и крупным «горбачом». Главный секрет приманки заключается в её невероятно подвижном хвосте: он включается в работу моментально, создавая в воде мощные акустические колебания, которые хищник улавливает с большого расстояния даже в мутной воде.",
    "Приманка выполнена из мягкого, но выносливого силикона с добавлением аттрактанта. Это делает её «съедобной» для рыбы — почувствовав вкус, хищник не выплевывает добычу, а старается заглотить её глубже, что гарантирует вам уверенную подсечку. Тело твистера идеально адаптировано под любые виды оснастки: он отлично сидит на классической джиг-головке, не сползает с офсетного крючка при ловле в корягах и показывает потрясающие результаты на шарнирном монтаже.",
  ],
};

export const PRODUCT_REVIEW_STATS: ProductReviewStats = {
  average: 4.9,
  total: 9499,
  distribution: {
    5: 8120,
    4: 980,
    3: 245,
    2: 89,
    1: 65,
  },
};

const REVIEW_TEXT =
  "Приманки от бренда BIG FISH уже давно зарекомендовали себя у меня как надёжные. Решил взять эту расцветку с контрастной головой — жёлто-оранжевой и фиолетовой частями. На водоёме показала себя блестяще. Материал очень мягкий, но при этом эластичный, хвост бешено шевелится даже при медленной проводке. Щука атакует уверенно, не выплёвывает. В комплекте приятный бонус — маленький оранжевый аттрактант, который отлично держится на приманке.";

export const PRODUCT_REVIEWS: ProductReview[] = [
  {
    id: 1,
    author: "Анонимный пользователь",
    rating: 5,
    variant: "Длина, мм: 100, Цвет товара: желтый-оранжевый, Название цвета: 1",
    text: REVIEW_TEXT,
    photos: [IMAGE, IMAGE, IMAGE],
  },
  {
    id: 2,
    author: "Анонимный пользователь",
    rating: 5,
    variant: "Длина, мм: 100, Цвет товара: желтый-оранжевый, Название цвета: 1",
    text: REVIEW_TEXT,
    photos: [IMAGE, IMAGE, IMAGE],
  },
];
