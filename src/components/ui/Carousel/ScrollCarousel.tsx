"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./ScrollCarousel.module.css";

interface ScrollCarouselProps extends React.ComponentProps<"div"> {
  trackClassName?: string;
}

export const ScrollCarousel = ({
  className,
  trackClassName,
  children,
  ...props
}: ScrollCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const track = trackRef.current;
    if (!track) return;

    setAtStart(track.scrollLeft <= 0);
    setAtEnd(Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth);
  };

  useEffect(() => {
    update();

    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const scrollByPage = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className={clsx(styles.carousel, className)} {...props}>
      <button
        type="button"
        className={clsx(styles.arrowButton, styles.prev)}
        onClick={() => scrollByPage(-1)}
        disabled={atStart}
        data-hidden={atStart}
        aria-label="Предыдущие"
      >
        <ChevronLeft />
      </button>

      <div className={clsx(styles.track, trackClassName)} ref={trackRef} onScroll={update}>
        {children}
      </div>

      <button
        type="button"
        className={clsx(styles.arrowButton, styles.next)}
        onClick={() => scrollByPage(1)}
        disabled={atEnd}
        data-hidden={atEnd}
        aria-label="Следующие"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
