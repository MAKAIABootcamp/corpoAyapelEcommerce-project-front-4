import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getNewProductAsync } from "../../redux/actions/ProductActions";
import seccion1 from "../../assets/Images/seccion1.jpg"
import seccion2 from "../../assets/Images/seccion2.jpg"
import seccion3 from "../../assets/Images/seccion3.jpg"
import "./MainSections.scss"
import { dataBase } from "../../Firebase/FirebaseConfig";
// import { firebaseConfig }  from "../../Firebase/FirebaseConfig"
// const [masVendidos, setMasVendidos] = useState([]);
const MainSections = ({ setisFiltered }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const { products } = useSelector(state => state.productStore);

  const getNewProducts = () => {
    dispatch(getNewProductAsync());
    setisFiltered(true);
  }

  // const comprasRef = firebase.firestore().collection('compras');
  // const query = comprasRef.orderBy('cantidad_vendida', 'desc').limit(4);
//  const getMasVendidos = async (cantidad) => {
//     try {
//       // Realiza la consulta para obtener los documentos de la colección "compras" ordenados por "cantidad_vendida" en orden descendente y limitados a la cantidad especificada.
//       const q = query(collection(dataBase, "user"), orderBy("quantity", "desc"), limit(4));
//       const querySnapshot = await getDocs(q);
  
//       // Procesa los resultados y devuelve un array con los productos más vendidos
//       const masVendidos = querySnapshot.docs.map((doc) => doc.data().producto);
  
//       return masVendidos;
//     } catch (error) {
//       console.error("Error al obtener los más vendidos:", error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     // Llama a la función para obtener los productos más vendidos cuando se monta el componente
//     const fetchMasVendidos = async () => {
//       const productosMasVendidos = await getMasVendidos(10); // Obtén los 10 productos más vendidos
//       setMasVendidos(productosMasVendidos);
//     };
// });

  return (
    <div className="sections-container">
      <div className="section1">
        <figure className="section1__figure">
          <img src={seccion1} alt="Sección 1" className="image-wrapper" />
        </figure>
        <h2 className="section1__name" onClick={getNewProducts}> Novedades </h2>
      </div>
      <div className="section2" onClick={() => { navigate(`/Testimonies`) }}>
        <figure className="section2__figure">
          <img src={seccion2} alt="Sección 2" className="image-wrapper" />
        </figure>
        <h2 className="section2__name"> Testimonios de nuestros artesanos</h2>
      </div>
      <div className="section3">
        <figure className="section3__figure">
          <img src={seccion3} alt="Sección 3" className="image-wrapper" />
        </figure>
        <h2 className="section3__name">Los más vendidos</h2>
      </div>
      {/* {masVendidos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))} */}
    </div>
  )
};

export default MainSections;
