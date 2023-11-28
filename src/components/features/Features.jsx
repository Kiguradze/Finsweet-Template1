import FeatureCard from "../featureCard/FeatureCard";
import "./features.css";

const Features = ({ data }) => {
  return (
    <section className="features">
      <div className="container">
        <div className="feature-cards">
          {data?.map((card, index) => (
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
