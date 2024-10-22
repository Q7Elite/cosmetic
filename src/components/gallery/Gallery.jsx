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
import Immg20 from "../../assets/g.jpeg";
import Immg21 from "../../assets/g1.jpeg";
import Immg22 from "../../assets/g2.jpeg";
import Immg23 from "../../assets/g3.jpeg";
import Immg24 from "../../assets/g4.jpeg";
import Immg25 from "../../assets/g5.jpeg";
import Immg26 from "../../assets/g6.jpeg";
// import Immg27 from "../../assets/g7.jpeg";
import Immg28 from "../../assets/g8.jpeg";
import Immg29 from "../../assets/g9.jpeg";
import Immg30 from "../../assets/g10.jpeg";
import Immg31 from "../../assets/g11.jpeg";
import Immg32 from "../../assets/g12.jpeg";
import Immg33 from "../../assets/g13.jpeg";
import Immg34 from "../../assets/g14.jpeg";
import Immg35 from "../../assets/g15.jpeg";
import Immg36 from "../../assets/g16.jpeg";
import Immg37 from "../../assets/g17.jpeg";
import Immg38 from "../../assets/g18.jpeg";
import Immg39 from "../../assets/g19.jpeg";
import Immg40 from "../../assets/g20.jpeg";
import Immg41 from "../../assets/g21.jpeg";
import Immg42 from "../../assets/g22.jpeg";
import Immg43 from "../../assets/g23.jpeg";
import Immg44 from "../../assets/g24.jpeg";
import Immg45 from "../../assets/g25.jpeg";
import Immg46 from "../../assets/g26.jpeg";
import Immg47 from "../../assets/g27.jpeg";
import Immg48 from "../../assets/g28.jpeg";
import Immg49 from "../../assets/g29.jpeg";
import Immg50 from "../../assets/g30.jpeg";
import Immg51 from "../../assets/g31.jpeg";
import Immg52 from "../../assets/g32.jpeg";
import Immg53 from "../../assets/g33.jpeg";
import Immg54 from "../../assets/g34.jpeg";
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
  { id: 20, img: Immg20 },
  { id: 21, img: Immg21 },
  { id: 22, img: Immg22 },
  { id: 23, img: Immg23 },
  { id: 24, img: Immg24 },
  { id: 25, img: Immg25 },
  { id: 26, img: Immg26 },
  // { id: 27, img: Immg27 },
  { id: 28, img: Immg28 },
  { id: 29, img: Immg29 },
  { id: 30, img: Immg30 },
  { id: 31, img: Immg31 },
  { id: 32, img: Immg32 },
  { id: 33, img: Immg33 },
  { id: 34, img: Immg34 },
  { id: 35, img: Immg35 },
  { id: 36, img: Immg36 },
  { id: 37, img: Immg37 },
  { id: 38, img: Immg38 },
  { id: 39, img: Immg39 },
  { id: 40, img: Immg40 },
  { id: 41, img: Immg41 },
  { id: 42, img: Immg42 },
  { id: 43, img: Immg43 },
  { id: 44, img: Immg44 },
  { id: 45, img: Immg45 },
  { id: 46, img: Immg46 },
  { id: 47, img: Immg47 },
  { id: 48, img: Immg48 },
  { id: 49, img: Immg49 },
  { id: 50, img: Immg50 },
  { id: 51, img: Immg51 },
  { id: 52, img: Immg52 },
  { id: 53, img: Immg53 },
  { id: 54, img: Immg54 },
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
