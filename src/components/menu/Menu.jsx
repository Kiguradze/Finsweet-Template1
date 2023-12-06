import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import "./menu.css";

const Menu = ({ isActive, handleClick }) => {
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
    <div className={`menu ${isActive ? "isActive" : ""}`}>
      <nav className="menu-items">
        <ul className="menu-list" onClick={handleClick}>
          <li className="menu-list-item">
            <NavLink to="/" exact className="menu-link">
              Home
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink to="/product" className="menu-link">
              Product
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink to="/pricing" className="menu-link">
              Pricing
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink to="/about" className="menu-link">
              About Us
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink to="/contact" className="menu-link">
              Contact
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink to="/blog" className="menu-link">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <IoIosClose onClick={handleClick} className="close" />
    </div>
  );
};

export default Menu;
