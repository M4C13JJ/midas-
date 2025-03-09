import { FurnitureDisplayItem } from "./FurnitureDisplayList";
import FurnitureMaterial from "./FurnitureMaterial";
import Link from "next/link";

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
    <div className="w-[520px] bg-white shadow-lg max-w-sm rounded-md">
      {/* // TODO: replace later with next/image */}
      <img
        src={item.image}
        alt={item.name}
        className="h-[300px] rounded-t-md w-full object-cover"
      />
      <div className="p-4 flex flex-col gap-4 items-center justify-between">
        <div className=" text-center">
          <p className="mt-4 text-black text-xl text-center">
            {item.description}
          </p>
          <p className="text-gray-600 mt-2">wymiar: {item.dimensions}</p>
          <p className="text-gray-600">wypełnienie: {item.filling}</p>
          <div className="relative flex space-x-2 mt-3 justify-center">
            {item.materials.map((materialImage, index) => (
              <FurnitureMaterial key={index} image={materialImage} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Link
            href={`/narozniki/${item.id}`}
            className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
          >
            Zobacz więcej
          </Link>
          <p className="text-black text-2xl font-bold mt-2">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDisplay;
