"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "./hero-section";

const MenuSection = () => {
  const [activeCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [ setFilteredItems] = useState([]);

  {/*const categories = [
    { id: "all", name: "All" },
    { id: "appetizers", name: "Appetizers" },
    { id: "main", name: "Main Course" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
    { id: "specials", name: "Special Items" },
  ];*/}

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
      isPopular: true,
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
      isPopular: true,
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
      isPopular: true,
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
      isPopular: false,
    },
  ];

  useEffect(() => {
    const filtered = menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredItems(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/*<MenuGrid
        filteredItems={filteredItems}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />*/}
    </div>
  );
};

export default MenuSection;