import NavBar from '../../components/Layout/NavBar/NavBar';
import ProductCards from '../../components/Cards/ProductCards/ProductCards';
import Footer from '../../components/Footer/Footer';
import MainSections from '../../components/MainSections/MainSections';
import Filter from '../../components/Filter/Filter';
import { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import { useDispatch } from 'react-redux';
import TestSanity from '../../components/Sanity/TestNotUsed/TestSanity';
import TestSanityBanners from '../../components/Sanity/TestNotUsed/TestSanityBanners';
import TestSanitySearch from '../../components/Search/TestSanitySearch';

const Home = () => {
  const [isFiltered, setisFiltered] = useState(false);

  return (
    <div>
      <Banner />
      <MainSections setisFiltered={setisFiltered}/>
      <Filter setisFiltered={setisFiltered} />
      <ProductCards isFiltered={isFiltered} />
      {/* <TestSanity/>
    <TestSanityBanners/> */}
    </div>
  );
};

export default Home;
