import FurnitureDisplayList from "@/app/components/FurnitureDisplayList";

const Naroznik = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="pt-10 pb-6 flex flex-col items-center justify-center">
        <p className="text-[70px] text-black">Narożniki</p>
      </div>
      <FurnitureDisplayList />
    </div>
  );
};

export default Naroznik;
