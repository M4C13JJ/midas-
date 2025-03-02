import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../lib/components/Navbar";
import Image from 'next/image'
import Footer from "../lib/components/Footer";
import ProductList from "../lib/components/ProductList";
import GoogleMapComponent from "../lib/APIcall/googleMaps";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Salon Meblowy Midas</title>
        <meta
          name="description"
          content="Odkryj Salon Meblowy Midas - najlepszy sklep meblowy w Sosnowcu. Bogaty wybór unikalnych mebli dopasowanych do Twojego wnętrza, w tym meble na wymiar."
        />
      </Head>
      
      {/* Navbar */}
      <nav className="bg-black text-white p-4">
        <Navbar />
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <header className="relative h-[500px] w-full">
          <Image
            src="/pages/home/naroznik_sztruksowy.jpg"
            alt="Salon Meblowy Midas"
            layout="fill"
            objectFit="cover"
          />
          
        </header>

        {/* About Section */}
        <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white text-black ">
          <h2 className="text-2xl font-semibold">Dlaczego Midas?</h2>
          <p className="mt-4 text-xl md:text-2x1">Witaj w naszym Salonie Meblowym Midas, specjalizującym się w meblach tapicerowanych na wymiar! 
            <br/> Nasze produkty charakteryzują się najwyższą jakością i trwałością, a także są łatwe w czyszczeniu dzięki hydrofobowym materiałom.<br/>U nas to Ty wybierasz nie tylko kolor mebla, ale także wiele innych szczegółów, takich jak rodzaj nóżek czy poduszek. Nie czekaj dłużej i odkryj naszą unikalną ofertę, by mieć meble dopasowane do swoich potrzeb. Zapraszamy do naszego salonu w Sosnowcu! </p>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-gray-100 text-center flex-grow text-black">
          <h2 className="text-2xl font-semibold">Sprawdź nasze propozycje</h2>
          <div className="mt-24 py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <ProductList/>
          </div>
        </section>
          {/* Google Maps Section */}
          <section >
          <GoogleMapComponent />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center mt-auto">
        <p>&copy; 2024 Salon Meblowy Midas. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
