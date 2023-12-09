import { useState } from "react";
import "./contact.css";
import Menu from "../../components/menu/Menu";
import Nav from "../../components/header/nav/Nav";
import ContactSection from "./ContactSection";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Menu isActive={isActive} handleClick={handleClick} />
      <div className="container">
        <Nav isActive={isActive} handleClick={handleClick} />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Contact;
