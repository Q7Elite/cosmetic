// import React, { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa"; // Importing the WhatsApp icon
// import Banner from "../../assets/back.jpg"; // Background image

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("https://formspree.io/f/manywgdy", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: form.name,
//         email: form.email,
//         subject: form.subject,
//         message: form.message,
//       }),
//     });

//     if (response.ok) {
//       setStatus("Message sent successfully!");
//       setForm({ name: "", email: "", subject: "", message: "" });
//     } else {
//       setStatus("Failed to send message. Please try again later.");
//     }
//   };

//   return (
//     <div id="contact" className="pt-[5rem] pb-[3rem]" style={BannerImg}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
//         <div data-aos="fade-up" data-aos-anchor-placement="top-center">
//           <p className="heading__mini font-semibold">Hello,</p>
//           <h1 className="heading__primary font-semibold">
//             Elevate Your Style with Us!
//           </h1>
//           <p className="text-[15px] text-white mt-[1rem] opacity-75">
//             Discover a range of high-quality wigs, weaves, and cosmetics
//             designed to give you a flawless look. Shop now and enjoy
//             personalized beauty services that suit your unique style.
//           </p>
//           <a
//             href="tel:+254723092252"
//             className="block mt-[2rem] mb-[2rem] text-[30px] text-white underline font-bold"
//           >
//             +254 723092252
//           </a>
//           <a
//             href="https://wa.me/254723092252?text=Hello!%20I'm%20interested%20in%20your%20products.%20Could%20you%20tell%20me%20more%20about%20your%20wigs,%20weaves,%20cosmetics,%20and%20beauty%20services%3F%20I%20would%20like%20to%20make%20a%20purchase!"
//             className="mt-[1rem] text-[30px] text-white flex items-center"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaWhatsapp className="mr-2" /> Chat us on WhatsApp
//           </a>
//         </div>
//         <div
//           data-aos="fade-down"
//           data-aos-anchor-placement="top-center"
//           data-aos-delay="200"
//         >
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               value={form.subject}
//               onChange={handleChange}
//               placeholder="Subject"
//               className="py-[0.7rem] mb-[1.5rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
//             />
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Message"
//               rows={4}
//               className="py-[0.7rem] mb-[1.5rem] rounded-md w-full outline-none text-white bg-gray-800 px-4"
//             ></textarea>
//             <button
//               type="submit"
//               className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-secondary/20 hover:bg-secondary/50 rounded-md px-4"
//             >
//               Email us
//             </button>
//           </form>
//           {status && <p className="text-white mt-2">{status}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importing the WhatsApp icon
import Banner from "../../assets/back.jpg"; // Background image

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/manywgdy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  // Corrected WhatsApp link with proper URL encoding
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in your products. Could you tell me more about your wigs, weaves, cosmetics, and beauty services? I would like to make a purchase!",
  );
  const whatsappLink = `https://wa.me/254723092252?text=${whatsappMessage}`;

  return (
    <div id="contact" className="pt-[5rem] pb-[3rem]" style={BannerImg}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <p className="heading__mini font-semibold">Hello,</p>
          <h1 className="heading__primary font-semibold">
            Elevate Your Style with Us!
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            Discover a range of high-quality wigs, weaves, and cosmetics
            designed to give you a flawless look. Shop now and enjoy
            personalized beauty services that suit your unique style.
          </p>
          <a
            href="tel:+254723092252"
            className="block mt-[2rem] mb-[2rem] text-[30px] text-white underline font-bold"
          >
            +254 723092252
          </a>
          {/* Corrected WhatsApp link */}
          <a
            href={whatsappLink}
            className="mt-[1rem] text-[30px] text-white flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" /> Chat us on WhatsApp
          </a>
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="py-[0.7rem] mb-[1.5rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="py-[0.7rem] mb-[1.5rem] rounded-md w-full outline-none text-white bg-gray-800 px-4"
            ></textarea>
            <button
              type="submit"
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-secondary/20 hover:bg-secondary/50 rounded-md px-4"
            >
              Email us
            </button>
          </form>
          {status && <p className="text-white mt-2">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
