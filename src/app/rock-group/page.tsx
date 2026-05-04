"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const IMAGES = ["/mock/slider-merch.png", "/mock/slider-rock.png", "/contacts/hero.png"] as const;

const RockGroupPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        {IMAGES.map((el, i) => (
          <Image
            style={{ transform: `translateX(${-100 * (selected - i)}%)` }}
            key={i}
            src={el}
            alt={el}
            fill
          />
        ))}
        <div className={styles.sliderRadioSection}>
          {IMAGES.map((_, i) => (
            <input
              key={i}
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
          className={clsx(styles.sliderRightButton, selected === IMAGES.length - 1 && styles.hide)}
          stroke="#F2F2F2"
          height={102}
          width={102}
          onClick={() => setSelected((prev) => prev + 1)}
        />
      </div>
      <div className={clsx("container")}></div>
    </div>
  );
};

export default RockGroupPage;
