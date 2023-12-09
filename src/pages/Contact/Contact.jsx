import React from "react";
import Nav from "../../components/header/nav/Nav";
import "./contact.css";
import ContactSection from "./ContactSection";

const Contact = () => {
  return (
    <div className="container">
      <Nav />
      <ContactSection />
    </div>
  );
};

export default Contact;
