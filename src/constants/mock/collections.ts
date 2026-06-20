import type { Route } from "next";

export interface Collection {
  src: string;
  alt: string;
  link: Route;
}

export const COLLECTIONS: Collection[] = [
  {
    src: "/index/collections/schuka.png",
    alt: "Щука",
    link: "/",
  },
  {
    src: "/index/collections/sudak.png",
    alt: "Судак",
    link: "/",
  },
  {
    src: "/index/collections/okun.png",
    alt: "Окунь",
    link: "/",
  },
  {
    src: "/index/collections/fisher.png",
    alt: "Рыбак",
    link: "/",
  },
  {
    src: "/index/collections/male.png",
    alt: "Выбор бигфиш",
    link: "/",
  },
];

export const getCollection = () => COLLECTIONS;
