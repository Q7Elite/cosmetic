import React from "react";
// import { ArrowUpIcon } from "@heroicons/react/solid";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import CosmeticsProducts from "./components/Cosmetics/CosmeticsProducts";
import Flowers from "./components/Flowers/Flowers";
import Services from "./components/services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import MapSection from "./components/Map/MapSection";
import Gallery from "./components/gallery/Gallery";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <CosmeticsProducts />
      <Flowers />
      <Services />
      <Banner />
      <Gallery />
      <Subscribe />
      <MapSection />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

      {/* Back to Top Button with Icon */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-2 bg-purple-500 text-white rounded-full shadow-lg"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default App;
