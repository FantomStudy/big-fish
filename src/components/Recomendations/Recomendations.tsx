import { getProducts } from "@/mock/products";
import { ProductCard } from "../ProductCard";
import { Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography";

export const Recomentaions = () => {
  const products = getProducts();

  return (
    <div className="container">
      <Typography variant="heading-1" tag="h2">
        Возможно вам понравится
      </Typography>

      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};
