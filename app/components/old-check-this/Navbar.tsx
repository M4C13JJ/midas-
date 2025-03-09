import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
      <Link href="/" className="flex items-center gap-3">
            <Image src="/midas-logo.png" alt="Midas Logo" width={100} height={60} />
          </Link>
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full ">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/midas-logo.png" alt="Midas Logo" width={150} height={100} />
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-end space-x-8">
          <Link href="/narozniki" className="text-2xl font-semibold hover:text-gray-600 transition">Narożniki</Link>
          {/* <Link href="/" className="text-3xl font-semibold hover:text-gray-600 transition">Sofy</Link> */}
          <Link href="/kontakt" className="text-2xl font-semibold hover:text-gray-600 transition">Kontakt</Link>
        </div>
      </div>
    </div></nav>
  );
};

export default Navbar; 