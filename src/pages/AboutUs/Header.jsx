import { useState } from "react";
import Nav from "../../components/header/nav/Nav";
import HeaderImage from "../../components/aboutPageHeaderImage/HeaderImage";
import Menu from "../../components/menu/Menu";
import "./header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="header about-header">
      <div className="container">
        <Menu isActive={isActive} handleClick={handleClick} />
        <Nav isActive={isActive} handleClick={handleClick} />
        <section className="about-section">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum
            vitae nunc vitae neque .
          </p>
        </section>
      </div>

      <HeaderImage />
    </header>
  );
};

export default Header;
