import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";
import { Typography } from "@/components/ui";
import { getProducts } from "@/mock/products";
import styles from "./ProductRecomendations.module.css";

interface ProductRecomentaionsProps {
  amount?: number;
}

export const ProductRecomentaions = ({ amount }: ProductRecomentaionsProps) => {
  const products = getProducts(amount);

  return (
    <div className="container">
      <Typography variant="text-2xl" tag="h2" className={styles.title}>
        Возможно вам понравится
      </Typography>

      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </div>
  );
};
