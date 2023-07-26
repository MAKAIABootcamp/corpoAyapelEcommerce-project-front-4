import { useDispatch, useSelector } from "react-redux";
import "../Filter/Filter.scss";
import { actionFilterProductSync, actionGetProductAsync } from "../../redux/actions/ProductActions";
import { useEffect, useState } from "react";
// import { filterProductsAsync, getProductsAsync } from '../../redux/productSlice';


const Filter = ({ setisFiltered }) => {
  const dispatch = useDispatch();  
  const [categories, setCategories] = useState([]);
  const { products } = useSelector(state => state.productStore);

  useEffect(() => {
    // Función auxiliar para obtener todas las categorías de los productos
    const getAllCategories = () => {
      const allCategories = products.flatMap((product) => [
        product.category,
        product.category2,
        product.category3,
      ]);

      // Filtrar las categorías para eliminar valores undefined y duplicados
      return allCategories.filter((category) => category !== undefined && category !== null);
    };

    // Obtener todas las categorías y eliminar duplicados
    const uniqueCategories = Array.from(new Set(getAllCategories()));
    setCategories(uniqueCategories);
  }, [products]);

const onFiltered = (searchValue) => {
    console.log(searchValue);
    const searchParam = "category";
    setisFiltered(true);
// Si el valor de búsqueda es "Todos", pasa un valor vacío al filtro
if (searchValue === "Todos") {
  dispatch(actionGetProductAsync());
  setisFiltered("Todos");
} else {
  const filteredProducts = products.filter((product) => {
    // Verificar si la categoría está presente en alguna de las propiedades
    return (
      product.category === searchValue ||
      product.category2 === searchValue ||
      product.category3 === searchValue
      // Agrega más propiedades de categoría según sea necesario
    );
  });
  dispatch(actionFilterProductSync(searchValue));
  // dispatch(actionFilterProductSync(filteredProducts));
}
};




return <div className="ulContainer">
  <ul className="ulFilter">
    {/* {categories.map((category) => (
        <li onClick={() => {
          onFiltered(category.name);
        }} key={category.id}> {category.name}  </li>
      ))} */}
    <li onClick={() => onFiltered("Todos")}> Todos </li>
    {categories.map((category, index) => (
      <li key={index} onClick={() => onFiltered(category)}>
        {category}
      </li>
    ))}
  </ul>
</div>;
};

export default Filter;
