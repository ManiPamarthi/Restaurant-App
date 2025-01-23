"use client";

import { motion } from "framer-motion";
import AboutLocation from "./about-location";
import AboutStorySection from "./about-story";
import Image from "next/image";

const AboutSection = () => {

  const atmosphereImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
            <Image
              src="/images/abouthero.png"
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

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Founded in 1990, La Maison has been serving exceptional cuisine for over three decades. Our
                commitment to quality and innovation has made us a landmark destination for food enthusiasts.
              </p>
            </div>
            <div>
              <img
                src="/images/chef.png"
                alt="Restaurant History"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
        <AboutStorySection/>

      {/* Atmosphere Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Our Atmosphere</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {atmosphereImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt="Restaurant Atmosphere"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
            <AboutLocation/>
    </div>
  );
};

export default AboutSection;