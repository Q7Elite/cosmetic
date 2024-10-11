// import React from "react";
// import Img1 from "../../assets/Dolce & gabbana.jpeg";
// import Img2 from "../../assets/Tom Ford.jpeg";
// import Img3 from "../../assets/David Walker3.jpeg";
// import Img4 from "../../assets/Givenchy.jpeg";
// import Img5 from "../../assets/My Way.jpeg";
// import Img6 from "../../assets/Creed.jpeg";
// import Img7 from "../../assets/Black Opium.jpeg";
// import Img8 from "../../assets/Bleu De Chanel.jpeg";
// import Img9 from "../../assets/Davidoff Cool Water.jpeg";
// import Img10 from "../../assets/ESCADA chair in the air.jpeg";
// import Img11 from "../../assets/Miss Dior.jpeg";
// import Img12 from "../../assets/Good girl.jpeg";
// import Img13 from "../../assets/Invictus.jpeg";
// import Img14 from "../../assets/Beautiful.jpeg";
// import Img15 from "../../assets/212 VIP.jpeg";
// import Img16 from "../../assets/Aqua di dijio.jpeg";
// import { FaStar } from "react-icons/fa6";

// const ProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "DOLCE & GABBANA",
//     rating: "5.0",
//     color: "",
//     aosDelay: "0",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "100",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "200",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "300",
//   },
//   {
//     id: 5,
//     img: Img5,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "400",
//   },
//   {
//     id: 6,
//     img: Img6,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "500",
//   },
//   {
//     id: 7,
//     img: Img7,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "600",
//   },
//   {
//     id: 8,
//     img: Img8,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "700",
//   },
//   {
//     id: 9,
//     img: Img9,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "800",
//   },
//   {
//     id: 10,
//     img: Img10,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "900",
//   },
//   {
//     id: 11,
//     img: Img11,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "1000",
//   },
//   {
//     id: 12,
//     img: Img12,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "1100",
//   },
//   {
//     id: 13,
//     img: Img13,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "1200",
//   },
//   {
//     id: 14,
//     img: Img14,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "1300",
//   },
//   {
//     id: 15,
//     img: Img15,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "1400",
//   },
//   {
//     id: 16,
//     img: Img16,
//     title: "Braids",
//     rating: 5.0,
//     color: "",
//     aosDelay: "1500",
//   },
// ];

// const Products = ({ handleOrderPopup }) => {
//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-pink-500">
//             Enchanting Scents for Every Mood
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Perfumes
//           </h1>
//           <p className="text-xs text-gray-400">
//             Discover our wide range of perfumes, crafted to captivate your
//             senses and complement every personality. From light, floral
//             fragrances to bold, exotic notes, we offer perfumes for every
//             occasion, ensuring you always leave a lasting impression. Let your
//             scent be your signature.
//           </p>
//         </div>
//         {/* Body section */}
//         <div>
//           <div
//             className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center
//             gap-5"
//           >
//             {/* card section */}
//             {ProductsData.map((data) => (
//               <div
//                 key={data.id}
//                 data-aos="fade-up"
//                 data-aos-delay={data.aosDelay}
//                 className="space-y-3"
//               >
//                 <img
//                   src={data.img}
//                   alt=""
//                   className="h-[300px] w-[250px] object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{data.title}</h3>
//                   <p className="text-sm text-gray-600"></p>
//                   <div className="flex items-center gap-1">
//                     <FaStar className="text-yellow-400" />
//                     <span>{data.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React from "react";
import Img1 from "../../assets/Dolce & gabbana.jpeg";
import Img2 from "../../assets/Tom Ford.jpeg";
import Img3 from "../../assets/David Walker3.jpeg";
import Img4 from "../../assets/Givenchy.jpeg";
import Img5 from "../../assets/My Way.jpeg";
import Img6 from "../../assets/Creed.jpeg";
import Img7 from "../../assets/Black Opium.jpeg";
import Img8 from "../../assets/Bleu De Chanel.jpeg";
import Img9 from "../../assets/Davidoff Cool Water.jpeg";
import Img10 from "../../assets/ESCADA chair in the air.jpeg";
import Img11 from "../../assets/Miss Dior.jpeg";
import Img12 from "../../assets/Good girl.jpeg";
import Img13 from "../../assets/Invictus.jpeg";
import Img14 from "../../assets/Beautiful.jpeg";
import Img15 from "../../assets/212 VIP.jpeg";
import Img16 from "../../assets/Aqua di dijio.jpeg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "DOLCE & GABBANA",
    description:
      "A timeless fragrance with a captivating blend of citrus and spice, perfect for any occasion.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "TOM FORD",
    description:
      "Bold and exotic, this fragrance is for those who want to leave a lasting impression.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img3,
    title: "DAVID WALKER",
    description:
      "A masculine fragrance with fresh, woody notes that embody elegance and strength.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "200",
  },
  {
    id: 4,
    img: Img4,
    title: "GIVENCHY",
    description:
      "A luxurious perfume that combines floral and fruity notes, offering a sophisticated scent.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "300",
  },
  {
    id: 5,
    img: Img5,
    title: "MY WAY",
    description:
      "A fresh and floral fragrance that invites you to embrace new experiences with confidence.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "400",
  },
  {
    id: 6,
    img: Img6,
    title: "CREED",
    description:
      "A royal blend of citrus and musk, this fragrance offers a refined scent for the modern individual.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "500",
  },
  {
    id: 7,
    img: Img7,
    title: "BLACK OPIUM",
    description:
      "A seductive and mysterious scent with notes of coffee and vanilla, perfect for evening wear.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "600",
  },
  {
    id: 8,
    img: Img8,
    title: "BLEU DE CHANEL",
    description:
      "A sophisticated, fresh, and woody fragrance for the man who defies convention.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "700",
  },
  {
    id: 9,
    img: Img9,
    title: "DAVIDOFF COOL WATER",
    description:
      "An aquatic fragrance that evokes the strength and purity of the ocean.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "800",
  },
  {
    id: 10,
    img: Img10,
    title: "ESCADA CHAIR IN THE AIR",
    description:
      "A playful and youthful fragrance with fruity notes, perfect for sunny days.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "900",
  },
  {
    id: 11,
    img: Img11,
    title: "MISS DIOR",
    description:
      "A romantic and elegant fragrance with notes of rose and jasmine, ideal for day or night.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "1000",
  },
  {
    id: 12,
    img: Img12,
    title: "GOOD GIRL",
    description:
      "A bold and daring fragrance with a blend of sweet and spicy notes for the confident woman.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "1100",
  },
  {
    id: 13,
    img: Img13,
    title: "INVICTUS",
    description:
      "A powerful and energetic scent with notes of grapefruit and bay leaf, perfect for winners.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "1200",
  },
  {
    id: 14,
    img: Img14,
    title: "BEAUTIFUL",
    description: "A rich floral scent that radiates femininity and elegance.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "1300",
  },
  {
    id: 15,
    img: Img15,
    title: "212 VIP",
    description:
      "A vibrant and glamorous fragrance with notes of rum and passion fruit, perfect for nightlife.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "1400",
  },
  {
    id: 16,
    img: Img16,
    title: "AQUA DI GIO",
    description:
      "A fresh and aquatic fragrance inspired by the Mediterranean sea.",
    rating: "5.0",
    // price: "KES 100 per 3ml",
    aosDelay: "1500",
  },
];

const Products = ({ handleOrderPopup }) => {
  return (
    <div id="perfumes" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-pink-500">
            Enchanting Scents for Every Mood
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Perfumes
          </h1>
          <p className="text-xs text-gray-400">
            Discover our wide range of perfumes, crafted to captivate your
            senses and complement every personality. From light, floral
            fragrances to bold, exotic notes, we offer perfumes for every
            occasion, ensuring you always leave a lasting impression. Let your
            scent be your signature.
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
                  alt={data.title}
                  className="h-[300px] w-[250px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.description}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">{data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
