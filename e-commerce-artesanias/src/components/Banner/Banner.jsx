import { useState, useEffect } from "react";
import { getAllBanners } from "../../Services/servicesSanity";
import { urlFor } from "../../sanityClient";
import "./Banner.scss";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Fetch all banners from Sanity when the component mounts
    const fetchBanners = async () => {
      try {
        const bannersData = await getAllBanners();
        setBanners(bannersData);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
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
            Previous
          </button>
          <img
            className="slide"
            src={urlFor(banners[currentSlide].image1.asset._ref).url()}
            alt={`Image 1 of ${banners[currentSlide].title}`}
          />
          <button className="next-button" onClick={handleNextSlide}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
