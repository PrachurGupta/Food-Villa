import { useState } from "react";
import Logo from "../asset/img/Logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import useAuth from "../Utils/useAuth.js";

const Title = () => (
  <a href="/" className="title-header">
    <img className="logo" alt="logo" src={Logo} />
    <h1>FooD Villa</h1>
  </a>
);

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedIn = useAuth();
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
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
