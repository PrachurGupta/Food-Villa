const Title = () => (
    <a href="/" className="title-header">
      <img
        className="logo"
        alt="logo"
        src="https://i.pinimg.com/736x/61/d5/e5/61d5e572f0806ab8c335bf6d955e9283.jpg"
      />
      <h1>FooD Villa</h1>
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