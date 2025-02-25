import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import mail from "../assets/mail.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-900 shadow-md sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-16" />
          <h1 className="text-2xl font-extrabold text-white whitespace-nowrap">
            Bridge Group Solutions
          </h1>
        </div>

        {/* Email Section */}
        <div className="flex items-center space-x-3 mt-3 md:mt-0 bg-blue-800 px-4 py-2 rounded-lg shadow-sm">
          <img src={mail} alt="Mail" className="w-6" />
          <p className="text-base font-medium text-white">
            contactus@bridgegroupsolutions.com
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mt-3 md:mt-0">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-300"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`bg-blue-800 md:bg-blue-900 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
        } md:flex md:items-center md:justify-start`}
      >
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 p-4 text-white">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/AboutUs" },
            { name: "Outsourcing", path: "/outsourcing" },
            { name: "Investing", path: "/investing" },
            { name: "Careers", path: "/careers" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact Us", path: "/contact" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="relative text-lg font-medium py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
