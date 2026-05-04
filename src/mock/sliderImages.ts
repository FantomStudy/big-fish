const IMAGES = [
  { id: 1, url: "/mock/slider-merch.png" },
  { id: 2, url: "/mock/slider-rock.png" },
  { id: 3, url: "/mock/product.png" },
  { id: 4, url: "/mock/news-large.png" },
] as const;

export const getSliderImages = (amount: number = 4) => {
  return IMAGES.slice(0, amount);
};
