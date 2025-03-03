import FurnitureDisplay from "./FurnitureDisplay";

export type FurnitureDisplayItem = {
  id: number;
  name: string;
  description: string;
  dimensions: string;
  filling: string;
  price: string;
  colors: string[];
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
      colors: ["#8B6F6B", "#A58B89", "#9C7A77"],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
    {
      id: 2,
      name: "Narożnik Coco",
      description: "Narożnik Coco z funkcją spania i pojemnikiem na pościel",
      dimensions: "310cm x 210cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "5599.99 zł",
      colors: ["#C4A484", "#E8DED1", "#8CA4B2"],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
    {
      id: 3,
      name: "Narożnik Moly",
      description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
      dimensions: "260cm x 180cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "4699.99 zł",
      colors: ["#FFFFFF", "#B80F0A", "#2D2D2D"],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
    {
      id: 4,
      name: "Narożnik Coco",
      description: "Narożnik Coco z funkcją spania i pojemnikiem na pościel",
      dimensions: "310cm x 210cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "5599.99 zł",
      colors: ["#C4A484", "#E8DED1", "#8CA4B2"],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
    {
      id: 5,
      name: "Narożnik Moly",
      description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
      dimensions: "260cm x 180cm",
      filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
      price: "4699.99 zł",
      colors: ["#FFFFFF", "#B80F0A", "#2D2D2D"],
      image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
    },
  ];

  return (
    <div className="mb-24 flex justify-center">
      <div className="w-[1248px] flex flex-wrap gap-12">
        {furnitureItems.map((item) => (
          <FurnitureDisplay key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FurnitureDisplayList;
