import React from "react";
import Img1 from "../../assets/service.jpg";
import Img2 from "../../assets/service1.jpg";
import Img3 from "../../assets/service2.jpg";
import Img4 from "../../assets/service3.jpg";
import Img5 from "../../assets/service4.jpg";
import Img6 from "../../assets/service5.jpg";
import Img7 from "../../assets/service6.jpg";
import Img8 from "../../assets/service7.jpg";
import Img9 from "../../assets/service8.jpg";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Manicure",
    rating: "5.0",
    color: "",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Pedicure",
    rating: "5.0",
    color: "",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img3,
    title: "Nail Art & Design",
    rating: "5.0",
    color: "",
    aosDelay: "200",
  },
  {
    id: 4,
    img: Img4,
    title: "Pedicure",
    rating: "5.0",
    color: "",
    aosDelay: "300",
  },
  {
    id: 5,
    img: Img5,
    title: "Nail Art & Design",
    rating: "5.0",
    color: "",
    aosDelay: "400",
  },
  {
    id: 6,
    img: Img6,
    title: "Makeup Art",
    rating: "5.0",
    color: "",
    aosDelay: "500",
  },
  {
    id: 7,
    img: Img7,
    title: "Pedicure",
    rating: "5.0",
    color: "",
    aosDelay: "600",
  },
  {
    id: 8,
    img: Img8,
    title: "Nail Art & Design",
    rating: "5.0",
    color: "",
    aosDelay: "700",
  },
  {
    id: 9,
    img: Img9,
    title: "Professional Makeup Application",
    rating: "5.0",
    color: "",
    aosDelay: "800",
  },
];

const Services = () => {
  return (
    <div id="services" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-pink-500">
            Expert Beauty Services for Your Every Need
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Services
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="text-xs text-gray-400"
          >
            At Naomi's Beauty Shop, we offer a full range of beauty services,
            including professional makeup, manicures, pedicures, weaving,
            braiding, and more. Our skilled team ensures you look and feel your
            best, whether it’s for a special occasion or everyday glam. Indulge
            in the ultimate beauty experience with personalized care tailored
            just for you.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center
            gap-5"
          >
            {/* card section */}
            {ProductsData.map((data) => (
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
                  <p className="text-sm text-gray-600"></p>
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

export default Services;
