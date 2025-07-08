"use client";
import FurnitureMaterialDisplayList from "@/app/components/FurnitureMaterialDisplayList";
import FurnitureMaterialSelect from "@/app/components/FurnitureMaterialSelect";
import { COLLECTION_ITEMS, CORNERS_COLLECTION } from "@/app/helpers/constants";
import { useEffect, useState } from "react";
import { ImageSlider } from "@/app/components/ImageSlider";
import { notFoaund, useParams } from "next/navigation";
import { div } from "framer-motion/m";

const Naroznik = () => {
  const params = useParams();
  if (!params?.name || typeof params.name !== "string") {
    notFound();
  }

  // old properties
  // ? Funkcja spania
  const [sleepFunction, setSleepFunction] = useState("yes"); // TODO: change to boolean
  const [width, setWidth] = useState("350"); // ? Wybierz szerokość
  const [length, setLength] = useState("190"); // ? Wybierz długość
  const [collection, setCollection] = useState("poso"); // ? Wybierz kolekcję
  const [material, setMaterial] = useState("poso"); // ? Wybierz materiał (brak tekstu)
  const [legHeight, setLegHeight] = useState("5cm"); // ? Wybierz nóżki
  const [legMaterial, setLegMaterial] = useState("poso"); // ? Wybierz nóżki (nie ma tekstu)
  const [side, setSide] = useState("poso"); // ? Wybierz bok
  const [cornerLayout, setCornerLayout] = useState("rightSide"); // ? układ narożnika
  const [filling, setFilling] = useState("HR"); // ? wypełnienie
  // ? mata kokosowa
  const [coconutMat, setCoconutMat] = useState("yes"); // TODO: change to boolean
  const [localImages, setLocalImages] = useState<
    { uri: string; alt: string }[]
  >([]); // TODO: change to boolean

  // TODO: replace with actual images
  const [selectedImage, setSelectedImage] = useState(
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg"
  );

  //
  useEffect(() => {
    const corner = CORNERS_COLLECTION.find(
      (corner) => corner.name == params.name
    );
    if (!corner) {
      notFound();
      return;
    }
    setLocalImages(corner.images);
  }, [params]);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 my-10">
      {/* IMGAES */}
      <div className="lg:w-2/3">
        <div className="w-full  top-20 h-max">
          <div
            style={{
              maxWidth: "1200px",
              width: "100%",
              aspectRatio: "10 / 6",
              margin: "0 auto",
            }}
          >
            <ImageSlider images={localImages} />
          </div>
          <div className="mt-24">
            OPIS PRODUKTU sit amet, consectetur adipiscing elit. Quisque
            accumsan fringilla ullamcorper. Nullam interdum mi non tempor
            facilisis. Sed semper, sapien hendrerit placerat facilisis, orci
            erat faucibus sapien, sodales mattis lorem felis sit amet risus.
            Donec tempus, arcu sit amet hendrerit luctus, mauris felis convallis
            lorem, eget sollicitudin justo urna vel felis. Phasellus lectus
            nisi, rhoncus nec pulvinar nec, blandit nec tellus. Donec hendrerit
            metus ac ipsum efficitur, sit amet pharetra augue ullamcorper.
            Nullam consectetur erat sit amet nisi egestas eleifend. C
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <h1 className="text-4xl font-medium"> Product name</h1>
        <p>
          {" "}
          OPIS PRODUKTU sit amet, consectetur adipiscing elit. Quisque accumsan
          fringilla ullamcorper. Nullam interdum mi non tempor facilisis. Sed
          semper, sapien hendrerit placerat facilisis, orci erat faucibus
          sapien, sodales mattis lorem felis sit amet risus. Donec tempus, arcu
          sit amet hendrerit luctus, mauris felis convallis lorem, eget
          sollicitudin justo urna vel felis. Phasellus lectus nisi, rhoncus nec
          pulvinar nec, blandit nec tellus. Donec hendrerit metus ac ipsum
          efficitur, sit amet pharetra augue ullamcorper. Nullam consectetur
          erat sit amet nisi egestas eleifend. Cras commodo eu nisl at
          efficitur. Sed vel neque vestibulum odio consequat lobortis. Maecenas
          congue lacus sed tincidunt facilisis. Donec semper semper tincidunt.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
          tempor iaculis ante eu accumsan. Etiam in accumsan neque. Donec ut
          arcu ac nisi blandit mattis id eu leo. Fusce ut malesuada urna. In
          ultrices libero a lorem fringilla, in hendrerit neque aliquam.
          Suspendisse ut nulla nisi. Donec quis urna neque. Quisque porta odio
          nec sapien pellentesque, ut molestie ipsum porta. Ut venenatis
          interdum dolor at imperdiet. Curabitur at imperdiet arcu. Ut velit
          elit, efficitur ut felis et, viverra efficitur dolor.{" "}
        </p>
        <div className="h-[2px] bg-gray-200"></div>
        {/* <FurnitureProperties /> */}
        <div className="h-[2px] bg-gray-200"></div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Quisque accumsan fringilla ullamcorper. Nullam interdum mi non
            tempor facilisis. Sed semper, sapien hendrerit placerat facilisis,
            orci erat faucibus sapien, sodales mattis lorem felis sit amet
            risus. Donec tempus, arcu sit amet hendrerit luctus, mauris felis
            convallis lorem, eget sollicitudin justo urna vel felis. Phasellus
            lectus nisi, rhoncus nec pulvinar nec, blandit nec tellus.
          </p>
        </div>
        <div className="h-[2px] bg-gray-200"></div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Quisque accumsan fringilla ullamcorper. Nullam interdum mi non
            tempor facilisis. Sed semper, sapien hendrerit placerat facilisis,
            orci erat faucibus sapien, sodales mattis lorem felis sit amet
            risus. Donec tempus, arcu sit amet hendrerit luctus, mauris felis
            convallis lorem, eget sollicitudin justo urna vel felis. Phasellus
            lectus nisi, rhoncus nec pulvinar nec, blandit nec tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Naroznik;
// {/* <div className="min-h-[calc(100vh-184px)] w-full  justify-center bg-white">
//       <div className="h-full w-full max-w-[1248px] py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64mt-2 mb-12 flex gap-12 ">
//         <div className="w-full flex flex-col items-center flex-1">
//           <div className="w-full overflow-hidden">
//             <div
//               style={{
//                 maxWidth: "1200px",
//                 width: "100%",
//                 aspectRatio: "10 / 6",
//                 margin: "0 auto",
//               }}
//             >
//               <ImageSlider images={localImages} />
//             </div>
//             {/* <motion.div
//               className="w-full h-[600px]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.0 }}
//             >
//               <img
//                 src={selectedImage}
//                 alt="Produkt"
//                 className="object-cover w-full h-full rounded-lg"
//               />
//             </motion.div>
//             <div className="flex flex-wrap gap-2 mt-4">
//               {images.map((img) => (
//                 <img
//                   key={img}
//                   src={img}
//                   alt="Produkt miniatura"
//                   // width={139}
//                   className={`cursor-pointer rounded-lg w-[176px] h-[120px object-fill`}
//                   onClick={() => setSelectedImage(img)}
//                 />
//               ))}
//             </div> */}
//           </div>
//         </div>

//         {/* // ! Product Details */}
//         <div className="w-[422px]">
//           <div>
//             {" "}
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
//             nunc varius augue viverra ultrices nec a urna. Curabitur feugiat
//             felis nec nisi condimentum vestibulum. Quisque ut pretium erat.
//             Donec sodales cursus dolor, vitae varius justo mattis nec. Quisque
//             mollis justo libero, eu blandit ligula dignissim a. Sed ultrices,
//             nunc quis dapibus lacinia, dolor est imperdiet sem, quis interdum
//             tortor lorem sit amet sem. Vestibulum vestibulum orci nunc, at
//             bibendum erat iaculis sollicitudin. Cras id lectus mauris. In non
//             iaculis mi. Ut enim augue, cursus ac tristique a, dictum elementum
//             tortor. Nam laoreet mauris ac diam euismod bibendum ultrices eu
//             neque. Duis laoreet tellus nec nisl vehicula rhoncus. In ornare
//             mollis fermentum. In in erat quis massa faucibus gravida.
//             Pellentesque id arcu tempor, euismod purus eu, malesuada mauris. Sed
//             vestibulum enim ac semper rutrum. Sed fermentum arcu eu nisi
//             fringilla, eu pellentesque mauris cursus. Morbi vel sapien cursus,
//             varius magna ut, mattis risus. Curabitur viverra mollis semper. Ut
//             vehicula lectus eget molestie molestie. Morbi gravida, dolor vel
//             sollicitudin elementum, urna massa iaculis risus, ut vulputate diam
//             metus rhoncus risus. Maecenas mattis, justo a varius facilisis, ante
//             sapien suscipit nunc, at volutpat arcu enim ac metus. Vivamus in
//             ante sapien. Nulla fringilla at tellus tristique lobortis. Mauris
//             felis diam, pellentesque a eros id, varius auctor diam. Praesent
//             eget cursus neque, et feugiat tellus. Duis vitae ex nulla. Duis
//             ultrices non ante vel gravida. Praesent consectetur volutpat odio
//             non facilisis. Suspendisse sit amet euismod mi. Fusce lacinia
//             suscipit augue. Suspendisse tincidunt massa nec dolor pulvinar
//             cursus. Etiam pellentesque, nisl non molestie egestas, diam erat
//             laoreet elit, sit amet aliquam tellus felis sit amet augue. Ut
//             condimentum leo sed turpis hendrerit, at vulputate arcu mollis.
//             Maecenas vel semper enim, in placerat est. Praesent in sagittis ex,
//             vitae fermentum diam. Duis semper suscipit dui eu vulputate. Etiam
//             pretium massa vel leo egestas, vel luctus libero congue.
//             Pellentesque tincidunt enim sapien, et gravida augue rutrum at.
//             Morbi consequat vitae turpis viverra facilisis. Quisque accumsan
//             scelerisque est, eu pellentesque orci maximus et. Nam imperdiet
//           </div>
//         </div>
//       </div>
//     </div> */}
