import { useState } from "react";
import featureData from "../../featureData/featureData";
import FeatureCard from "../featureCard/FeatureCard";
import "./features.css";
import feature3Asset from "../../assets/Feature 3 Asset.png";

const Features = () => {
  const [data, setData] = useState(featureData);

  return (
    <section className="features">
      <div className="container">
        <div className="feature-cards">
          {data.map((card, index) => (
            <FeatureCard
              key={index}
              img={card.img}
              background={card.background}
              borderRadius={card.borderRadius}
              span={card.span}
              title={card.title}
              desk={card.desk}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
