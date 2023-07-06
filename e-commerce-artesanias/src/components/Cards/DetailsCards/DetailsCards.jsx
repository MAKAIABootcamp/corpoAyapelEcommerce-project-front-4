import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../DetailsCards/DetailsCards.scss";
const DetailsCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    infoProduct();
  }, [name]);

  const [productInfo, setProductInfo] = useState();
  const product = useSelector((store) => store.productStore);

  const infoProduct = () => {
    const dataProduct = product.products.slice();
    console.log(dataProduct);
    const getProduct = dataProduct.find((product) => product.product_name === name);
    setProductInfo(getProduct);
  };

  return (
    <div>
      {productInfo ? (
        <div className="containerDetails">
          <div className="detailsImages">
            {/* <img  className="img1" src={productInfo.img["1"]} />
            <img className="otherimg" src={productInfo.img["2"]} />
            <img className="otherimg"src={productInfo.img["3"]} />
            <img className="otherimg" src={productInfo.img["4"]} />
            <div className="detailsImages"> */}
            {Object.values(productInfo.img).map((imageUrl, index) => (
                <img
                  key={index}
                  className={`otherimg ${index === 0 ? 'mainImage' : ''}`}
                  src={imageUrl}
                  alt={`Image ${index}`}
                />
            ))}
              </div>
          <div className="detailsInfo">
            <h1>{productInfo.product_name} </h1>
            <h3> {productInfo.price} </h3>
            <h5>{productInfo.decription} </h5>
            <button className="button"> Agregar al carro </button>
          </div>
        </div>
      ) : (
        <div>Producto no encontrado</div>
      )}
    </div>
  );
};

export default DetailsCards;
