"use client";

import React, { useState } from "react";
import { FiSearch, FiShare2 } from "react-icons/fi";
import { format } from "date-fns";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Mediterranean Cuisine",
    excerpt: "Discover the secrets behind our signature Mediterranean dishes...",
    author: "Chef Maria Rodriguez",
    date: new Date("2024-01-15"),
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3",
    tags: ["Mediterranean", "Cuisine", "Cooking"]
  },
  {
    id: 2,
    title: "Behind the Scenes: A Day in Our Kitchen",
    excerpt: "Experience the bustling life of our restaurant kitchen...",
    author: "John Smith",
    date: new Date("2024-01-10"),
    category: "Chef's Corner",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3",
    tags: ["Kitchen", "Chef Life", "Restaurant"]
  },
  {
    id: 3,
    title: "New Summer Menu Launch",
    excerpt: "Introducing our exciting new seasonal dishes...",
    author: "Emma Thompson",
    date: new Date("2024-01-05"),
    category: "Restaurant News",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3",
    tags: ["Menu", "Summer", "Food"]
  }
];

const categories = ["All", "Recipes", "Chef's Corner", "Restaurant News"];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" 
           style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Culinary Chronicles</h1>
              <p className="text-xl md:text-2xl">Stories from our kitchen to your table</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-orange-500">{post.category}</span>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <FiShare2 />
                  </button>
                </div>
                <h2 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.author}</span>
                  <span>{format(post.date, "MMM dd, yyyy")}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;