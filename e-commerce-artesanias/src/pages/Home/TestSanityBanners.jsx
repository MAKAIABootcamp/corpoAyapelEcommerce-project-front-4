import { useEffect, useState } from 'react';
import { getAllBanners } from '../../Services/servicesSanity';
import { urlFor } from '../../sanityClient';

const TestSanityBanners = () => {
  const [banners, setBanners] = useState([]);

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

  return (
    <div>
      <h1>Banners from Sanity</h1>
      {banners.map((banner) => (
        <div key={banner._id}>
          <h2>{banner.title}</h2>
          {/* Use the urlFor function to get the image URL for each image */}
          {Array.from({ length: 2 }, (_, index) => index + 1).map((imageIndex) => (
            banner[`image${imageIndex}`]?.asset?._ref && (
              <div key={`image-${imageIndex}`}>
                {/* <h3>Image {imageIndex}</h3> */}
                <img
                  src={urlFor(banner[`image${imageIndex}`].asset._ref).url()}
                  alt={`Image ${imageIndex} of ${banner.title}`}
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
            )
          ))}
          {/* Render other banner properties here */}
          <div>
            <h3>Descripción</h3>
            <p>{banner.description}</p>
            {/* ... Render other properties ... */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestSanityBanners;
