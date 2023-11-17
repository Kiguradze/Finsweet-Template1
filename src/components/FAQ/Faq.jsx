import { useState } from "react";
import faqData from "../../FAQData/faqData";
import "./faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleActive = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq">
      <div className="container">
        <h1 className="faq-header">FAQ</h1>
        <ul className="faq-list">
          {faqData.map((item, index) => (
            <li
              className="list-item"
              onClick={() => toggleActive(index)}
              key={index}
            >
              <div
                className={`accordion-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <span className="list-number">{item.number}</span>
                <div className="list-content">
                  <h3 className="list-name">{item.title}</h3>
                  <p
                    className={`list-desk ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    {item.desk}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
