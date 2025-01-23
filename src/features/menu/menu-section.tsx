"use client"

import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { GiChiliPepper, GiCoffeeCup } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import Image from "next/image";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const categories = [
    { id: "all", name: "All" },
    { id: "appetizers", name: "Appetizers" },
    { id: "main", name: "Main Course" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
    { id: "specials", name: "Special Items" }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Crispy Calamari",
      category: "appetizers",
      price: 12.99,
      description: "Fresh squid rings lightly battered and fried until golden",
      image: "/images/menuone.png",
      isVegetarian: false,
      isSpicy: true,
      isPopular: true
    },
    {
      id: 2,
      name: "Grilled Salmon",
      category: "main",
      price: 24.99,
      description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
      image: "/images/menutwo.png",
      isVegetarian: false,
      isSpicy: false,
      isPopular: true
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      category: "desserts",
      price: 8.99,
      description: "Warm chocolate cake with a molten center",
      image: "/images/menuthree.png",
      isVegetarian: true,
      isSpicy: false,
      isPopular: true
    },
    {
      id: 4,
      name: "Artisan Coffee",
      category: "beverages",
      price: 4.99,
      description: "Premium blend coffee served with your choice of milk",
      image: "/images/cake.jpeg",
      isVegetarian: true,
      isSpicy: false,
      isPopular: false
    }
  ];

  useEffect(() => {
    const filtered = menuItems.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredItems(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <IoRestaurantOutline className="text-3xl text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-800">Gourmet Haven</h1>
            </div>
            <div className="relative flex-1 mx-8">
              <input
                type="text"
                placeholder="Search menu items..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-4 top-3 text-gray-400" />
            </div>
            <button className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
              <FiShoppingCart className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
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

      {/* Menu Grid */}
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
    </div>
  );
};

export default MenuSection;
