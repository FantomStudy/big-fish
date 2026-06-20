import { ProductCard } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Typography,
} from "@/components/ui";
import { getProducts } from "@/constants/mock/product";
import styles from "./page.module.css";

const SELECT_ITEMS = [
  { label: "Сначала новые", value: null },
  { label: "Сначала старые", value: "old" },
];

const FavoritesPage = () => {
  const products = getProducts();
  return (
    <main className={styles.page}>
      <Typography variant="text-2xl" tag="h1">
        Избранное <sup>{products.length}</sup>
      </Typography>

      <Select items={SELECT_ITEMS}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Сортировка</SelectLabel>
            {SELECT_ITEMS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </main>
  );
};

export default FavoritesPage;
