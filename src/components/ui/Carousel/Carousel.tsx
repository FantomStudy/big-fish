"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./Carousel.module.css";

interface Slide {
  alt: string;
  src: string;
}

interface CarouselProps extends React.ComponentProps<"div"> {
  slides: Slide[];
}

export const Carousel = ({ slides, className, ...props }: CarouselProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className={clsx(styles.carousel, className)} {...props}>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          alt={slide.alt}
          src={slide.src}
          className={styles.slide}
          style={{ transform: `translateX(${-100 * (active - i)}%)` }}
          fill
        />
      ))}

      <div className={styles.buttons}>
        <button
          className={styles.arrowButton}
          onClick={() => setActive((prev) => prev - 1)}
          disabled={active === 0}
          data-hidden={active === 0}
        >
          <ChevronLeft />
        </button>

        {slides.length !== 1 && (
          <div className={styles.dots}>
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                className={styles.dotButton}
                onClick={() => setActive(i)}
                data-active={active === i}
              />
            ))}
          </div>
        )}

        <button
          className={styles.arrowButton}
          onClick={() => setActive((prev) => prev + 1)}
          disabled={active === slides.length - 1}
          data-hidden={active === slides.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};