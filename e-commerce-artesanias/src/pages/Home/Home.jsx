import NavBar from "../../components/Layout/NavBar/NavBar";
import ProductCards from "../../components/Cards/ProductCards/ProductCards";
import Footer from "../../components/Footer/Footer"
import MainSections from "../../components/MainSections/MainSections";
import Filter from "../../components/Filter/Filter";
import { useState } from "react";
import Banner from "../../components/Banner/Banner"

const Home = () => {
  const [isFiltered , setisFiltered ]= useState(false)
  return <div>
    <NavBar/>
    <MainSections/>
    <Filter setisFiltered={setisFiltered}/>
    <ProductCards isFiltered={isFiltered}/>
    <Footer/>
    <Banner/>
    <ProductCards/>
  </div>;
};

export default Home;
