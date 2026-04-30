"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/Radio";
import { Slider } from "@/components/ui/Slider";
import { CATEGORIES, COLORS, USAGE_TYPE } from "./constants";
import styles from "./Filters.module.css";

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.block}>
        <p className={styles.title}>Категория</p>
        <RadioGroup>
          {CATEGORIES.map((category) => (
            <label key={category.id} className={styles.radio}>
              <RadioGroupItem value={category.id} />
              {category.name}
            </label>
          ))}
        </RadioGroup>
      </div>

      <div className={styles.block}>
        <p className={styles.title}>Цена</p>
        <div className={styles.inputs}>
          <label>
            От
            <Input />
          </label>

          <label>
            До
            <Input />
          </label>
        </div>
      </div>

      <div className={styles.block}>
        <p className={styles.title}>Тип применения</p>
        <RadioGroup>
          {USAGE_TYPE.map((type) => (
            <label key={type.id} className={styles.radio}>
              <RadioGroupItem value={type.id} />
              {type.name}
            </label>
          ))}
        </RadioGroup>
      </div>

      <div className={styles.block}>
        <p className={styles.title}>Длина, мм</p>
        <Slider min={1} max={200} defaultValue={[1, 200]} />
        <div className={styles.inputs}>
          <label>
            От
            <Input type="number" />
          </label>

          <label>
            До
            <Input type="number" />
          </label>
        </div>
      </div>

      <div className={styles.block}>
        <p className={styles.title}>Цвет</p>
        <div className={styles.colors}>
          {COLORS.map((color) => (
            <Checkbox
              key={color}
              aria-label={`Color ${color}`}
              className={styles.colorCheckbox}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <p className={styles.title}>Количество в упаковке, шт</p>
        <Slider min={1} max={4} defaultValue={[1, 4]} />
        <div className={styles.inputs}>
          <label>
            От
            <Input type="number" />
          </label>

          <label>
            До
            <Input type="number" />
          </label>
        </div>
      </div>

      <div className={styles.block}>
        <p className={styles.title}>Вес, г</p>
        <Slider min={1} max={40} defaultValue={[1, 40]} />
        <div className={styles.inputs}>
          <label>
            От
            <Input type="number" />
          </label>

          <label>
            До
            <Input type="number" />
          </label>
        </div>
      </div>
    </div>
  );
};
