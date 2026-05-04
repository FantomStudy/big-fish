import { getProducts } from "@/mock/products";
import { Typography } from "../../ui/Typography";
import { ProductCard } from "../ProductCard";
import { ProductGrid } from "../ProductGrid";

export const Recomentaions = () => {
  const products = getProducts();

  return (
    <div className="stack">
      <Typography variant="title" tag="h2">
        Возможно вам понравится
      </Typography>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </div>
  );
};
