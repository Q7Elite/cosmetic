import React from "react";
import Img1 from "../../assets/fam6.jpg";
import Img2 from "../../assets/woman.jpg";
import Img3 from "../../assets/woman1.jpg";
import Img4 from "../../assets/fam14.jpg";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Damaris Mwangi",
    text: "I couldn’t be happier with my experience! The perfume I purchased was absolutely divine, and the fast delivery exceeded my expectations. I’ll definitely be shopping here again!",
    img: Img1, // Correcting here by removing the object wrapper
  },
  {
    id: 2,
    name: "Mary Gatune",
    text: "Their customer service is top-notch. From makeup to hair braiding, every service I’ve received has been exceptional. I always feel confident after visiting!",
    img: Img2,
  },
  {
    id: 3,
    name: "Esther Wangui",
    text: "The quality of their products is outstanding. I bought a few beauty products and they’ve transformed my daily routine. Plus, the easy payment method made it hassle-free!",
    img: Img3,
  },
  {
    id: 4,
    name: "Zipporah Ndung'u",
    text: "The team here truly knows their stuff. I ordered some wigs and flowers for an event, and the compliments didn’t stop! This is my go-to for all beauty needs.",
    img: Img4,
  },
];

const Testimonials = () => {
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
    <div id="testimony" className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-pink-500">
            What Our Clients Say
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="text-xs text-gray-400"
          >
            We value the trust our clients place in us, and their feedback
            drives us to continually deliver exceptional products and services.
            Hear from our satisfied customers who have experienced top-quality
            beauty products, reliable services, and unmatched care. Their
            stories inspire us to keep raising the bar in everything we do.
          </p>
        </div>
        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img} // Using the direct image reference
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-600">{data.text}</p>
                      <h4 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h4>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ''
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
