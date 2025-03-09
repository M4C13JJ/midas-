import { cn } from "@/lib/utils";
import { MaterialGroup } from "../helpers/types";
import FurnitureMaterial from "./FurnitureMaterial";

type Props = {
  selectedGroupType: string;
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  bottomSelectedItemText?: string;
  items: MaterialGroup[];
  className?: string;
};

const FurnitureMaterialDisplayList = (props: Props) => {
  const {
    selectedGroupType,
    selectedItem,
    setSelectedItem,
    bottomSelectedItemText,
    items,
    className,
  } = props;

  const selectedGroup = items.find((item) => item.value === selectedGroupType);

  if (!selectedGroup) return null;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className={cn("flex flex-wrap gap-2", className)}>
        {selectedGroup.items.map((item) => (
          <button
            key={item.value}
            className="border-2 border-red-800 rounded-full"
            onClick={() => setSelectedItem(item.value)}
          >
            <FurnitureMaterial image={item.image} />
          </button>
        ))}
      </div>
      {/* <p>{`Wybrano materiał: ${(
        <p className="font-bold">{selectedItem}</p>
      )}`}</p> */}
      {bottomSelectedItemText && (
        <div className="flex items-center gap-1">
          <p>{bottomSelectedItemText}</p>
          <p className="font-bold">{selectedItem}</p>
        </div>
      )}
    </div>
  );
};

export default FurnitureMaterialDisplayList;
