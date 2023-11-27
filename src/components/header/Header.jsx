import { useState, useEffect } from "react";
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
            <ul className="menu-list">
              <li className="menu-list-item">
                <a className="menu-link" href="#">
                  Home
                </a>
              </li>
              <li className="menu-list-item">
                <a className="menu-link" href="#">
                  Product
                </a>
              </li>
              <li className="menu-list-item">
                <a className="menu-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="menu-list-item">
                <a className="menu-link" href="#">
                  About Us
                </a>
              </li>
              <li className="menu-list-item">
                <a className="menu-link" href="#">
                  Contact
                </a>
              </li>
              <li className="menu-list-item">
                <a className="menu-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <IoIosClose onClick={handleClick} className="close" />
        </div>

        <Nav handleClick={handleClick} active={isActive} />

        <div className="hero-section">
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

          <div className="hero-img">
            <img src={image} alt="hero section image" />
          </div>
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
