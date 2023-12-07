import React from "react";
import "./aboutUs.css";
import Nav from "../../components/header/nav/Nav";
import Header from "./Header";
import AbouSection from "./AbouSection";
import TeamSection from "./TeamSection";

const AboutUs = () => {
  return (
    <>
      <Header />
      <AbouSection />
      <TeamSection />
    </>
  );
};

export default AboutUs;
