import React, { useState } from "react";
import Logo from "../../assets/NBS.gif";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Braids,Wigs & Weaves", link: "/#braids" },
  { id: 3, name: "Perfumes", link: "/#perfumes" },
  { id: 4, name: "Cosmetics", link: "/#cosmetics" },
  { id: 5, name: "Flowers", link: "/#flowers" },
  { id: 6, name: "Services", link: "/#services" },
];

const DropdownLinks = [
  { id: 1, name: "Contact", link: "/#contact" },
  { id: 2, name: "Location", link: "/#map" },
  { id: 3, name: "Testimonials", link: "/#testimony" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to close the mobile menu when clicking outside
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Function to toggle dropdown in mobile view
  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  // Function to handle Order button click and redirect to WhatsApp
  const handleOrderPopup = () => {
    const phoneNumber = "+254723092252"; // WhatsApp phone number
    const message = encodeURIComponent(
      "Hello, I’ve just seen your amazing products at Naomi's Beauty Shop! 😍 I’m excited to place an order. Could you help me find the perfect item? 🌸",
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappURL;
  };

  return (
    <div className="shadow-md bg-white dark:bg-purple-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img
                className="w-20 rounded-lg uppercase"
                src={Logo}
                alt="logo"
              />
              Naomi's Beauty Shop
            </a>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all 
                duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 translate-x-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary
            transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
          {/* Darkmode Switch */}
          <div>
            <DarkMode />
          </div>
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* lower Navbar for larger screens */}
      <div data-aos="zoom-in" className="hidden sm:flex justify-center">
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Other Links
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div
              className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md 
              bg-white p-2 text-black shadow-md"
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu}
          ></div>

          <div className="sm:hidden flex flex-col items-center bg-white dark:bg-purple-900 p-4 w-[50vw] max-w-[50vw] fixed right-0 top-0 h-full z-50">
            {/* Close Button */}
            <button className="self-end mb-4" onClick={closeMobileMenu}>
              <FaTimes className="text-xl" />
            </button>

            <ul className="flex flex-col items-start gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="block py-2 hover:text-primary duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* Dropdown for Mobile */}
              <li className="relative cursor-pointer">
                <div
                  onClick={toggleMobileDropdown}
                  className="flex items-center gap-1 py-2"
                >
                  Other Links
                  <FaCaretDown className="transition-all duration-200" />
                </div>
                {mobileDropdownOpen && (
                  <div className="absolute w-[150px] bg-white p-2 text-black shadow-md mt-2">
                    <ul>
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="block w-full p-2 hover:bg-primary/20"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
