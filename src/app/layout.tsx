import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
