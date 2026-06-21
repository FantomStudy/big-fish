import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import {
  Card,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { getProducts } from "@/constants/mock/product";
import { Filters } from "./_components/Filters";
import styles from "./page.module.css";

const SELECT_ITEMS = [
  { label: "Популярные", value: null },
  { label: "Новинки", value: "new" },
  { label: "Дешевле", value: "cheaper" },
  { label: "Дороже", value: "expensive" },
  { label: "С высоким рейтингом", value: "high" },
];

const CatalogPage = () => {
  const products = getProducts();

  return (
    <main className="container">
      <div className={styles.layout}>
        <Card variant="dark" className="desktop-only">
          <Filters />
        </Card>

        <div className={styles.content}>
          <Select items={SELECT_ITEMS}>
            <SelectTrigger variant="dark">
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
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
