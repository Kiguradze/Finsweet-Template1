import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import Nav from "./nav/Nav";
import "./header.css";
import heroImage from "../../assets/heroImage.png";

const Header = () => {
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
            <h1>Run Your Entire Customer Support Remotely</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae nunc vitae neque
            </p>

            <div className="buttons">
              <button className="free-btn">Get Started For Free</button>
              <button className="price-btn">Pricing</button>
            </div>
          </div>

          <div className="hero-img">
            <img src={heroImage} alt="hero section image" />
          </div>
          <div className="background hero-background"></div>
          <div className="background hero-background2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
