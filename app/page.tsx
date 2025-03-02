import React from "react";
import Image from 'next/image'
import ProductList from "./lib/components/ProductList";
import GoogleMapComponent from "./lib/APIcall/googleMaps";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


     <div className="flex-1">
            {/* Hero Section */}
       <header className="relative h-[500px] w-full">
         <Image
           src="/pages/home/naroznik_sztruksowy.jpg"
           alt="Salon Meblowy Midas"
           layout="fill"
           unoptimized
           objectFit="cover"
         />
        
       </header>

       {/* About Section */}
     <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white text-black ">
         <h2 className=" text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold">Dlaczego Midas?</h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl ">Witaj w Salonie Meblowym Midas – miejscu, gdzie Twoje marzenia o idealnych meblach stają się rzeczywistością!
 Specjalizujemy się w tworzeniu mebli tapicerowanych <b>na wymiar</b>, które łączą najwyższą jakość, trwałość i wyjątkowy komfort. <br/>Nasze produkty wykonane są z materiałów hydrofobowych, co ułatwia ich czyszczenie i codzienną pielęgnację.

 U nas masz pełną swobodę personalizacji – wybierasz nie tylko kolor, ale także detale, takie jak rodzaj nóżek, poduszek czy wykończenie.<br/> Odwiedź nasz salon w Sosnowcu i przekonaj się, jak łatwo możesz stworzyć meble idealnie dopasowane do Twojego stylu i potrzeb</p>
 <br/>
 <h2 className=" text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold">Jeśli masz dodatkowe pytania, skontaktuj się z nami pod numerem: 533 088 583</h2>
    
     
       </section>
    

      {/* Categories Section */}
      <section className="py-12 bg-gray-100 text-center flex-grow text-black">
        <h2 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Sprawdź nasze propozycje</h2>
        <div className="mt-24 py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
         <ProductList/>
         </div>
       </section >
         {/* Kontakt Section */}
       <section className="py-12 bg-gray-100 text-center flex-grow text-black">
         
       </section>
         {/* Google Maps Section */}
         <section >
         <GoogleMapComponent />
       </section>
     </div>

  </div>
  );
}
