"use client";

import { motion } from "framer-motion";

import FurnitureMaterialDisplayList from "@/app/components/FurnitureMaterialDisplayList";
import FurnitureMaterialSelect from "@/app/components/FurnitureMaterialSelect";
import { COLLECTION_ITEMS } from "@/app/helpers/constants";
import { useState } from "react";
import { ImageSlider } from "@/app/components/ImageSlider";

const Naroznik = () => {

  // TODO: replace with actual images
  const [selectedImage, setSelectedImage] = useState(
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg"
  );
  const images12 = [
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-3.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",

    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",
  ];
  const IMAGES = [
    { url: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg", alt: "Car One" },
    { url: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg", alt: "Car Two" },
    { url: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg", alt: "Car Three" },
    { url: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg", alt: "Car Four" },
    { url: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg", alt: "Car Five" },
  ];

  return (
    <div className="min-h-[calc(100vh-184px)] w-full flex justify-center bg-white">
      <div className="h-full w-full max-w-[1248px] p-6 mt-2 mb-12 flex gap-12">
        <div className="w-full flex flex-col items-center flex-1">
          <div className="w-full overflow-hidden">
          <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      
    </div>
            {/* <motion.div
              className="w-full h-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
            >
              <img
                src={selectedImage}
                alt="Produkt"
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
            <div className="flex flex-wrap gap-2 mt-4">
              {images.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt="Produkt miniatura"
                  // width={139}
                  className={`cursor-pointer rounded-lg w-[176px] h-[120px object-fill`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div> */}
          </div>
        </div>

        {/* // ! Product Details */}
    
      </div>
    </div>
  );
};

export default Naroznik;
