import FurnitureDisplay from "./FurnitureDisplay";
import {CORNERS_COLLECTION } from "../helpers/constants"
export type FurnitureDisplayItem = {
  id: number;
  name: string;
  description: string;
  dimensions: string;
  filling: string;
  price: string;
  materials: string[];
  images: {uri:string,alt:string }[];
};

const FurnitureDisplayList = () => {
  
  //   {
  //     id: 1,
  //     name: "Polo",
  //     description:
  //       "Narożnik Polo z funkcją spania i dwoma pojemnikami na pościel",
  //     dimensions: "300cm x 220cm",
  //     filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //     price: "5399.99 zł",
  //     materials: [
  //       "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //     ],
  //     image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Coco",
  //     description: "Narożnik Coco z funkcją spania i pojemnikiem na pościel",
  //     dimensions: "310cm x 210cm",
  //     filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //     price: "5599.99 zł",
  //     materials: [
  //       "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //     ],
  //     image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Boss II",
  //     description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //     dimensions: "260cm x 180cm",
  //     filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //     price: "4699.99 zł",
  //     materials: [
  //       "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //     ],
  //     image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Luna",
  //     description: "Narożnik Coco z funkcją spania i pojemnikiem na pościel",
  //     dimensions: "310cm x 210cm",
  //     filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //     price: "5599.99 zł",
  //     materials: [
  //       "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //     ],
  //     image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Milano",
  //     description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //     dimensions: "260cm x 180cm",
  //     filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //     price: "4699.99 zł",
  //     materials: [
  //       "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //     ],
  //     image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "Milano",
  //     description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //     dimensions: "260cm x 180cm",
  //     filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //     price: "4699.99 zł",
  //     materials: [
  //       "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //     ],
  //     image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Valencia",
  //     description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //     dimensions: "260cm x 180cm",
  //     filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //     price: "4699.99 zł",
  //     materials: [
  //       "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //     ],
  //     image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "Czaki",
  //     description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //     dimensions: "260cm x 180cm",
  //     filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //     price: "4699.99 zł",
  //     materials: [
  //       "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //       "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //     ],
  //     image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  //   },
  // {
  //   id: 9,
  //   name: "Laura",
  //   description:
  //     "Narożnik Polo z funkcją spania i dwoma pojemnikami na pościel",
  //   dimensions: "300cm x 220cm",
  //   filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //   price: "5399.99 zł",
  //   materials: [
  //     "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //   ],
  //   image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Denver",
  //   description: "Narożnik Coco z funkcją spania i pojemnikiem na pościel",
  //   dimensions: "310cm x 210cm",
  //   filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //   price: "5599.99 zł",
  //   materials: [
  //     "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //   ],
  //   image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  // },
  // {
  //   id: 11,
  //   name: "Boss II z gniazdkiem USB",
  //   description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //   dimensions: "260cm x 180cm",
  //   filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //   price: "4699.99 zł",
  //   materials: [
  //     "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //   ],
  //   image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  // },
  // {
  //   id: 4,
  //   name: "Coco III",
  //   description: "Narożnik Coco z funkcją spania i pojemnikiem na pościel",
  //   dimensions: "310cm x 210cm",
  //   filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //   price: "5599.99 zł",
  //   materials: [
  //     "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //   ],
  //   image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  // },
  // {
  //   id: 5,
  //   name: "Coco II",
  //   description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //   dimensions: "260cm x 180cm",
  //   filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //   price: "4699.99 zł",
  //   materials: [
  //     "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //   ],
  //   image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Polo U",
  //   description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //   dimensions: "260cm x 180cm",
  //   filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //   price: "4699.99 zł",
  //   materials: [
  //     "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //   ],
  //   image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  // },
  // {
  //   id: 7,
  //   name: "Valencia pufy",
  //   description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //   dimensions: "260cm x 180cm",
  //   filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //   price: "4699.99 zł",
  //   materials: [
  //     "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //   ],
  //   image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  // },
  // {
  //   id: 8,
  //   name: "Czaki",
  //   description: "Narożnik Moly z funkcją spania i pojemnikiem na pościel",
  //   dimensions: "260cm x 180cm",
  //   filling: "sprężyny faliste, bonell, pianka wysokoelastyczna HR",
  //   price: "4699.99 zł",
  //   materials: [
  //     "https://www.salonmeblowymidas.pl/img/poso/1.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/11.jpg",
  //     "https://www.salonmeblowymidas.pl/img/poso/14.jpg",
  //   ],
  //   image: "https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg",
  // },
  // ];

  return (
    <div className="mb-24 flex justify-center">
      <div className="w-full max-w-[1248px] flex justify-center flex-wrap gap-12">
        {CORNERS_COLLECTION.map((item) => (
          <FurnitureDisplay key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FurnitureDisplayList;
