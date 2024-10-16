import React from "react";
import Immg1 from "../../assets/gallery.jpeg";
import Immg2 from "../../assets/gallery2.jpeg";
import Immg3 from "../../assets/gallery3.jpeg";
import Immg4 from "../../assets/gallery4.jpeg";
import Immg5 from "../../assets/gallery5.jpeg";
import Immg6 from "../../assets/gallery6.jpeg";
import Immg7 from "../../assets/gallery7.jpeg";
import Immg8 from "../../assets/gallery8.jpeg";
import Immg9 from "../../assets/gallery9.jpeg";
import Immg10 from "../../assets/gallery10.jpeg";
import Immg11 from "../../assets/gallery11.jpeg";
import Immg12 from "../../assets/gallery12.jpeg";
import Immg13 from "../../assets/gallery13.jpeg";
import Immg14 from "../../assets/naomigallery.jpeg";
import Immg15 from "../../assets/naomigallery1.jpeg";
import Immg16 from "../../assets/naomigallery2.jpeg";
import Immg17 from "../../assets/naomigallery3.jpeg";
import Immg18 from "../../assets/naomigallery4.jpeg";
import Immg19 from "../../assets/naomigallery5.jpeg";
import Slider from "react-slick";

const galleryData = [
  { id: 1, img: Immg1 },
  { id: 2, img: Immg2 },
  { id: 3, img: Immg3 },
  { id: 4, img: Immg4 },
  { id: 5, img: Immg5 },
  { id: 6, img: Immg6 },
  { id: 7, img: Immg7 },
  { id: 8, img: Immg8 },
  { id: 9, img: Immg9 },
  { id: 10, img: Immg10 },
  { id: 11, img: Immg11 },
  { id: 12, img: Immg12 },
  { id: 13, img: Immg13 },
  { id: 14, img: Immg14 },
  { id: 15, img: Immg15 },
  { id: 16, img: Immg16 },
  { id: 17, img: Immg17 },
  { id: 18, img: Immg18 },
  { id: 19, img: Immg19 },
];

const Gallery = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="gallery" className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-pink-500"></p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-pink-500">
            Our Gallery
          </h1>
        </div>
        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {galleryData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img} // Using the direct image reference
                      alt={data.name}
                      className=" object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
