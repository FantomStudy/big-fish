import { ProductGallery } from "./_components/ProductGallery";
import { ProductInfo } from "./_components/ProductInfo";
import { ProductPurchase } from "./_components/ProductPurchase";
import styles from "./page.module.css";

const IMAGE = "/mock/product.png";

const GALLERY = Array.from({ length: 12 }).map(() => IMAGE);

const COLORS = Array.from({ length: 27 }).map((_, i) => ({
  id: `color-${i + 1}`,
  image: IMAGE,
}));

const CHARACTERISTICS = [
  { label: "Тип", value: "Мягкая приманка для рыбалки" },
  { label: "Вес, г", value: "6,7" },
  { label: "Размеры, мм", value: "100" },
  { label: "Длина, мм", value: "100" },
  { label: "Страна-изготовитель", value: "Россия" },
];

const CUSTOMER_PHOTOS = Array.from({ length: 8 }).map(() => IMAGE);

const ProductPage = () => {
  return (
    <main className="container">
      {/* <div className={styles.layout}> */}
      {/* <ProductGallery images={GALLERY} alt="Силиконовая приманка" className={styles.gallery} /> */}

      <div className={styles.aside}>
        <ProductPurchase price={304} oldPrice={950} article="2824318927" />
        <ProductInfo
          className={styles.info}
          name="Мягкие силиконовые приманки для рыбалки твистер 100мм на щуку судака и окуня"
          rating={4.9}
          reviewsCount={9499}
          sizes={[100, 120, 140, 180, 200]}
          colors={COLORS}
          totalColors={27}
          characteristics={CHARACTERISTICS}
          customerPhotos={CUSTOMER_PHOTOS}
          customerPhotosCount={781}
        />
      </div>
      {/* </div> */}
    </main>
  );
};

export default ProductPage;
