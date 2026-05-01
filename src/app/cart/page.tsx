"use client";

import clsx from "clsx";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const CartPage = () => {
  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    patronymic: "",
    phone: "",
    email: "",
  });

  return (
    <main className={clsx("container", styles.cartPage)}>
      <div className={styles.layout}>
        <div className={styles.column}>
          <h1>Корзина</h1>
          <div className={styles.card}>
            <aside className={styles.cardItem}>
              <div className={styles.productImage}>
                <input type="checkbox" />
                <Image width={112} height={156} src="/mock/product.png" alt="product" />
              </div>
              <div>
                <div>
                  Мягкие силиконовые приманки для рыбалки твистер 100мм на щуку судака и окуня
                </div>
                <div>
                  <button>
                    <HeartIcon fill="black" fillOpacity="0.72" strokeWidth={0} />
                  </button>
                  <button>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path
                        d="M22.75 9.75C22.5952 9.75 22.5175 9.74962 22.4521 9.75391C21.4508 9.81971 20.6536 10.6178 20.5879 11.6191C20.5836 11.6845 20.583 11.7622 20.583 11.917V16.75C20.583 19.5781 20.5834 20.9924 19.7051 21.8711C18.8264 22.7498 17.4114 22.75 14.583 22.75H11.417C8.58856 22.75 7.1736 22.7498 6.29492 21.8711C5.41657 20.9924 5.41699 19.5781 5.41699 16.75V11.917C5.41699 11.7622 5.41639 11.6845 5.41211 11.6191C5.34644 10.6178 4.54918 9.81971 3.54785 9.75391C3.48252 9.74962 3.40476 9.75 3.25 9.75V6.5H22.75V9.75ZM10.292 10.917C9.73971 10.917 9.29199 11.3647 9.29199 11.917V17.334C9.29234 17.886 9.73992 18.334 10.292 18.334C10.8439 18.3338 11.2916 17.8859 11.292 17.334V11.917C11.292 11.3648 10.8441 10.9172 10.292 10.917ZM15.709 10.917C15.1567 10.917 14.709 11.3647 14.709 11.917V17.334C14.7093 17.886 15.1569 18.334 15.709 18.334C16.2608 18.3336 16.7086 17.8858 16.709 17.334V11.917C16.709 11.3649 16.261 10.9173 15.709 10.917Z"
                        fill="black"
                        fillOpacity="0.72"
                      />
                      <path
                        d="M10.9075 3.65147C11.0309 3.5363 11.3029 3.43452 11.6813 3.36193C12.0597 3.28935 12.5234 3.25 13.0003 3.25C13.4773 3.25 13.9409 3.28935 14.3193 3.36193C14.6977 3.43452 14.9697 3.5363 15.0932 3.65147"
                        stroke="black"
                        strokeOpacity="0.72"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <button>Купить</button>
                </div>
              </div>
              <div className={styles.productPrice}>
                <h2>411 ₽</h2>
              </div>
            </aside>
          </div>
        </div>

        <form className={styles.column}>
          <h1>Оформление</h1>

          <div className={styles.card}>
            <div className={styles.cardSection}>
              <h2>Покупатель</h2>
              <div className={styles.fields}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Фамилия</label>
                  <input
                    value={formData.surname}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        surname: e.target.value,
                      }))
                    }
                    type="text"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Имя</label>
                  <input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    type="text"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Отчество</label>
                  <input
                    value={formData.patronymic}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        patronymic: e.target.value,
                      }))
                    }
                    type="text"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Телефон</label>
                  <input
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    type="tel"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    type="email"
                    className={styles.input}
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
              <input placeholder="Ввести промокод" className={styles.input} />
              <h2 className={styles.totalPrice}>
                Итого<span>0 ₽</span>
              </h2>
              <button className={styles.orderButton}>Заказать</button>
            </div>
          </div>
        </form>
      </div>
      <div>recomended</div>
    </main>
  );
};

export default CartPage;
