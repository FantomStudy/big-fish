"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps extends React.ComponentProps<"div"> {
  images: string[];
  alt: string;
}

export const ProductGallery = ({ images, alt, className, ...props }: ProductGalleryProps) => {
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const thumbsListRef = useRef<HTMLDivElement>(null);

  const go = (delta: number) => {
    setActive((prev) => (prev + delta + images.length) % images.length);
  };

  const scrollThumbs = (delta: number) => {
    thumbsListRef.current?.scrollBy({ top: delta, behavior: "smooth" });
  };

  useEffect(() => {
    if (!fullscreen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [fullscreen, images.length]);

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
      <button
        type="button"
        className={styles.main}
        onClick={() => setFullscreen(true)}
        aria-label="Открыть фото на весь экран"
      >
        <Image
          src={images[active]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          priority
        />
      </button>

      {/*
      {fullscreen && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setFullscreen(false)}
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setFullscreen(false)}
            aria-label="Закрыть"
          >
            <X />
          </button>

          <div className={styles.fullImage} onClick={(e) => e.stopPropagation()}>
            <Image src={images[active]} alt={alt} fill sizes="100vw" />
          </div>

          {images.length > 1 && (
            <div className={styles.fullDots} onClick={(e) => e.stopPropagation()}>
              {images.map((src, i) => (
                <button
                  type="button"
                  key={`dot-${src}-${i}`}
                  className={styles.dot}
                  data-active={active === i}
                  onClick={() => setActive(i)}
                  aria-label={`Фото ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div> 
      )}*/}
    </div>
  );
};
