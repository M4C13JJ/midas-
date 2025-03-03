import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  EB_Garamond,
  Lato,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const lato = Lato({
  subsets: ["latin"], // Obsługuje znaki łacińskie
  weight: ["400", "700"], // Wybierz grubości czcionki
  variable: "--font-lato", // Opcjonalna zmienna CSS
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat", // Dodaj zmienną CSS
  subsets: ["latin"],
  weight: ["400", "700"], // Możesz dodać więcej wag, np. 300, 500, 900
});

const eb_garamond = EB_Garamond({
  variable: "--font-pacifico", // Unikalna zmienna
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Salon Meblowy Midas",
  description: "Meble na wymiar w Sosnowcu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Salon Meblowy Midas</title>
        <meta
          name="description"
          content="Odkryj Salon Meblowy Midas - najlepszy sklep meblowy w Sosnowcu. Bogaty wybór unikalnych mebli dopasowanych do Twojego wnętrza, w tym meble na wymiar."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${eb_garamond.className} antialiased`}>
        <Navbar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
