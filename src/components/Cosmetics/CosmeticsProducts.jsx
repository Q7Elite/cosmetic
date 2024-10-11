import React from "react";
import Img1 from "../../assets/bp.jpeg";
import Img2 from "../../assets/bp2.jpeg";
import Img3 from "../../assets/bp3.jpeg";
import Img4 from "../../assets/bp4.jpeg";
import Img5 from "../../assets/bp5.jpeg";
import Img6 from "../../assets/bp6.jpeg";
import Img7 from "../../assets/bp7.jpeg";
import Img8 from "../../assets/bp8.jpeg";
import Img9 from "../../assets/bp9.jpeg";
import Img10 from "../../assets/bp10.jpeg";
import Img11 from "../../assets/bp11.jpeg";
import Img12 from "../../assets/bp12.jpeg";
import Img13 from "../../assets/bp13.jpeg";
import Img14 from "../../assets/bp14.jpeg";
import Img15 from "../../assets/bp15.jpeg";
import Img16 from "../../assets/bp16.jpeg";
import Img17 from "../../assets/bp17.jpeg";
import Img18 from "../../assets/bp18.jpeg";
import Img19 from "../../assets/bp19.jpeg";
import Img20 from "../../assets/bp20.jpeg";
import Img21 from "../../assets/bp21.jpeg";
import Img22 from "../../assets/bp22.jpeg";
import Img23 from "../../assets/bp23.jpeg";
import Img24 from "../../assets/bp24.jpeg";

import { FaStar } from "react-icons/fa6";

const CosmeticData = [
  {
    id: 2,
    img: Img2,
    title: "Blackhead Removal Nose Mask",
    rating: "5.0",
    color: "",
    aosDelay: "1600",
  },
  {
    id: 3,
    img: Img3,
    title: "Boo Charcoal Nose Mask",
    rating: "5.0",
    color: "",
    aosDelay: "1700",
  },
  {
    id: 4,
    img: Img4,
    title: "Collagen",
    rating: "5.0",
    color: "",
    aosDelay: "1800",
  },
  {
    id: 5,
    img: Img5,
    title: "Peel-off mask",
    rating: "5.0",
    color: "",
    aosDelay: "2000",
  },
  {
    id: 6,
    img: Img6,
    title: "Carrot",
    rating: "5.0",
    color: "",
    aosDelay: "2100",
  },
  {
    id: 7,
    img: Img7,
    title: "Eggplant",
    rating: "5.0",
    color: "",
    aosDelay: "2200",
  },
  {
    id: 8,
    img: Img8,
    title: "Hair Remover",
    rating: "5.0",
    color: "",
    aosDelay: "2300",
  },
  {
    id: 9,
    img: Img9,
    title: "Body Wash",
    rating: "5.0",
    color: "",
    aosDelay: "2400",
  },
  {
    id: 10,
    img: Img10,
    title: "Dr.Davy Licorice Root",
    rating: "5.0",
    color: "",
    aosDelay: "2500",
  },
  {
    id: 11,
    img: Img11,
    title: "Rice",
    rating: "5.0",
    color: "",
    aosDelay: "2600",
  },
  {
    id: 12,
    img: Img12,
    title: "Matte Lipstick",
    rating: "5.0",
    color: "",
    aosDelay: "2700",
  },
  {
    id: 13,
    img: Img13,
    title: "Fenty Beauty",
    rating: "5.0",
    color: "",
    aosDelay: "2800",
  },

  {
    id: 15,
    img: Img15,
    title: "Sleek Lip Gloss",
    rating: "5.0",
    color: "",
    aosDelay: "2900",
  },
  {
    id: 16,
    img: Img16,
    title: "Million Lipstick",
    rating: "5.0",
    color: "",
    aosDelay: "3000",
  },
  {
    id: 17,
    img: Img17,
    title: "Lotion",
    rating: "5.0",
    color: "",
    aosDelay: "3100",
  },
  {
    id: 18,
    img: Img18,
    title: "Shea Moisturizing Body Lotion",
    rating: "5.0",
    color: "",
    aosDelay: "3200",
  },
  {
    id: 20,
    img: Img20,
    title: "Papaya Body Lotion",
    rating: "5.0",
    color: "",
    aosDelay: "3300",
  },
  {
    id: 21,
    img: Img21,
    title: "Dr.Davy Collagen",
    rating: "5.0",
    color: "",
    aosDelay: "3400",
  },
  {
    id: 22,
    img: Img22,
    title: "Argan & Carrot Body Lotion",
    rating: "5.0",
    color: "",
    aosDelay: "3500",
  },
  {
    id: 23,
    img: Img23,
    title: "Frozen White Plus Body Lotion",
    rating: "5.0",
    color: "",
    aosDelay: "3600",
  },
  {
    id: 24,
    img: Img24,
    title: "Aloe Vera Skin Care Lotion",
    rating: "5.0",
    color: "",
    aosDelay: "3700",
  },
];

const Cosmetics = () => {
  return (
    <div id="cosmetics" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-pink-500">
            Elevate Your Beauty with Our Cosmetics
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Cosmetics
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="text-xs text-gray-400"
          >
            Discover a world of vibrant colors and luxurious textures with our
            premium cosmetics collection. From foundation to lipstick, our
            products enhance your natural beauty and empower your
            self-expression. Each item is carefully curated to provide
            exceptional quality, ensuring a flawless finish that lasts all day.
            Whether you're preparing for a special occasion or your everyday
            routine, our cosmetics cater to all your beauty needs, helping you
            shine with confidence and elegance. Experience the art of makeup
            like never before and transform your look with our exquisite range.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center
            gap-5"
          >
            {/* card section */}
            {CosmeticData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[300px] w-[250px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">Available</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmetics;
