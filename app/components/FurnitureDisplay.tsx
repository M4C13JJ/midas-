import { FurnitureDisplayItem } from "./FurnitureDisplayList";

type Props = {
  item: FurnitureDisplayItem;
};

const FurnitureDisplay = (props: Props) => {
  const { item } = props;

  // TODO
  //   const navigateToProduct = () => {
  // router.push(`/narozniki/${item.id}`);
  //   };

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
          <p className="text-gray-600 mt-2 ">wymiar: {item.dimensions}</p>
          <p className="text-gray-600">wypełnienie: {item.filling}</p>
          <div className="flex space-x-2 mt-3 justify-center">
            {item.colors.map((color, index) => (
              <span
                key={index}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            Zobacz więcej
          </button>
          <p className="text-black text-2xl font-bold mt-2">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDisplay;
