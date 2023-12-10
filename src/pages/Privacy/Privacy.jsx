import React from "react";
import "./privacy.css";
import Menu from "../../components/menu/Menu";
import Nav from "../../components/header/nav/Nav";
import PrivacyContent from "./PrivacyContent";

const Privacy = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <Nav />
        <PrivacyContent />
      </div>
    </>
  );
};

export default Privacy;
