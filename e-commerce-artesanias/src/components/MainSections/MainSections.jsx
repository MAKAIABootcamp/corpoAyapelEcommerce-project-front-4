import { useNavigate } from "react-router";
import seccion1 from "../../assets/Images/seccion1.jpg"
import seccion2 from "../../assets/Images/seccion2.jpg"
import seccion3 from "../../assets/Images/seccion3.jpg"
import "./MainSections.scss"
const MainSections = () => {
  const navigate = useNavigate();
  return <div className="sections_container">
    <div className="section1">
      <figure  className="section1__figure">
        <img src={seccion1} alt="Sección 1" />
      </figure>
      <h2 className="section1__name" > Novedades </h2>
    </div>
    <div className="section2"  onClick={() => {navigate(`/Testimonies`)}}>
      <figure className="section2__figure">
        <img src={seccion2} alt="Sección 2" />
      </figure>
      <h2 className="section2__name"> Testimonios de nuestros artesanos</h2>
    </div>
    <div className="section3">
      <figure className="section3__figure">
        <img src={seccion3} alt="Sección 3" />
      </figure>
      <h2 className="section3__name">Los más vendidos</h2>
    </div>
  </div>;
};

export default MainSections;
