import React from "react";
import "./customerSupport.css";
import analiticsSvg from "../../assets/customerSupportAnalitics.svg";
import bestQualitySvg from "../../assets/customerSupportBestQuality.svg";
import moreClicksSvg from "../../assets/customerSupportMoreClicks.svg";

const CustomerSupport = () => {
  return (
    <section className="customer-support">
      <div className="container">
        <h1>Get the best out of your customer support with Finsweet</h1>
        <div className="customer-support-grid">
          <div className="customer-support-card">
            <div className="logo-background">
              <img src={analiticsSvg} alt="" />
            </div>
            <h2>Analytics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae nunc vitae neque
            </p>
          </div>
          <div className="customer-support-card">
            <div className="logo-background">
              <img src={bestQualitySvg} alt="" />
            </div>
            <h2>Best Quality</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae nunc vitae neque
            </p>
          </div>
          <div className="customer-support-card">
            <div className="logo-background">
              <img src={moreClicksSvg} alt="" />
            </div>
            <h2>More Clicks</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae nunc vitae neque
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
