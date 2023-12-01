import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import Nav from "./nav/Nav";
import "./header.css";

const Header = ({
  title,
  desk,
  image,
  buttonLabel1,
  buttonLabel2,
  background,
  date,
  link,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [isActive]);

  return (
    <div className="header">
      <div className="container">
        <div className={`menu ${isActive ? "isActive" : ""}`}>
          <nav className="menu-items">
            <ul className="menu-list" onClick={handleClick}>
              <li className="menu-list-item">
                <NavLink to="/" exact className="menu-link" href="#">
                  Home
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink to="/product" className="menu-link" href="#">
                  Product
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink to="/pricing" className="menu-link" href="#">
                  Pricing
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink to="/about" className="menu-link" href="#">
                  About Us
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink to="/contact" className="menu-link" href="#">
                  Contact
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink to="/blog" className="menu-link" href="#">
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
          <IoIosClose onClick={handleClick} className="close" />
        </div>

        <Nav handleClick={handleClick} active={isActive} />

        <div className={image ? "hero-section" : "hero-section without-image"}>
          <div className="hero-text">
            <h1>{title}</h1>
            <p>{desk}</p>

            {buttonLabel1 && buttonLabel2 && (
              <div className="buttons">
                <button className="free-btn">{buttonLabel1}</button>
                <button className="price-btn">{buttonLabel2}</button>
              </div>
            )}
          </div>

          {image && (
            <div className="hero-img">
              <img src={image} />
            </div>
          )}
          {background && (
            <>
              <div className="background hero-background"></div>
              <div className="background hero-background2"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
