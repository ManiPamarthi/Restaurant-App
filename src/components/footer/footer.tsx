"use client";

import { useState } from "react";
import Image from 'next/image';
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show scroll button when scrolling down
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollButton(window.scrollY > 300);
    });
  }

  return (
    <>
    <footer className="bg-green-200 text-dark-foreground relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Company Info */}
                  <div className="space-y-4">
                      <Image
                          src="/images/logo.svg"
                          alt="Company Logo"
                          className=""
                          width={78}
                          height={30} />
                      <p className="text-muted-foreground">
                          We create digital experiences that matter. Innovation meets excellence in everything we do.
                      </p>
                      {/*<div className="flex space-x-4">
      <FaFacebook className="text-2xl hover:text-primary transition-colors cursor-pointer" />
      <FaTwitter className="text-2xl hover:text-primary transition-colors cursor-pointer" />
      <FaInstagram className="text-2xl hover:text-primary transition-colors cursor-pointer" />
      <FaLinkedin className="text-2xl hover:text-primary transition-colors cursor-pointer" />
    </div>*/}
                  </div>

                  {/* Quick Links */}
                  <div>
                      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                      <ul className="space-y-2">
                          {["About Us", "Services", "Products", "Contact"].map((link) => (
                              <li key={link}>
                                  <a
                                      href="#"
                                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                  >
                                      {link}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Resources */}
                  <div>
                      <h3 className="text-lg font-bold mb-4">Resources</h3>
                      <ul className="space-y-2">
                          {["Blog", "Documentation", "FAQs", "Support"].map((link) => (
                              <li key={link}>
                                  <a
                                      href="#"
                                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                  >
                                      {link}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Contact Info & Newsletter */}
                  <div className="space-y-4">
                      <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                      <form onSubmit={handleSubscribe} className="space-y-2">
                          <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              className="w-full px-4 py-2 rounded bg-dark-card text-dark-foreground border border-dark-border focus:outline-none focus:border-primary"
                              required />
                          <Button
                              variant="default"
                              type="submit"
                              className=""
                          >
                              Subscribe
                          </Button>
                      </form>
                      <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-center space-x-2">
                              {/*<MdEmail className="text-xl" />*/}
                              <span>contact@company.com</span>
                          </div>
                          <div className="flex items-center space-x-2">
                              {/*<MdPhone className="text-xl" />*/}
                              <span>+1 (555) 123-4567</span>
                          </div>
                          <div className="flex items-center space-x-2">
                              {/*<MdLocationOn className="text-xl" />*/}
                              <span>123 Business Avenue, Suite 100, City, State 12345</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-yellow-400">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                      <p className="text-muted-foreground text-sm">
                          © {new Date().getFullYear()} Company Name. All rights reserved.
                      </p>
                      <div className="flex space-x-4 text-sm">
                          <a
                              href="#"
                              className="text-muted-foreground hover:text-primary transition-colors"
                          >
                              Privacy Policy
                          </a>
                          <a
                              href="#"
                              className="text-muted-foreground hover:text-primary transition-colors"
                          >
                              Terms of Service
                          </a>
                      </div>
                  </div>
              </div>
          </div>

          {/* Scroll to Top Button */}
          {showScrollButton && (
              <button
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
                  aria-label="Scroll to top"
              >
                  <ArrowUp className="text-xl" />
              </button>
          )}
      </footer></>
  );
};

export default Footer;