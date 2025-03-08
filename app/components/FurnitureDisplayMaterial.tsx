type Props = {
  image: string; // TODO: shoulde be a file and file name for alt
};

const FurnitureDisplayMaterial = (props: Props) => {
  const { image } = props;

  return (
    <div className="w-[50px] h-[50px] bg-white rounded-full border shadow-lg group overflow-hidden">
      <img
        src={image}
        alt={image}
        className="h-full w-full object-cover rounded-full"
      />
      <div className="absolute top-[-160px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-8 border-white shadow-md bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-10">
        <img
          src={image}
          alt={image}
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default FurnitureDisplayMaterial;
