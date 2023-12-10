import { useState } from "react";
import "./privacy.css";
import Menu from "../../components/menu/Menu";
import Nav from "../../components/header/nav/Nav";
import PrivacyContent from "./PrivacyContent";
import Footer from "../../components/footer/Footer";

const Privacy = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Menu isActive={isActive} handleClick={handleClick} />
      <div className="container">
        <Nav isActive={isActive} handleClick={handleClick} />
        <PrivacyContent />
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
