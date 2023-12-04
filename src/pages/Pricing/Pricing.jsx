import React from "react";
import Header from "../../components/header/Header";
import PriceCard from "../../components/priceCard/PriceCard";
import Faq from "../../components/FAQ/Faq";
import "./pricing.css";
import data from "../../data/priceCardsData/priceCardsData";

const Pricing = () => {
  return (
    <>
      <Header
        title="Pricing"
        desk="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque ."
      />
      <div className="price-cards">
        <div className="container">
          {data.map((card, index) => (
            <React.Fragment key={index}>
              <PriceCard
                title={card.title}
                price={card.price}
                desk={card.desk}
                options={card.options}
                primary={card.primary}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <Faq />
    </>
  );
};

export default Pricing;
