import React from "react";
import footerLogo from "../../assets/NBS.gif";
import Banner from "../../assets/blog-4.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Main links for the first section
const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "Braids, Wigs & Weaves", link: "/#braids" },
  { title: "Perfumes", link: "/#perfumes" },
  { title: "Cosmetics", link: "/#cosmetics" },
  { title: "Flowers", link: "/#flowers" },
];

// Additional links for the second section
const OtherLinks = [
  { title: "Contact", link: "/#contact" },
  { title: "Location", link: "/#map" },
  { title: "Testimonials", link: "/#testimony" },
  { title: "Gallery", link: "/#gallery" },
];

const Footer = () => {
  return (
    <div
      className="text-black bg-cover bg-no-repeat sm:bg-bottom bg-center"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <h5 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img
                src={footerLogo}
                alt="logo"
                className="rounded-md max-w-[50px]"
              />
              <span className="text-secondary">Naomi's Beauty Shop</span>
            </h5>
            <p className="text-secondary">
              At Naomi's Beauty Shop, we envision a world where beauty is
              accessible to everyone, empowering individuals to express
              themselves confidently through high-quality beauty products and
              personalized services. We are dedicated to enhancing your beauty
              journey with passion, integrity, and excellence.
            </p>
          </div>

          {/* First set of links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h6 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h6>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-black hover:translate-x-1 
                    duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second set of links */}
            <div>
              <div className="py-8 px-4">
                <h6 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Other Links
                </h6>
                <ul className="flex flex-col gap-3">
                  {OtherLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 
                    duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/naomi.gathura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/naomi.gathura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@naomi.gathura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-3xl" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/naomi.gathura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-3xl" />
                </a>

                {/* Twitter (X) */}
                <a
                  href="https://www.x.com/NaomiGathura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="text-3xl" />
                </a>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Githiga, Shopping Center</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+254 723092252</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Designer Info */}
        <div className="border-t border-gray-200 text-center py-4 text-gray-500">
          <p>
            © {new Date().getFullYear()} Naomi's Beauty Shop. All rights
            reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://www.softspace.co.ke"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              chapamboka
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
