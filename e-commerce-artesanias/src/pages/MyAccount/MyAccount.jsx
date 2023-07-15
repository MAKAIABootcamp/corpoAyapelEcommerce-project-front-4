import Footer from "../../components/Footer/Footer";
import ShippingAddress from "../../components/Forms/MyAccountForm/ShippingAddressForm/ShippingAddress";
import NavBar from "../../components/Layout/NavBar/NavBar";

const MyAccount = () => {
    return (
    <div>MyAccount
      <div>
        <NavBar/>
        <ShippingAddress/>

        <Footer/>
      </div>
    </div>
    );
  };
  
  export default MyAccount;
  