import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/constants/mock/product";
import { ProductGrid } from "../ProductGrid";

interface ProductRecomentaionsProps {
  amount?: number;
}

export const ProductRecomentaions = ({ amount }: ProductRecomentaionsProps) => {
  const products = getProducts(amount);

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};
