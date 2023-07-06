import DetailsCards from "../components/Cards/DetailsCards/DetailsCards";
import ProductCards from "../components/Cards/ProductCards/ProductCards";
import Home from "../pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCards />} />
          <Route path="/productDetails/:name" element={<DetailsCards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
