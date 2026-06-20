"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Typography } from "@/components/ui";
import styles from "./ProductDescription.module.css";

interface ProductDescriptionProps {
  banner: string;
  headline: string;
  paragraphs: string[];
}

const COLLAPSE_TEXT_LIMIT = 320;

export const ProductDescription = ({ banner, headline, paragraphs }: ProductDescriptionProps) => {
  const [expanded, setExpanded] = useState(false);

  const hasMore = useMemo(
    () => paragraphs.join(" ").length > COLLAPSE_TEXT_LIMIT,
    [paragraphs],
  );

  return (
    <section id="description" className={styles.section}>
      <Typography tag="h2" variant="text-2xl" className={styles.title}>
        Описание
      </Typography>

      <div className={styles.banner}>
        <Image src={banner} alt="Описание товара BIG FISH" fill sizes="100vw" priority={false} />
      </div>

      <div
        className={clsx(styles.content, hasMore && !expanded && styles.contentCollapsed)}
      >
        <Typography tag="h3" className={styles.headline}>
          {headline}
        </Typography>

        {paragraphs.map((paragraph, index) => (
          <Typography key={index} className={styles.paragraph}>
            {paragraph}
          </Typography>
        ))}
      </div>

      {hasMore && (
        <div className={styles.more}>
          <button
            type="button"
            className={styles.moreButton}
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-label={expanded ? "Свернуть описание" : "Развернуть описание"}
          >
            <ChevronDown className={clsx(styles.moreIcon, expanded && styles.moreIconExpanded)} />
          </button>
        </div>
      )}
    </section>
  );
};
