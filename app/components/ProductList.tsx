import Link from "next/link";
import Image from "next/image";
import { CORNERS_COLLECTION } from "../helpers/constants";
import FurnitureDisplay from "./FurnitureDisplay";

const ProductList = () => {
  const topOfferNames = ["Polo", "Coco", "Czaki", "Moly"];
  const selected = CORNERS_COLLECTION.filter((item) =>
    topOfferNames.includes(item.name)
  );
  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-12 mb-24">
      {selected.map((item) => (
        <FurnitureDisplay key={item.id} item={item} />
      ))}
    </div>
    // <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap ">
    //   <div className=" w-full flex flex-col gap-4 sm:w-[45%] ">
    //     {/* <Link href="/"> */}
    //     <div className="relative w-full aspect-[1024/623] overflow-hidden">
    //       <Image
    //         src="/corner/coco/coco_1.jpg"
    //         alt="Narożnik Coco"
    //         fill
    //         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    //         unoptimized
    //         className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
    //       />

    //       <Image
    //         src="/corner/coco/coco_2.jpg"
    //         alt="Narożnik Coco"
    //         fill
    //         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    //         unoptimized
    //         className="absolute object-cover rounded-md"
    //       />
    //     </div>
    //     {/* </Link> */}
    //     <div className="flex justify-between ">
    //       <span className="font-bold">Narożnik Coco</span>
    //       <span className="font-semibold">5600 zł</span>
    //     </div>
    //     <div className="text-sm text-gray-600 text-xl md:text-2x1">
    //       {" "}
    //       <p>wymiar : 310cm x 210cm</p>
    //       <p>
    //         dostępne wypełnienia : sprężynay faliste, bonell , pianka
    //         wysokoelastyczna HR
    //       </p>
    //     </div>
    //     <button className="self-center rounded-2xl ring-0 ring-green-600 bg-green-600 text-white w-max py-2 px-4 text-base font-semibold hover:bg-white hover:text-green-600 hover:ring-1 ">
    //       Zobacz produkt
    //     </button>
    //   </div>
    //   <div className=" w-full flex flex-col gap-4 sm:w-[45%] ">
    //     {/* <Link href="/"> */}
    //     <div className="relative w-full aspect-[1024/623] overflow-hidden">
    //       <Image
    //         src="/corner/coco/coco_1.jpg"
    //         alt="Narożnik Coco"
    //         fill
    //         sizes="25vw"
    //         unoptimized
    //         className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
    //       />

    //       <Image
    //         src="/corner/coco/coco_2.jpg"
    //         alt="Narożnik Coco"
    //         fill
    //         sizes="25vw"
    //         unoptimized
    //         className="absolute object-cover rounded-md"
    //       />
    //     </div>
    //     {/* </Link> */}
    //     <div className="flex justify-between ">
    //       <span className="font-bold">Narożnik Valencia</span>
    //       <span className="font-semibold">4500 zł</span>
    //     </div>
    //     <div className="text-sm text-gray-600 text-xl md:text-2x1">
    //       {" "}
    //       <p>wymiar : 260cm x 180cm</p>
    //       <p>
    //         dostępne wypełnienia : sprężynay faliste, bonell , pianka
    //         wysokoelastyczna HR
    //       </p>
    //     </div>
    //     <button className="self-center rounded-2xl ring-0 ring-green-600 bg-green-600 text-white w-max py-2 px-4 text-base font-semibold hover:bg-white hover:text-green-600 hover:ring-1 ">
    //       Zobacz produkt
    //     </button>
    //   </div>
    //   <div className=" w-full flex flex-col gap-4 sm:w-[45%]">
    //     {/* <Link href="/"> */}
    //     <div className="relative w-full aspect-[1024/623] overflow-hidden">
    //       <Image
    //         src="/assets/corners/coco/coco-01.jpg"
    //         alt="Narożnik Coco"
    //         fill
    //         sizes="25vw"
    //         unoptimized
    //         className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
    //       />

    //       <Image
    //         src="/assets/corners/coco/coco-02.jpg"
    //         alt="Narożnik Coco 2"
    //         fill
    //         sizes="25vw"
    //         unoptimized
    //         className="absolute object-cover rounded-md"
    //       />
    //     </div>
    //     {/* </Link> */}
    //     <div className="flex justify-between ">
    //       <span className="font-bold">Narożnik Coco</span>
    //       <span className="font-semibold">5600 zł</span>
    //     </div>
    //     <div className="text-sm text-gray-600 text-xl md:text-2x1">
    //       {" "}
    //       <p>wymiar : 310cm x 210cm</p>
    //       <p>
    //         dostępne wypełnienia : sprężynay faliste, bonell , pianka
    //         wysokoelastyczna HR
    //       </p>
    //     </div>
    //     <button className="self-center rounded-2xl ring-0 ring-green-600 bg-green-600 text-white w-max py-2 px-4 text-base font-semibold hover:bg-white hover:text-green-600 hover:ring-1 ">
    //       Zobacz produkt
    //     </button>
    //   </div>
    //   <div className=" w-full flex flex-col gap-4 sm:w-[45%] ">
    //     {/* <Link href="/"> */}
    //     <div className="relative w-full aspect-[1024/623] overflow-hidden">
    //       <Image
    //         src="/corner/coco/coco_1.jpg"
    //         alt="Narożnik Coco"
    //         fill
    //         sizes="25vw"
    //         unoptimized
    //         className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
    //       />

    //       <Image
    //         src="/corner/coco/coco_2.jpg"
    //         alt="Narożnik Coco"
    //         fill
    //         sizes="25vw"
    //         unoptimized
    //         className="absolute object-cover rounded-md"
    //       />
    //     </div>
    //     {/* </Link> */}
    //     <div className="flex justify-between ">
    //       <span className="font-bold">Narożnik Coco</span>
    //       <span className="font-semibold">5600 zł</span>
    //     </div>
    //     <div className="text-sm text-gray-600 text-xl md:text-2x1">
    //       {" "}
    //       <p>wymiar : 310cm x 210cm</p>
    //       <p>
    //         dostępne wypełnienia : sprężynay faliste, bonell , pianka
    //         wysokoelastyczna HR
    //       </p>
    //     </div>
    //     <button className="self-center rounded-2xl ring-0 ring-green-600 bg-green-600 text-white w-max py-2 px-4 text-base font-semibold hover:bg-white hover:text-green-600 hover:ring-1 ">
    //       Zobacz produkt
    //     </button>
    //   </div>
    // </div>
  );
};
export default ProductList;
