"use client";

import {
  Typography,
  Input,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Slider,
  Field,
  FieldLabel,
} from "@/components/ui";
import { CATEGORIES, COLORS, PRICE_DEFAULTS, USAGE_TYPE } from "./constants";
import styles from "./Filters.module.css";

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.section}>
        <Typography>Категория</Typography>
        <RadioGroup>
          {CATEGORIES.map((category) => (
            <Field key={category.id}>
              <FieldLabel>
                <RadioGroupItem value={category.id} />
                {category.name}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </div>

      <div className={styles.section}>
        <Typography>Цена</Typography>
        <div className={styles.inputs}>
          <Field>
            <Input placeholder="От" />
          </Field>
          <Field>
            <Input placeholder="До" />
          </Field>
        </div>

        <RadioGroup>
          {PRICE_DEFAULTS.map((type) => (
            <Field key={type.id}>
              <FieldLabel>
                <RadioGroupItem value={type.id} />
                {type.name}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </div>

      <div className={styles.section}>
        <Typography>Тип применения</Typography>
        <RadioGroup>
          {USAGE_TYPE.map((type) => (
            <Field key={type.id}>
              <FieldLabel>
                <RadioGroupItem value={type.id} />
                {type.name}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </div>

      <div className={styles.section}>
        <Typography>Длина, мм</Typography>
        <Slider min={1} max={200} defaultValue={[1, 200]} />
        <div className={styles.inputs}>
          <Field>
            <Input placeholder="От" />
          </Field>
          <Field>
            <Input placeholder="До" />
          </Field>
        </div>
      </div>

      <div className={styles.section}>
        <Typography>Цвет</Typography>
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

      <div className={styles.section}>
        <Typography>Количество в упаковке, шт</Typography>
        <RadioGroup>
          {Array.from({ length: 4 }).map((_, id) => (
            <Field key={id}>
              <FieldLabel>
                <RadioGroupItem value={id + 1} />
                {id + 1}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </div>

      <div className={styles.section}>
        <Typography>Вес, г</Typography>
        <Slider min={1} max={40} defaultValue={[1, 40]} />

        <div className={styles.inputs}>
          <Field>
            <Input placeholder="От" />
          </Field>
          <Field>
            <Input placeholder="До" />
          </Field>
        </div>
      </div>
    </div>
  );
};
