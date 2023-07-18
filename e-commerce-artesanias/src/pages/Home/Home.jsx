import NavBar from "../../components/Layout/NavBar/NavBar";
import ProductCards from "../../components/Cards/ProductCards/ProductCards";
import Footer from "../../components/Footer/Footer"
import MainSections from "../../components/MainSections/MainSections";
import Filter from "../../components/Filter/Filter";
import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner"
import { useDispatch } from "react-redux";
import { actionGetCartAsync } from "../../redux/actions/cartActions";

const Home = () => {
  const [isFiltered , setisFiltered ]= useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetCartAsync())
  }, [])
  
  return (
  <div>
    <NavBar/>
    <Banner/>
    <MainSections/>
    <Filter setisFiltered={setisFiltered}/>
    <ProductCards isFiltered={isFiltered}/>
    <Footer/>

  </div>
  )
};

export default Home;
