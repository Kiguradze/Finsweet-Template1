import "./nav.css";
import logo from "../../../assets/logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="left-row">
        <div className="logo">
          <img src={logo} alt="header logo Finsweet" />
        </div>

        <ul className="nav-list">
          <li className="list-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="list-item">
            <a className="nav-link" href="#">
              Product
            </a>
          </li>
          <li className="list-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="list-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="list-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="list-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div className="right-row">
        <button>Clone Project</button>
      </div>
    </nav>
  );
};

export default Nav;
