import React from "react";
import Header from "../../components/header/Header";
import LogoSection from "./LogoSection";
import WhySection from "./WhySection";
import ImageSection from "./ImageSection";
import Features from "../../components/features/Features";
import Testimonials from "./Testimonials";
import Faq from "../../components/FAQ/Faq";
import Footer from "../../components/footer/Footer";
import heroImage from "../../assets/heroImage.png";
import featureData from "../../data/featureData/featureData";

const Home = () => {
  return (
    <>
      <Header
        title={"Run Your Entire Customer Support Remotely"}
        desk={
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum vitae nunc vitae neque"
        }
        image={heroImage}
        buttonLabel1={"Get Started For Free"}
        buttonLabel2={"Pricing"}
        background={true}
      />
      <LogoSection />
      <WhySection />
      <ImageSection />
      <Features data={featureData} />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
