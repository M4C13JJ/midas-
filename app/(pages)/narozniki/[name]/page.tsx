"use client";
import FurnitureMaterialDisplayList from "@/app/components/FurnitureMaterialDisplayList";
import FurnitureMaterialSelect from "@/app/components/FurnitureMaterialSelect";
import { COLLECTION_ITEMS, CORNERS_COLLECTION } from "@/app/helpers/constants";
import { useEffect, useState } from "react";
import { ImageSlider } from "@/app/components/ImageSlider";
import { notFound, useParams, usePathname } from "next/navigation";

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
  const images = [
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-3.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",
    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",

    "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",
  ];
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

  const IMAGES = [
    {
      uri: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
      alt: "Car One",
    },
    {
      uri: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",
      alt: "Car Two",
    },
    {
      uri: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
      alt: "Car Three",
    },
    {
      uri: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-2.jpg",
      alt: "Car Four",
    },
    {
      uri: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
      alt: "Car Five",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-184px)] w-full flex justify-center bg-white">
      <div className="h-full w-full max-w-[1248px] py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64mt-2 mb-12 flex gap-12">
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
              <ImageSlider images={localImages} />
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
        <div className="max-w-[422px]">
          <p className="text-2xl font-bold">
            Narożnik Coco z pojemnikiem na pościel i funkcja spania
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {/* // ! ============== */}
            <FurnitureMaterialSelect
              text="Funkcja spania:"
              selectedItem={sleepFunction}
              tooltip="Taniej o 300zł bez funkcji spania"
              items={[
                { value: "yes", label: "Tak" },
                { value: "no", label: "Nie" },
              ]}
              setSelectedItem={setSleepFunction}
            />
            {/* // ! ============== */}
            <FurnitureMaterialSelect
              text="Wybierz szerokość:"
              selectedItem={width}
              tooltip="Zwiększenie wymiaru związane jest z dodatkowymi kosztami(10cm - 100zł - 150 zł w zależności od modelu) zachęcamy do kontaktu ze sprzedawcą przy dużych kosztownych modyfikacjach oferujemy atrakcyjne rabaty :)"
              items={[
                { value: "350", label: "350cm" },
                { value: "340", label: "340cm" },
                { value: "330", label: "330cm" },
                { value: "320", label: "320cm" },
                { value: "310", label: "310cm" },
                { value: "300", label: "300cm" },
              ]}
              setSelectedItem={setWidth}
            />
            {/* // ! ============== */}
            <FurnitureMaterialSelect
              text="Wybierz długość:"
              selectedItem={length}
              items={[
                { value: "190", label: "190cm" },
                { value: "180", label: "180cm" },
                { value: "170", label: "170cm" },
                { value: "160", label: "160cm" },
              ]}
              setSelectedItem={setLength}
            />
            {/* // ! ============== */}
            <FurnitureMaterialSelect
              text="Wybierz kolekcję:"
              selectedItem={collection}
              setSelectedItem={setCollection}
              items={[
                { value: "poso", label: "Poso" },
                { value: "salvador", label: "Salvador" },
              ]}
            />
            <FurnitureMaterialDisplayList
              className="mt-1"
              bottomSelectedItemText="Wybrano materiał:"
              selectedGroupType={collection}
              selectedItem={material}
              setSelectedItem={setMaterial}
              items={COLLECTION_ITEMS}
            />
            {/* // ! ============== */}
            <div className="text-sm gap-1">
              <p>Wysyłamy próbki materiału na adres domowy, napisz do nas na</p>
              <a
                className="font-bold text-blue-500"
                href="mailto:salonmeblowymidas@gmail.com"
              >
                salonmeblowymidas@gmail.com
              </a>
            </div>
            {/* // ! ============== */}
            <FurnitureMaterialSelect
              text="Wybierz nóżki:"
              selectedItem={legHeight}
              setSelectedItem={setLegHeight}
              items={[
                { value: "5cm", label: "5cm" },
                { value: "10cm", label: "10cm" },
              ]}
            />
            <FurnitureMaterialDisplayList
              className="mt-1"
              bottomSelectedItemText="Wybrano nóżki:"
              selectedGroupType={collection} // TODO: prepare and change for leg collection
              selectedItem={legMaterial}
              setSelectedItem={setLegMaterial}
              items={COLLECTION_ITEMS}
            />
            {/* // ! ============== */}
            <div className="flex flex-col gap-1">
              <p>Wybierz bok:</p>
              <FurnitureMaterialDisplayList
                className="mt-1"
                bottomSelectedItemText="Wybrano bok:"
                selectedGroupType={collection} // TODO: prepare and change for side collection
                selectedItem={side}
                setSelectedItem={setSide}
                items={COLLECTION_ITEMS}
              />
            </div>
            {/* // ! ============== */}
            <FurnitureMaterialSelect
              text="Układ narożnika:"
              selectedItem={cornerLayout}
              setSelectedItem={setCornerLayout}
              items={[
                { value: "leftSide", label: "Lewostronny" },
                { value: "rightSide", label: "Prawostronny" },
              ]}
            />
            {/* // ! ============== */}
            <FurnitureMaterialSelect
              text="Wypełnienie:"
              tooltip="Dopłata za HR"
              selectedItem={filling}
              setSelectedItem={setFilling}
              // TODO: TE TEKSTY TUTAJ SĄ ZA DŁUGIE I OGÓLNIE IMO DO ZMIANY, BO JAK TO CZYTAM TO WYGLĄDA AMATORSKO. USTAWIAM NA SKRÓCONE
              items={[
                { value: "HR", label: "Sprężysta falista, pianka HR" },
                {
                  value: "T35",
                  label: "Sprężysta falista, pianka T35",
                },
              ]}
            />
            {/* // ! ============== */}
            <FurnitureMaterialSelect
              text="Mata kokosowa:"
              tooltip="Dopłata za mate kokosową"
              selectedItem={coconutMat}
              setSelectedItem={setCoconutMat}
              items={[
                { value: "yes", label: "Tak" },
                { value: "no", label: "Nie" },
              ]}
            />
            {/* // ! ============== */}
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-3xl font-bold">5599.99 zł</p>
              <p className="text-sm text-gray-500">
                Podana cena nie jest cena zobowiązującą, jest to cena
                standardowa mebla o specyfikacji podanej poniżej w tabeli.
                Modyfikacje mebla wiążą się ze zmianą ceny
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-bold">Chcesz zamówić ?</p>
              {/* // TODO: DOROBIĆ TO POTEM */}
              TODO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naroznik;
