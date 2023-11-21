import React from "react";
import Header from "../../components/header/Header";
import LogoSection from "./LogoSection";
import WhySection from "./WhySection";
import ImageSection from "./ImageSection";
import Features from "../../components/features/Features";
import Testimonials from "./Testimonials";
import Faq from "../../components/FAQ/Faq";

const Home = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <WhySection />
      <ImageSection />
      {/* <Features />
      <Testimonials />
      <Faq /> */}
    </>
  );
};

export default Home;
