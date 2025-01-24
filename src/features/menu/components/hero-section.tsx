import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
            <Image
              src="/images/menuhero.png"
              alt="Restaurant Interior"
              className="object-cover w-full h-full"
              layout="fill"
            />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-serif mb-4">La Maison</h1>
              <p className="text-xl md:text-2xl font-light">Where culinary dreams come true</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;