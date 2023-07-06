import { BrowserRouter, Route, Routes } from "react-router-dom";
import Validation from "../pages/Validation/Validation"
import Register from "../components/Forms/RegisterForm/RegisterForm"

const AppRouter = () => {
  return (
 <BrowserRouter>
   <Routes>
    <Route path="/validation" element={<Validation />} />
    <Route path="/Register" element={<Register/>}/>
   </Routes>
 </BrowserRouter>
  );
};

export default AppRouter;
