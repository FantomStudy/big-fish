import { ProductCard } from "@/components/product/ProductCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Typography } from "@/components/ui/Typography";
import { getProducts } from "@/mock/products";

const FavoritesPage = () => {
  const products = getProducts();
  return (
    <main className="stack">
      <Typography variant="title" tag="h1">
        Избранное <sup>{products.length}</sup>
      </Typography>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </main>
  );
};

export default FavoritesPage;
