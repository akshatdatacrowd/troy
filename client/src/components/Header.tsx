import logo from "./assets/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light m-0 p-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            <div className="d-flex">
              <img src={logo} alt="logo" className="mr-2" />
              <div>Troy</div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
