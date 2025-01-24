"use client";

import React, { useState } from "react";
import { FaSearch, FaLeaf, FaBreadSlice } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./hero-section";
import DishModal from "./dish-modal"; // Importing DishModal Component

// Sample menu data
const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Bruschetta",
      description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      dietary: { vegetarian: true, glutenFree: false },
    },
    {
      id: 2,
      name: "Calamari",
      description: "Crispy fried squid rings with marinara sauce",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
      dietary: { vegetarian: false, glutenFree: true },
    },
  ],
  mainCourses: [
    {
      id: 3,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with seasonal vegetables",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
      dietary: { vegetarian: false, glutenFree: true },
    },
    {
      id: 4,
      name: "Mushroom Risotto",
      description: "Creamy Arborio rice with wild mushrooms",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
      dietary: { vegetarian: true, glutenFree: true },
    },
  ],
  desserts: [
    {
      id: 5,
      name: "Tiramisu",
      description: "Classic Italian coffee-flavored dessert",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
      dietary: { vegetarian: true, glutenFree: false },
    },
  ],
  beverages: [
    {
      id: 6,
      name: "Craft Cocktail",
      description: "Signature house-made cocktail",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
      dietary: { vegetarian: true, glutenFree: true },
    },
  ],
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState(null);
  const [filterDietary, setFilterDietary] = useState({
    vegetarian: false,
    glutenFree: false,
  });

  const categories = [
    { id: "appetizers", name: "Appetizers" },
    { id: "mainCourses", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
  ];

  const filteredItems = menuData[activeCategory]?.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary =
      (!filterDietary.vegetarian || item.dietary.vegetarian) &&
      (!filterDietary.glutenFree || item.dietary.glutenFree);
    return matchesSearch && matchesDietary;
  });

  return (
    <>
      <HeroSection />
      <div className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8 p-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Menu</h1>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-64 p-2">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/*<div className="flex gap-4">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    filterDietary.vegetarian
                      ? "bg-green-500 text-white"
                      : "bg-white border"
                  }`}
                  onClick={() =>
                    setFilterDietary((prev) => ({
                      ...prev,
                      vegetarian: !prev.vegetarian,
                    }))
                  }
                >
                  <FaLeaf /> Vegetarian
                </button>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    filterDietary.glutenFree
                      ? "bg-amber-500 text-white"
                      : "bg-white border"
                  }`}
                  onClick={() =>
                    setFilterDietary((prev) => ({
                      ...prev,
                      glutenFree: !prev.glutenFree,
                    }))
                  }
                >
                  <FaBreadSlice /> Gluten Free
                </button>
              </div>*/}
            </div>
          </div>

          {/*<nav className="mb-8">
            <ul className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={`px-6 py-2 rounded-full transition-colors ${
                      activeCategory === category.id
                        ? "bg-blue-500 text-gray-100"
                        : "bg-white border hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>*/}

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems?.map((item) => (
              <motion.div
                layout
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedDish(item)}
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1495195134817-aeb325a55b65";
                    }}
                  />
                  <div className="absolute top-2 right-2 flex gap-4">
                    {item.dietary.vegetarian && (
                      <span className="bg-green-500 text-white p-1 rounded-full">
                        <FaLeaf />
                      </span>
                    )}
                    {item.dietary.glutenFree && (
                      <span className="bg-amber-500 text-white p-1 rounded-full">
                        <FaBreadSlice />
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <AnimatePresence>
            {selectedDish && (
              <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default MenuSection;