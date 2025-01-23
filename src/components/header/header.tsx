"use client";

import { AlignJustify } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"; // Update the import path based on your structure
import UserInfo from "../user-info/UserInfo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", path: "/", label: "Home" },
    { id: "menu", path: "/menu", label: "Menu" },
    { id: "about", path: "/about", label: "About" },
    { id: "contact", path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/0 backdrop-blur-md shadow-lg"
          : "bg-white/0 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={60}
          height={50}
          className="flex-shrink-0 md:h-10"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={classNames(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeLink === link.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
              onClick={() => setActiveLink(link.id)}
              aria-current={activeLink === link.id ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          {/* Blogs Dropdown */}
          <Select
            onValueChange={(value) => {
              setActiveLink("blogs");
              window.location.href = value; // Navigate to the selected route
            }}
          >
            <SelectTrigger
              className={classNames(
                "px-3 py-2 border-none text-sm font-medium transition-all duration-200",
                activeLink === "blogs"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              Blogs
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="/blogs/tech">Tech</SelectItem>
              <SelectItem value="/blogs/lifestyle">Lifestyle</SelectItem>
              <SelectItem value="/blogs/travel">Travel</SelectItem>
            </SelectContent>
          </Select>
        </nav>

        <UserInfo />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <AlignJustify size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={classNames(
                "block w-full px-3 py-2 text-left text-base font-medium transition-all duration-200",
                activeLink === link.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
              onClick={() => {
                setActiveLink(link.id);
                setIsOpen(false);
              }}
              aria-current={activeLink === link.id ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          {/* Blogs Dropdown */}
          <div className="px-3 py-2">
            <Select
              onValueChange={(value) => {
                setActiveLink("blogs");
                setIsOpen(false);
                window.location.href = value; // Navigate to the selected route
              }}
            >
              <SelectTrigger className="w-full text-left border-none">
                Blogs
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="/blogs/tech">Tech</SelectItem>
                <SelectItem value="/blogs/lifestyle">Lifestyle</SelectItem>
                <SelectItem value="/blogs/travel">Travel</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;