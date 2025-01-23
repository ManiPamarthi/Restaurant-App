import Image from "next/image";
import React from "react";
import { FaClock, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram,} from "react-icons/fa";

const AboutLocation = () => {
  // Data for hours
  const hours = [
    { id: 1, time: "Mon-Fri: 11:00 AM - 10:00 PM" },
    { id: 2, time: "Sat-Sun: 10:00 AM - 11:00 PM" },
  ];

  // Data for contact details
  const contacts = [
    { id: 1, icon: <FaPhone className="mr-2 text-amber-600" />, text: "(555) 123-4567" },
    { id: 2, icon: <FaEnvelope className="mr-2 text-amber-600" />, text: "info@lamaison.com" },
  ];

  // Data for social media links
  const socialMedia = [
    { id: 1, icon: <FaFacebook className="text-2xl text-gray-600 hover:text-amber-600 cursor-pointer" /> },
    { id: 2, icon: <FaTwitter className="text-2xl text-gray-600 hover:text-amber-600 cursor-pointer" /> },
    { id: 3, icon: <FaInstagram className="text-2xl text-gray-600 hover:text-amber-600 cursor-pointer" /> },
  ];

  return (
    <section className="py-20 bg-gray-50 mb-18">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Visit Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Address and Details Section */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>123 Gourmet Street, Culinary District</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              {hours.map((hour) => (
                <div key={hour.id} className="flex items-center mb-2">
                  <FaClock className="mr-2 text-amber-600" />
                  <p>{hour.time}</p>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              {contacts.map((contact) => (
                <div key={contact.id} className="flex items-center mb-2">
                  {contact.icon}
                  <p>{contact.text}</p>
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              {socialMedia.map((media) => (
                <div key={media.id}>{media.icon}</div>
              ))}
            </div>
          </div>
          {/* Image Section */}
          <div className="relative h-96">
            <Image
              src="/images/menuone.png"
              alt="Restaurant Location"
              className="object-cover rounded-lg shadow-lg"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLocation;