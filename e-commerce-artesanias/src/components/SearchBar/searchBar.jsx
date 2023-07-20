import  { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { actionGetProductAsync, actionSearchProductAsync } from "../../redux/actions/ProductActions";
import { numberToMoney } from "../../Services/utilities";
// import { actionSearchProductSync } from "../../redux/actions/ProductActions";
import '../searchBar/searchBar.scss';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const {products} = useSelector((store) => store.productStore);
    console.log(products);

    // useEffect(() => {
    //   dispatch(actionGetProductAsync());
    // }, [dispatch]);


    const handleSearch = () => {
      if (searchTerm.trim() === "") {
        Swal.fire("Error", "Ingresa un término de búsqueda", "error");
        return;
      }
  
      dispatch(actionSearchProductAsync(searchTerm));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleSearch();
    };
    useEffect(() => {
      dispatch(actionSearchProductAsync());
    }, [dispatch]);

    return (
          <div className="container">
            <div>
              <form onSubmit={handleSubmit} className="searchForm">
                <input type="text" className="inputSearchForm"
                    placeholder="Buscar artesanía"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                  <button onClick={handleSearch} className="button"> Buscar </button>
              </form>
            </div>
            <div>
              {products.map((product) => (
                <div key={product.id} className="cardSearch" >
                  <div className="image">
                    <img src={product.img["1"]} alt="imagen" />
                  </div>
                    <h5>{product.product_name}</h5>
                    <span>{numberToMoney(product.price)}</span>

                </div>
              ))}
          </div>
        </div>
      );
    };
    export default SearchBar;