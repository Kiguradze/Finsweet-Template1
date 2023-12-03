import React from "react";
import "./priceCard.css";

const PriceCard = ({ title, price, desk, primary, options }) => {
  return (
    <div className={`price-card ${primary ? "primary" : ""}`}>
      <div>
        <h1>{title}</h1>
        <div className="price">
          <span className="dollar">$</span>
          <span className="number-month">
            <span className="number">{price}</span>
            <span className="month">/mo</span>
          </span>
        </div>
        <p className="price-card-desk">{desk}</p>

        <ul>
          {options.map((option, index) => (
            <li key={index} className={option.primary ? "primary-option" : ""}>
              {primary ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                >
                  <path d="M2 8L8 14L20 2" stroke="#F24C27" strokeWidth="4" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                >
                  <path d="M2 8L8 14L20 2" stroke="#232ED1" strokeWidth="4" />
                </svg>
              )}
              {option}
            </li>
          ))}
        </ul>
      </div>
      <button>Get Started</button>
    </div>
  );
};

export default PriceCard;
