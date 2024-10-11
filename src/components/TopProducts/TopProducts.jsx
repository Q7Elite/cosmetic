import React from "react";
import Img1 from "../../assets/braids.jpeg";
import Img3 from "../../assets/braids1.jpeg";
import Img4 from "../../assets/braids2.jpeg";
import { FaStar } from "react-icons/fa";

// Product data
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: " Wigs",
    description:
      "Our wigs, weaves, and braids are crafted from premium materials, ensuring durability and a natural look. Experience the confidence of high-quality hair that complements your unique style effortlessly.",
  },
  {
    id: 3,
    img: Img3,
    title: "Weaves",
    description:
      "We prioritize your needs and preferences, offering tailored consultations to help you choose the perfect style. Our expert team is dedicated to providing a personalized shopping experience, ensuring your satisfaction.",
  },
  {
    id: 4,
    img: Img4,
    title: "Braids",
    description:
      "Indulge in the beauty of our exquisite hair products without breaking the bank. Our competitive prices ensure that everyone can enjoy the luxury of high-quality wigs, weaves, and braids.",
  },
];

const TopProducts = () => {
  // Function to open WhatsApp with a pre-filled message
  const handleOrderPopup = (productTitle) => {
    const message = `Hello, I'm interested in the ${productTitle} product. Can I get more details on how to order?`;
    const whatsappNumber = "+254723092252"; // Your WhatsApp number

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <div id="braids">
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-pink-500">
            Top Rated wigs,weaves and braids for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Transform Your Look with Our Exquisite Wigs, Weaves, and Braids
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="text-xs text-gray-400"
          >
            Discover a stunning collection of wigs, weaves, and braids that
            empower you to express your unique style. Whether you're seeking a
            chic change or a glamorous upgrade, our high-quality hair products
            offer versatility and elegance. From luxurious long locks to trendy
            short styles, our selection caters to every preference. Explore the
            art of transformation with our carefully curated range, designed to
            enhance your beauty and boost your confidence. Embrace your
            individuality and let your hair tell your story!
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-20 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
              hover:text-white relative shadow-xl duration-300 group"
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
