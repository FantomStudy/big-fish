"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/Radio";
import { Slider } from "@/components/ui/Slider";
import { Typography } from "@/components/ui/Typography";
import { CATEGORIES, COLORS, USAGE_TYPE } from "./constants";
import styles from "./Filters.module.css";

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.block}>
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

      <div className={styles.block}>
        <Typography>Цена</Typography>
        <div className={styles.inputs}>
          <Field>
            <FieldLabel>От</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>До</FieldLabel>
            <Input />
          </Field>
        </div>
      </div>

      <div className={styles.block}>
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

      <div className={styles.block}>
        <Typography>Длина, мм</Typography>
        <Slider min={1} max={200} defaultValue={[1, 200]} />
        <div className={styles.inputs}>
          <Field>
            <FieldLabel>От</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>До</FieldLabel>
            <Input />
          </Field>
        </div>
      </div>

      <div className={styles.block}>
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

      <div className={styles.block}>
        <Typography>Количество в упаковке, шт</Typography>
        <Slider min={1} max={4} defaultValue={[1, 4]} />
        <div className={styles.inputs}>
          <Field>
            <FieldLabel>От</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>До</FieldLabel>
            <Input />
          </Field>
        </div>
      </div>

      <div className={styles.block}>
        <Typography>Вес, г</Typography>
        <Slider min={1} max={40} defaultValue={[1, 40]} />

        <div className={styles.inputs}>
          <Field>
            <FieldLabel>От</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>До</FieldLabel>
            <Input />
          </Field>
        </div>
      </div>
    </div>
  );
};
