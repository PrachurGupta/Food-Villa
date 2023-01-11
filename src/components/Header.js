const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://static.vecteezy.com/system/resources/previews/011/405/724/original/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg"
      />
    </a>
  );
  
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;