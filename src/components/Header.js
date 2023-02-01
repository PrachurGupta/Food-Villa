import { useState } from "react";
import Logo from "../asset/img/Logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import useAuth from "../Utils/useAuth.js";

const Title = () => (
  <a href="/" className="title-header">
    <img className="h-28 p-2" alt="logo" src={Logo} />
    <h1 className="text-pink-700 font-bold text-4xl font-serif ">FooD Villa</h1>
  </a>
);

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedIn = useAuth();
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items ">
        <ul className="flex py-10 text-pink-400">
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
      <h1 className="m-10 ">{isOnline ? "" : "🔴"}</h1>
      <button
        className="px-4 py-1 m-2 mr-5 bg-pink-400 hover:bg-pink-500 text-white rounded-full border hover:border-pink-600"
        id="demo"
      >
        Log In
      </button>
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
