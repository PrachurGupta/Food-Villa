import { useState } from "react";
import Logo from "../asset/img/Logo.jpg";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/" className="title-header">
    <img className="logo" alt="logo" src={Logo} />
    <h1>FooD Villa</h1>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
