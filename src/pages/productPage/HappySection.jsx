import React from "react";
import "./happySection.css";
import happyImage from "../../assets/happySection.png";

const HappySection = () => {
  return (
    <section className="happy-section">
      <div className="container">
        <img src={happyImage} alt="" />
      </div>
    </section>
  );
};

export default HappySection;
