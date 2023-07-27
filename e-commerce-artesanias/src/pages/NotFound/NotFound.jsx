import "../../pages/NotFound/NotFound.scss";
import notFoundImg from "../../assets/Images/NF.jpg"
const NotFound = () => {

  return (
    <div>
      <div className="notFoundContainer">
        <img src={notFoundImg} alt="artesanos" className="errorImage" />
        <div>
          <h1 className="errorTittle"> Error 404</h1>
          <h2 className="errorTittle"> Página no encontrada </h2>
        </div>

      </div>
    </div>
  )

};

export default NotFound;
