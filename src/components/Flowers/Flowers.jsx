import React from "react";
import Img1 from "../../assets/flower.jpeg";
import Img2 from "../../assets/flower1.jpeg";
import Img5 from "../../assets/flower4.jpeg";
import { FaStar } from "react-icons/fa";

// Product data
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Fresh and Fragrant Blooms",
    description:
      "Celebrate life’s special moments with our handpicked, fresh flowers. From romantic roses to cheerful lilies, we’ve got you covered.",
  },
  {
    id: 2,
    img: Img2,
    title: "Elegant Floral Arrangements ",
    description:
      "Our vibrant flowers are perfect for expressing love, gratitude, or joy. Choose from a wide variety to brighten any space.",
  },
  {
    id: 5,
    img: Img5,
    title: "Flowers that Speak the Language of Beauty",
    description:
      "Whether it’s a gift or décor, our carefully curated flowers add a touch of nature’s elegance to every setting.",
  },
];

// Function to handle WhatsApp redirection
const handleOrderPopup = (productTitle) => {
  const message = `Hello, I'm interested in the ${productTitle} product. Can I get more details on how to order?`;
  const whatsappNumber = "+254723092252"; // Replace with your WhatsApp number

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  // Open WhatsApp in a new tab
  window.open(whatsappURL, "_blank");
};

const TopProducts = () => {
  return (
    <div>
      <div id="flowers" className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-pink-500">
            Order flowers here.
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Brighten Every Moment with Our Beautiful Flowers
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="text-xs text-gray-400"
          >
            Explore our exquisite collection of fresh, vibrant flowers, perfect
            for any occasion. Whether you're celebrating a special moment or
            simply adding beauty to your space, our flowers bring a touch of
            elegance and joy. From stunning roses to cheerful sunflowers, our
            carefully selected blooms are always fresh and delivered with care.
            Let our flowers help you express love, gratitude, or simply brighten
            someone's day with nature's most beautiful creations.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-20 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
              hover:text-white relative shadow-xl duration-300 group max-w-[]"
            >
              {/* Image section */}
              <div>
                <img
                  className="max-w-[300px] rounded-2xl block mx-auto transform -translate-y-20 group-hover:scale-105
                  duration-300 drop-shadow-md"
                  src={data.img}
                  alt={data.title}
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center">
                {/* Star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4
                rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => handleOrderPopup(data.title)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
