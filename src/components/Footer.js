import {useContext } from "react";
import UserContext from "../Utils/UserContext";

const Footer = () => {
  const {user } = useContext(UserContext);
    return <h4 className="p-3 mt-10 mb-5">Developed with ❤ by {user.name} - {user.email}</h4>;
  };

export default Footer;