"use client";

import { useState } from "react";

const Naroznik = () => {
  const [quantity, setQuantity] = useState(1);
  const maxStock = 4;

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* // !Product Images */}
      <div>
        <img
          src="https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg"
          alt="Product"
          className="w-full rounded-lg shadow-md"
        />
        <div className="flex mt-4 gap-2">
          <img
            src="https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg"
            alt="Thumbnail"
            className="w-20 h-20 rounded-md cursor-pointer"
          />
          <img
            src="https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg"
            alt="Thumbnail"
            className="w-20 h-20 rounded-md cursor-pointer"
          />
          <img
            src="https://www.salonmeblowymidas.pl/img/meble_salon_nowe/polo-1.jpg"
            alt="Thumbnail"
            className="w-20 h-20 rounded-md cursor-pointer"
          />
        </div>
      </div>

      {/* // ! Product Details */}
      <div>
        <h1 className="text-2xl font-bold">Product Name</h1>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-4">
          <span className="text-gray-400 line-through">$59</span>
          <span className="text-red-500 text-xl font-bold ml-2">$49</span>
        </div>

        {/* // ! Color Options */}
        <div className="mt-4">
          <h2 className="font-semibold">Choose a color</h2>
          <div className="flex gap-2 mt-2">
            <button className="w-8 h-8 rounded-full bg-red-500"></button>
            <button className="w-8 h-8 rounded-full bg-blue-500"></button>
            <button className="w-8 h-8 rounded-full bg-green-500"></button>
          </div>
        </div>

        {/* // ! Size Options */}
        <div className="mt-4">
          <h2 className="font-semibold">Choose a size</h2>
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-2 border rounded-md text-gray-700">
              Small
            </button>
            <button className="px-4 py-2 border rounded-md text-white bg-pink-500">
              Medium
            </button>
            <button
              className="px-4 py-2 border rounded-md text-gray-400 bg-gray-100"
              disabled
            >
              Large
            </button>
          </div>
        </div>

        {/* // ! Quantity Selector */}
        <div className="mt-4">
          <h2 className="font-semibold">Choose a Quantity</h2>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1 border rounded-md"
            >
              -
            </button>
            <span className="px-4 py-2 border rounded-md">{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prev) => Math.min(maxStock, prev + 1))
              }
              className="px-3 py-1 border rounded-md"
            >
              +
            </button>
          </div>
          <p className="text-sm text-red-500 mt-1">
            Only {maxStock} items left! Don’t miss it
          </p>
        </div>

        {/* // ! Add to Cart Button */}
        <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Naroznik;
