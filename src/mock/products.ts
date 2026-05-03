export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  color: string;
}

const MOCK_PRODUCTS = Array.from({ length: 100 }).map((_, index) => ({
  id: index + 1,
  name: "Мягкие силиконовые приманки для рыбалки твистер 100мм на щуку судака и окуня",
  price: 411,
  imageUrl: "/mock/product.png",
  color: "#60CBFF",
}));

export const getProducts = (amount: number = 12) => {
  return MOCK_PRODUCTS.slice(0, amount);
};
