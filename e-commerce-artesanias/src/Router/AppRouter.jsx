import { BrowserRouter, Route, Routes } from "react-router-dom";
import Validation from "../pages/Validation/Validation"
import Register from "../components/Forms/RegisterForm/RegisterForm"
import DetailsCards from "../components/Cards/DetailsCards/DetailsCards";
import ProductCards from "../components/Cards/ProductCards/ProductCards";

const AppRouter = () => {
  return (
 <BrowserRouter>
   <Routes>
    <Route path="/validation" element={<Validation />} />
    <Route path="/Register" element={<Register/>}/>
    <Route path="/ProductCards" element={<ProductCards />} />
    <Route path="/productDetails/:name" element={<DetailsCards />} />
   </Routes>
 </BrowserRouter>
)}

export default AppRouter;
