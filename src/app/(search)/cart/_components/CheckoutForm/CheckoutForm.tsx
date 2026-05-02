"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "../Input";
import styles from "./CheckoutForm.module.css";

export const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    patronymic: "",
    phone: "",
    email: "",
  });

  return (
    <form className={styles.column}>
      <h1>Оформление</h1>

      <div className={styles.card}>
        <div className={styles.cardSection}>
          <h2>Покупатель</h2>
          <div className={styles.fields}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Фамилия</label>
              <Input
                value={formData.surname}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    surname: e.target.value,
                  }))
                }
                type="text"
                required
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Имя</label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                type="text"
                required
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Отчество</label>
              <Input
                value={formData.patronymic}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    patronymic: e.target.value,
                  }))
                }
                type="text"
                required
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Телефон</label>
              <Input
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                type="tel"
                required
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Email</label>
              <Input
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                type="email"
                required
              />
            </div>
          </div>
        </div>
        <div className={styles.cardSection}>
          <h2>Доставка</h2>
          <div>
            <div className={styles.deliveryField}>
              <label className={styles.label}>Выберите способ доставки</label>
              <div className={styles.deliveryPicker}>
                <button type="button" className={styles.deliveryVariant}>
                  <Image width={141.76} height={38.59} src="/icons/sdek-logo.svg" alt="SDEK" />
                </button>
                <button type="button" className={styles.deliveryVariant}>
                  <Image width={172.19} height={37.85} src="/icons/ozon-logo.svg" alt="OZON" />
                </button>
              </div>
            </div>
          </div>
          <button type="button" className={styles.addButton}>
            <span>Добавить</span>
            адрес доставки, пункт выдачи, постомат
          </button>
          <div className={styles.map} />
        </div>
      </div>

      <h1>Заказ</h1>
      <div className={styles.card}>
        <div className={styles.cardSection}>
          <p className={styles.price}>
            Стоимость товаров<span>0 ₽</span>
          </p>
          <p className={styles.price}>
            Стоимость доставки<span>0 ₽</span>
          </p>
          <p className={styles.price}>
            Начислим кешбэк<span>0 ₽</span>
          </p>
          <Input placeholder="Ввести промокод" />
          <h2 className={styles.totalPrice}>
            Итого<span>0 ₽</span>
          </h2>
          <button className={styles.orderButton}>Заказать</button>
        </div>
      </div>
    </form>
  );
};
