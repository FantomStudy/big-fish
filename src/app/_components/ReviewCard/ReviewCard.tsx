"use client";

import type { Review } from "@/constants/mock/reviews";
import clsx from "clsx";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Typography, Avatar, Button, Card } from "@/components/ui";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps extends React.ComponentProps<"div"> {
  review: Review;
}

export const ReviewCard = ({ review, className, ...props }: ReviewCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={clsx(styles.card, className)} {...props}>
      <div className={styles.header}>
        <div className={styles.author}>
          <Avatar src={null} fallback={review.author} />
          <Typography variant="text-xl">{review.author}</Typography>
        </div>

        <Image
          className={styles.image}
          src={review.productImageUrl}
          alt={review.productName}
          width={64}
          height={80}
        />
      </div>

      <div className={styles.rating}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            fill="currentColor"
            className={clsx(index < review.rating && styles.starFilled)}
          />
        ))}
      </div>

      <Typography variant="text-sm" className={styles.product}>
        {review.productName}
      </Typography>

      <Typography className={clsx(styles.text, expanded && styles.textExpanded)}>
        {review.text}
      </Typography>

      <Button
        variant="outline"
        size="sm"
        className={styles.toggle}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "скрыть" : "показать ещё"}
        <ChevronDown style={{ transform: expanded ? "rotate(180deg)" : undefined }} />
      </Button>
    </Card>
  );
};
