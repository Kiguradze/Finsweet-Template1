import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoIosClose } from "react-icons/io";
import Nav from "./nav/Nav";
import Menu from "../menu/Menu";
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

  return (
    <div className="header">
      <div className="container">
        <Menu isActive={isActive} handleClick={handleClick} />

        <Nav handleClick={handleClick} active={isActive} />

        <div className={image ? "hero-section" : "hero-section without-image"}>
          <div className="hero-text">
            {date && <span className="hero-date">{date}</span>}
            <h1>{title}</h1>
            <p>{desk}</p>

            {buttonLabel1 && buttonLabel2 && (
              <div className="buttons">
                <button className="free-btn">{buttonLabel1}</button>
                <button className="price-btn">{buttonLabel2}</button>
              </div>
            )}
            {link && (
              <a href={link} className="hero-link">
                Learn More
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.0857 6.5L8.29285 1.70718L9.70706 0.292969L16.9142 7.50008L9.70706 14.7072L8.29285 13.293L13.0858 8.5H0V6.5H13.0857Z"
                    fill="black"
                  />
                </svg>
              </a>
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
