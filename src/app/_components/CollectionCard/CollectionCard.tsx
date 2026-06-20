import type { Collection } from "@/constants/mock/collections";
import Image from "next/image";
import { Card } from "@/components/ui";
import styles from "./CollectionCard.module.css";

interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <Card className={styles.card}>
      <Image src={collection.src} alt={collection.alt} fill />
    </Card>
  );
};