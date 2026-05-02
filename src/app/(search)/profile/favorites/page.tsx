import { ProductCard } from "@/components/ProductCard";
import { Grid } from "@/components/ui/Grid";
import { Typography } from "@/components/ui/Typography";

const FavoritesPage = () => {
  return (
    <div>
      <Typography variant="heading-1" tag="h1">
        Избранное <sup>50</sup>
      </Typography>

      <Grid>
        {Array.from({ length: 50 }).map((_, index) => (
          <ProductCard
            key={index}
            product={{
              name: "Cиликоновая приманка",
              price: 411,
              imageUrl: "/mock/product.png",
              color: "#60CBFF",
            }}
          />
        ))}
      </Grid>
    </div>
  );
};

export default FavoritesPage;
