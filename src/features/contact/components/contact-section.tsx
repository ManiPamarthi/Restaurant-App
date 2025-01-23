"use client";

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ContactForm from "./contact-form";
import Image from "next/image";

const ContactSection = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="text-amber-600 text-xl" />,
      title: "Location",
      description: "123 Gourmet Avenue, Culinary District",
    },
    {
      icon: <FaPhone className="text-amber-600 text-xl" />,
      title: "Phone",
      description: "(555) 123-4567",
    },
    {
      icon: <FaEnvelope className="text-amber-600 text-xl" />,
      title: "Email",
      description: "contact@lamaison.com",
    },
    {
      icon: <FaClock className="text-amber-600 text-xl" />,
      title: "Hours",
      description: (
        <>
          <p>Mon-Sat: 11:00 AM - 10:00 PM</p>
          <p>Sun: 12:00 PM - 9:00 PM</p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amr-50 to-white">
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="/images/contacthero.png"
              alt="Restaurant Interior"
              className="object-cover w-full h-full"
              layout="fill"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="text-white">
                <h1 className="text-5xl md:text-7xl font-serif mb-4">
                  Get in Touch
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  The freshest ingredients for you every day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">
            Contact La Maison
          </h1>
          <p className="text-lg text-gray-600">
            We&apos;d love to hear from you
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Image
                src="/images/map.png"
                alt="Restaurant location"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                width={600}
                height={300}
              />
            </div>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;