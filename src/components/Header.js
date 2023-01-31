import { useState } from "react";
import Logo from "../asset/img/Logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import useAuth from "../Utils/useAuth.js";

const Title = () => (
  
  <a href="/" className="title-header">
    <img className="h-28 p-2" alt="logo" src={Logo} />
    <h1>FooD Villa</h1>
  </a>
);

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedIn = useAuth();
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <button id="demo">Log In</button>
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
