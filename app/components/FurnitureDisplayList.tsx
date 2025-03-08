import FurnitureDisplay from "./FurnitureDisplay";

export type FurnitureDisplayItem = {
  id: number;
  name: string;
  description: string;
  dimensions: string;
  filling: string;
  price: string;
  materials: string[];
  image: string;
};

const FurnitureDisplayList = () => {
  const furnitureItems: FurnitureDisplayItem[] = [
    {
      id: 1,
      name: "Narożnik Polo",
      description:
        "Narożnik Polo z funkcją spania i dwoma pojemnikami na pościel",
      dimensions: "300cm x 220cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "5399.99 zł",
      materials: [
        "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
      ],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
    {
      id: 2,
      name: "Narożnik Coco",
      description: "Narożnik Coco z funkcją spania i pojemnikiem na pościel",
      dimensions: "310cm x 210cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "5599.99 zł",
      materials: [
        "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
      ],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
    {
      id: 3,
      name: "Narożnik Moly",
      description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
      dimensions: "260cm x 180cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "4699.99 zł",
      materials: [
        "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
      ],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
    {
      id: 4,
      name: "Narożnik Coco",
      description: "Narożnik Coco z funkcją spania i pojemnikiem na pościel",
      dimensions: "310cm x 210cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "5599.99 zł",
      materials: [
        "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
      ],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
    {
      id: 5,
      name: "Narożnik Moly",
      description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
      dimensions: "260cm x 180cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "4699.99 zł",
      materials: [
        "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
        "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
      ],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
  ];

  return (
    <div className="mb-24 flex justify-center">
      <div className="w-full max-w-[1248px] flex flex-wrap gap-12">
        {furnitureItems.map((item) => (
          <FurnitureDisplay key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FurnitureDisplayList;
