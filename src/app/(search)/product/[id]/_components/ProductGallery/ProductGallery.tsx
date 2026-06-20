"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps extends React.ComponentProps<"div"> {
  images: string[];
  alt: string;
}

export const ProductGallery = ({ images, alt, className, ...props }: ProductGalleryProps) => {
  const [active, setActive] = useState(0);
  const thumbsListRef = useRef<HTMLDivElement>(null);

  const scrollThumbs = (delta: number) => {
    thumbsListRef.current?.scrollBy({ top: delta, behavior: "smooth" });
  };

  return (
    <div className={clsx(styles.gallery, className)} {...props}>
      <div className={styles.thumbs}>
        <button
          type="button"
          className={styles.thumbNav}
          onClick={() => scrollThumbs(-80)}
          aria-label="Прокрутить вверх"
        >
          <ChevronUp />
        </button>

        <div className={styles.thumbsList} ref={thumbsListRef}>
          {images.map((src, i) => (
            <button
              type="button"
              key={`${src}-${i}`}
              className={styles.thumb}
              data-active={active === i}
              onClick={() => setActive(i)}
              aria-label={`Фото ${i + 1}`}
            >
              <Image src={src} alt={`${alt} ${i + 1}`} fill sizes="64px" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className={styles.thumbNav}
          onClick={() => scrollThumbs(80)}
          aria-label="Прокрутить вниз"
        >
          <ChevronDown />
        </button>
      </div>

      <div className={styles.main}>
        <Image
          src={images[active]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          priority
        />
      </div>
    </div>
  );
};
