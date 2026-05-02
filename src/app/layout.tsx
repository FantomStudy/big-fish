import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "BIG FISH",
  description: "Лови больше с уникальными приманками",
  openGraph: {
    type: "website",
    url: "https://bigfish.ru",
    title: "BIG FISH",
    description: "Лови больше с уникальными приманками",
  },
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
