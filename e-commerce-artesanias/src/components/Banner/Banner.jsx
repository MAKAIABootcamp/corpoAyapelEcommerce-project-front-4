// import { useState, useEffect } from "react";
// import { getAllBanners } from "../../Services/servicesSanity";
// import { urlFor } from "../../sanityClient";
// import "../../components/Banner/Banner.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Obtiene los datos de los banners desde el endpoint
    axios
      .get("http://localhost:3000/banner")
      .then((response) => {
        setBanners(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  return (
    <div className="banner-container">
      {banners.length > 0 && (
        <div className="banner">
          <button className="prev-button" onClick={handlePrevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </button>
          <img
            className="slide"
            src={banners[currentSlide].imageUrl}
            alt={banners[currentSlide].title}
          />
          <button className="next-button" onClick={handleNextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;