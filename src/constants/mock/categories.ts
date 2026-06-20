import type { Product } from "./product";
import { MOCK_PRODUCTS } from "./product";

interface Category {
  id: number;
  src: string;
  alt: string;
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    alt: "male",
    src: "/index/categories/male.png",
    products: MOCK_PRODUCTS.slice(0, 12),
  },
  {
    id: 2,
    alt: "crazy-frog",
    src: "/index/categories/crazy-frog.png",
    products: MOCK_PRODUCTS.slice(0, 12),
  },
  {
    id: 3,
    alt: "valkirie",
    src: "/index/categories/valkirie.png",
    products: MOCK_PRODUCTS.slice(0, 12),
  },
];

export const getCategories = () => CATEGORIES;
