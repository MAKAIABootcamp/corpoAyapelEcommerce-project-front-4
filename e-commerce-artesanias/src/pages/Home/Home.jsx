import NavBar from "../../components/Layout/NavBar/NavBar";
import ProductCards from "../../components/Cards/ProductCards/ProductCards";
import MainSections from "../../components/MainSections/MainSections";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  return <div>
    <NavBar/>
    <MainSections/>
    <Filter/>
    <ProductCards/>
  </div>;
};

export default Home;
