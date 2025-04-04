export type MaterialGroup = {
  value: string;
  items: {
    image: string;
    value: string;
    label: string;
  }[];
};
export type FurnitureDisplayItem = {
  id: number;
  name: string;
  description: string;
  dimensions: string;
  filling: string;
  price: string;
  materials: string[];
  images: { uri: string; alt: string }[];
};
export type Props = {
  params: { name: string };
};
