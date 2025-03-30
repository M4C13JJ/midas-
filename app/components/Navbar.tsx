"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white h-20 flex items-center px-8">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/midas-logo.png"
              alt="Midas Logo"
              width={100}
              height={60}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link
              href="/narozniki"
              className="text-xl font-semibold hover:text-gray-400 transition"
            >
              Narożniki
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-xl font-semibold hover:text-gray-400 transition"
            >
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Dropdown Mobile Menu */}

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black text-white z-50 text-center">
          <div className="flex flex-col items-center py-4  border-white">
            {/* Linki */}
            <Link
              href="/narozniki"
              className="py-3 border-t w-full text-xl font-semibold hover:text-gray-400 transition  max-w-xs"
              onClick={() => setIsOpen(false)}
            >
              Narożnk <span className="ml-1"></span>
            </Link>{" "}
            <Link
              href="/kontakt"
              className="py-3 border-t w-full text-xl font-semibold hover:text-gray-400 transition max-w-xs"
              onClick={() => setIsOpen(false)}
            >
              Kontakt <span className="ml-1"></span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

//   return (
//     <nav className="bg-black text-white p-4">
//       <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
//         {/* MOBILE */}
//         <div className="h-full flex items-center justify-between md:hidden">
//           <Link href="/" className="flex items-center gap-3">
//             <Image
//               src="/midas-logo.png"
//               alt="Midas Logo"
//               width={100}
//               height={60}
//             />
//           </Link>
//           <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
//         </div>
//         {/* DROPDOWN MENU MOBILE */}
//         {isOpen && (
//           <div className="flex md:hidden mt-4 px-4 space-y-4 bg-red-800 h-[800] w-max">
//             <Link
//               href="/narozniki"
//               className="block text-xl text-white font-semibold hover:text-gray-400 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Narożniki
//             </Link>
//             <Link
//               href="/kontakt"
//               className="block text-xl font-semibold text-white hover:text-gray-400 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Kontakt
//             </Link>
//           </div>
//         )}

//         {/* BIGGER SCREENS */}
//         <div className="hidden md:flex items-center justify-between gap-8 h-full ">
//           {/* LEFT */}
//           <div className="w-1/3 xl:w-1/2 ">
//             <Link href="/">
//               <Image
//                 src="/midas-logo.png"
//                 alt="Midas Logo"
//                 width={150}
//                 height={100}
//               />
//             </Link>
//           </div>
//           {/* RIGHT */}
//           <div className="w-2/3 xl:w-1/2 flex items-center justify-end space-x-8">
//             <Link
//               href="/narozniki"
//               className="text-2xl font-semibold hover:text-gray-600 transition"
//             >
//               Narożniki
//             </Link>
//             {/* <Link href="/" className="text-3xl font-semibold hover:text-gray-600 transition">Sofy</Link> */}
//             <Link
//               href="/kontakt"
//               className="text-2xl font-semibold hover:text-gray-600 transition"
//             >
//               Kontakt
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
