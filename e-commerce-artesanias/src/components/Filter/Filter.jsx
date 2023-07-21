import { useDispatch } from "react-redux";
import "../Filter/Filter.scss";
import { actionFilterProductSync, actionGetProductAsync } from "../../redux/actions/ProductActions";
// import { filterProductsAsync, getProductsAsync } from '../../redux/productSlice';
const Filter = ({ setisFiltered }) => {

  const dispatch = useDispatch();
  // const onFiltered = (searchValue) => {
  //   console.log(searchValue);
  //   const searchParam = "category";
  //   setisFiltered(true);
  //   dispatch(actionFilterProductSync(searchValue));
  //   // dispatch(actionFilterProductAsync({ [searchParam]: searchValue }));

  // };
   const categories = [
    {
      id: 11,
      name: "Todos",
    },
    {
      id: 2,
      name: "Bandejas",
    },
    {
      id: 3,
      name: "Cajas",
    },
    {
      id: 4,
      name: "Canastos",
    },
    {
      id: 5,
      name: "Decoración",
    },
    {
      id: 6,
      name: "Lámparas",
    },
    {
      id: 7,
      name: "Materas",
    },
    {
      id: 8,
      name: "Mesas Auxiliares",
    },
    {
      id: 1,
      name: "Navidad",
    },
    {
      id: 9,
      name: "Papeleras",
    },
    {
      id: 10,
      name: "Para la Mesa",
    },
  ];
  
  const onFiltered = (searchValue) => {
    console.log(searchValue);
    const searchParam = "category";
    setisFiltered(true);
    
    // Si el valor de búsqueda es "Todos", pasa un valor vacío al filtro
    if (searchValue === "Todos") {
      dispatch(actionGetProductAsync());
      setisFiltered(false);
      // dispatch(actionFilterProductSync(""));
    } else {
      dispatch(actionFilterProductSync(searchValue));
    }
  };
  
  return <div className="ulContainer">
    <ul className="ulFilter">
      {categories.map((category) => (
        <li onClick={() => {
          onFiltered(category.name);
        }} key={category.id}> {category.name}  </li>
      ))}
    </ul>
  </div>;
};

export default Filter;
