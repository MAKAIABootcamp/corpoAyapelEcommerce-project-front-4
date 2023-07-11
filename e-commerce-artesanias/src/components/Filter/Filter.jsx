import { useDispatch } from "react-redux";
import "../Filter/Filter.scss";
import { actionFilterProductSync, actionGetProductAsync } from "../../redux/actions/ProductActions";
// import { filterProductsAsync, getProductsAsync } from '../../redux/productSlice';
import { categories } from '../../Services/Services';
const Filter = ({ setisFiltered }) => {

  const dispatch = useDispatch();
  // const onFiltered = (searchValue) => {
  //   console.log(searchValue);
  //   const searchParam = "category";
  //   setisFiltered(true);
  //   dispatch(actionFilterProductSync(searchValue));
  //   // dispatch(actionFilterProductAsync({ [searchParam]: searchValue }));

  // };

  const onFiltered = (searchValue) => {
    console.log(searchValue);
    const searchParam = "category";
    setisFiltered(true);
    
    // Si el valor de búsqueda es "Todos", pasa un valor vacío al filtro
    if (searchValue === "Todos") {
      dispatch(actionGetProductAsync());
      // dispatch(actionFilterProductSync(""));
    } else {
      dispatch(actionFilterProductSync(searchValue));
    }
  };
  
  return <div className="ulContainer">
    <ul>
    <li onClick={() => onFiltered("Todos")}>Todos</li>
      {categories.map((category) => (
        <li onClick={() => {
          onFiltered(category.name);
        }} key={category.id}> {category.name}  </li>
      ))}
    </ul>
  </div>;
};

export default Filter;
