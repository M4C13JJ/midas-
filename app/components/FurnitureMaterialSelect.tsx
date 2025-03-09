import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { InfoCircle } from "@mynaui/icons-react";
import { ReactNode } from "react";

type SelectItem = {
  value: string;
  label: string;
};

type Props = {
  text: string;
  selectedItem: string;
  items: SelectItem[];
  setSelectedItem: (item: string) => void;
  tooltip?: string;
  children?: ReactNode;
  className?: string;
};

const FurnitureMaterialSelect = (props: Props) => {
  const {
    text,
    selectedItem,
    items,
    setSelectedItem,
    tooltip,
    children,
    className,
  } = props;

  return (
    <div className={cn("flex", className)}>
      <div className="w-full flex items-center gap-4">
        <p className="min-w-[130px] text-nowrap">{text}</p>
        {!!items && (
          <Select value={selectedItem} onValueChange={setSelectedItem}>
            <SelectTrigger className="w-full min-w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      {tooltip && (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <InfoCircle className="h-5 w-5 mx-2" />
            </TooltipTrigger>
            <TooltipContent className="max-w-[320px] bg-white shadow-md border border-gray-200">
              <p className="text-sm text-green-700">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {children}
    </div>
  );
};

export default FurnitureMaterialSelect;
