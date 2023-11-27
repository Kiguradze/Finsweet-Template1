import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Nav = ({ handleClick, active }) => {
  return (
    <nav>
      <div className="left-row">
        <div className="logo">
          <img src={logo} alt="header logo Finsweet" />
        </div>

        <ul className="nav-list">
          <li className="list-item">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/product" className="nav-link">
              Product
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/pricing" className="nav-link">
              Pricing
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </li>
        </ul>
      </div>

      <RxHamburgerMenu
        className={`hamburger ${active ? "isActive" : ""}`}
        onClick={handleClick}
      />

      <div className="right-row">
        <button>Clone Project</button>
      </div>
    </nav>
  );
};

export default Nav;
