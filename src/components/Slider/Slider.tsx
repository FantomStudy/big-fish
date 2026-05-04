"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { getSliderImages } from "@/mock/sliderImages";
import styles from "./Slider.module.css";

export const Slider = () => {
  const [selected, setSelected] = useState(0);
  const images = getSliderImages();

  return (
    <div className={styles.slider}>
      {images.map((el, i) => (
        <Image
          style={{ transform: `translateX(${-100 * (selected - i)}%)` }}
          key={el.id}
          src={el.url}
          alt={el.url}
          fill
        />
      ))}
      <div className={styles.sliderRadioSection}>
        {images.map((el, i) => (
          <input
            key={el.id}
            type="radio"
            name="slider"
            checked={selected === i}
            onChange={() => setSelected(i)}
          />
        ))}
      </div>
      <ChevronLeft
        className={clsx(styles.sliderLeftButton, selected === 0 && styles.hide)}
        stroke="#F2F2F2"
        height={102}
        width={102}
        onClick={() => setSelected((prev) => prev - 1)}
      />
      <ChevronRight
        className={clsx(styles.sliderRightButton, selected === images.length - 1 && styles.hide)}
        stroke="#F2F2F2"
        height={102}
        width={102}
        onClick={() => setSelected((prev) => prev + 1)}
      />
    </div>
  );
};
