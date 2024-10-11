import React from "react";

const MapSection = () => {
  return (
    <div id="map" className="w-[80%] mx-auto mt-[2rem]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15971.89577445539!2d36.88686386679192!3d-0.8444947623749662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f393b1001bc93%3A0x962d69d441ed7915!2sGithiga%2C%20Kenya!5e0!3m2!1sen!2sus!4v1696760921620!5m2!1sen!2sus"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default MapSection;
