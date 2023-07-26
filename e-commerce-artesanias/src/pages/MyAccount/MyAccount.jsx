import Footer from "../../components/Footer/Footer";
import BillingAddress from "../../components/Forms/MyAccountForm/BillingAddressForm/BillingAddress";
import ShippingAddress from "../../components/Forms/MyAccountForm/ShippingAddressForm/ShippingAddress";
import NavBar from "../../components/Layout/NavBar/NavBar";
import Orders from "../../components/Forms/MyAccountForm/OrdersForm/Orders";
import "../../pages/MyAccount/MyAccount.scss";

const MyAccount = () => {
    return (
    <div>
      <div className="page-content">
        <Orders/>
        <ShippingAddress/>
        <BillingAddress/>
      </div>
    </div>
    );
  };
  
  export default MyAccount;
  