"use client";

import { AlignJustify } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserInfo from "../user-info/UserInfo";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

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

  const handleNavigation = (path) => {
    setIsOpen(false);
    setActiveLink(path);
    router.push(path);
  };

  return (
    <header
      className={classNames(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/0 backdrop-blur-md shadow-lg" : "bg-white/0 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={60}
            height={50}
            className="flex-shrink-0 md:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={classNames(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeLink === link.id
                  ? "bg-none text-yellow-400"
                  : "text-yellow-400 font-semibold hover:text-yellow-400 hover:bg-none"
              )}
              onClick={() => setActiveLink(link.id)}
              aria-current={activeLink === link.id ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          {/* Blogs Dropdown */}
          <Select
            onValueChange={(value) => handleNavigation(value)}
          >
            <SelectTrigger
              className={classNames(
                "px-3 py-2 border-none text-sm font-medium transition-all duration-200",
                activeLink === "blogs"
                  ? "bg-none text-yellow-400"
                  : "text-yellow-400 font-semibold hover:text-yellow-400 hover:bg-none"
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

          {/* User Info */}
          <UserInfo />
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden rounded-md p-2 text-yellow-400 hover:text-yellow-400 hover:bg-none focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <AlignJustify size={24} />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="p-4 bg-white shadow-lg">
            <div className="space-y-4">
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
                  onClick={() => handleNavigation(link.path)}
                  aria-current={activeLink === link.id ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}

              {/* Blogs Dropdown */}
              <Select
                onValueChange={(value) => handleNavigation(value)}
              >
                <SelectTrigger className="w-full text-left border border-gray-300 rounded-md">
                  Blogs
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="/blogs/tech">Tech</SelectItem>
                  <SelectItem value="/blogs/lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="/blogs/travel">Travel</SelectItem>
                </SelectContent>
              </Select>

              {/* User Info */}
              <UserInfo />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;