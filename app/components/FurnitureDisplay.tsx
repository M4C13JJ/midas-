import { FurnitureDisplayItem } from "./FurnitureDisplayList";
import FurnitureMaterial from "./FurnitureMaterial";
import Link from "next/link";
import Image from "next/image";

type Props = {
  item: FurnitureDisplayItem;
};

const FurnitureDisplay = (props: Props) => {
  const { item } = props;

  // TODO: replace with next/link
  // const navigateToProduct = (id: number) => {
  //   router.push(`/narozniki/${id}`);
  // };

  return (
    <div className="w-[320px] sm:w-[400px] md:w-[520px]  bg-white shadow-lg max-w-sm rounded-md">
      <div className="relative h-[250px] w-full  aspect-[1024/623]">
        <Image
          src={item.images[0].uri}
          alt={`Narożnik ${item.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
          className="absolute rounded-md z-10"
        />
      </div>
      <div className="p-4 flex flex-col gap-4 items-center justify-between">
        <div className="text-center">
          <p className="mt-4 text-black text-xl text-center">{item.name}</p>
          <p className=" text-gray-600 text-m text-center">
            {item.description}
          </p>
          <p className="text-gray-600 mt-2">wymiar: {item.dimensions}</p>
          <p className="mt-2 text-gray-600">Użyty materiał</p>
          <div className="relative flex space-x-2 mt-3 justify-center">
            {item.materials.map((materialImage, index) => (
              <FurnitureMaterial key={index} image={materialImage} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Link
            href={`/narozniki/${item.name}`}
            className="self-center rounded-2xl ring-0 ring-green-600 bg-green-600 text-white w-max py-2 px-4 text-base font-semibold hover:bg-white hover:text-green-600 hover:ring-1 "
          >
            Zobacz więcej
          </Link>
          <p className="text-black text-2xl font-bold mt-2 mb-2">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDisplay;
