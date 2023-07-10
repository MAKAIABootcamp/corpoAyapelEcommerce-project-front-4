import { useDispatch } from "react-redux";
import "../Filter/Filter.scss";
import { actionFilterProductAsync } from "../../redux/actions/ProductActions";
import {categories}  from '../../Services/Services';
const Filter = () => {
  const dispatch = useDispatch();
  const onFiltered = (searchValue) => {
    const searchParam = "category";
    dispatch(actionFilterProductAsync(searchParam, searchValue));
  };
  return <div className="ulContainer">
   <ul>
        {categories.map((category) => (
        <li  onClick={() => {
          onFiltered(category.nombre);
        }}> {category.name}  </li>
        ))}
      </ul>
        </div>;
};

export default Filter;
