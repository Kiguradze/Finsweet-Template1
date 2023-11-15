import React from "react";
import Header from "../../components/header/Header";
import LogoSection from "./LogoSection";
import WhySection from "./WhySection";
import ImageSection from "./ImageSection";
import Features from "../../components/features/Features";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <WhySection />
      <ImageSection />
      <Features />
      <Testimonials />
    </>
  );
};

export default Home;
