import { useState, useEffect } from "react";
import { getAllBanners } from "../../Services/servicesSanity";
import { urlFor } from "../../sanityClient";
import "./Banner.scss";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
    // Set a timer to change the banner every 10 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
      setActiveImage((prevImage) => (prevImage + 1) % banners.length);
    }, 10000); // 10 seconds in milliseconds

    // Clear the timer when the component unmounts or when the banners change
    return () => clearInterval(timer);
  }, [banners.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    );
    setActiveImage((prevImage) => (prevImage === 0 ? banners.length - 1 : prevImage - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    setActiveImage((prevImage) => (prevImage + 1) % banners.length);
  };

  const handleSelectImage = (index) => {
    setCurrentSlide(index);
    setActiveImage(index);
  };

  return (
    <div className="banner-container">
      {banners.length > 0 && (
        <div className="banner">
          <button className="prev-button" onClick={handlePrevSlide}>
            {/* Previous button SVG */}
          </button>
          <img
            className="slide"
            src={urlFor(banners[currentSlide].image1.asset._ref).url()}
            alt={`Image 1 of ${banners[currentSlide].title}`}
          />
          <button className="next-button" onClick={handleNextSlide}>
            {/* Next button SVG */}
          </button>
          <div className="navigation-images">
            {banners.map((banner, index) => (
              <img
                key={index}
                className={`mobile-image ${activeImage === index ? "active" : ""}`}
                src={urlFor(banner.image2.asset._ref).url()}
                alt={`Image ${index + 2}`}
                onClick={() => handleSelectImage(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
