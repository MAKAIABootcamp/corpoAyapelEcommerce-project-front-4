import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = ({ type }) => {

  const navegate = useNavigate();

  useEffect(() => {
    if (!type) {
      navegate('/')
    }
  }, []);

  return <div>Admin</div>;
};

export default Admin;
