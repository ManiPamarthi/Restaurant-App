import React from "react";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { GiChiliPepper, GiCoffeeCup } from "react-icons/gi";

const MenuGrid = ({ filteredItems, categories, activeCategory, setActiveCategory }) => {
  return (
    <>
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative pb-[56.25%]">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 object-cover"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <span className="text-lg font-semibold text-orange-500">${item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {item.isVegetarian && (
                      <span className="text-green-500" title="Vegetarian">
                        <FaLeaf />
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="text-red-500" title="Spicy">
                        <GiChiliPepper />
                      </span>
                    )}
                    {item.category === "beverages" && (
                      <span className="text-brown-500" title="Beverage">
                        <GiCoffeeCup />
                      </span>
                    )}
                  </div>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-sm">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default MenuGrid;