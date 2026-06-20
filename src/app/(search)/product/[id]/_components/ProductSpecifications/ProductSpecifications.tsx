import type { ProductCharacteristic } from "@/constants/mock/productDetail";
import { Typography } from "@/components/ui";
import styles from "./ProductSpecifications.module.css";

interface ProductSpecificationsProps {
  items: {
    left: ProductCharacteristic[];
    right: ProductCharacteristic[];
  };
}

const SpecificationColumn = ({ items }: { items: ProductCharacteristic[] }) => {
  return (
    <dl className={styles.column}>
      {items.map((item) => (
        <div key={item.label} className={styles.row}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.dots} aria-hidden="true" />
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export const ProductSpecifications = ({ items }: ProductSpecificationsProps) => {
  return (
    <section className={styles.section}>
      <Typography tag="h2" variant="text-2xl" className={styles.title}>
        Характеристики
      </Typography>

      <div className={styles.grid}>
        <SpecificationColumn items={items.left} />
        <SpecificationColumn items={items.right} />
      </div>
    </section>
  );
};
