import Nav from "./nav/Nav";
import "./header.css";
import heroImage from "../../assets/heroImage.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Nav />

        <div className="hero-section">
          <div className="hero-text">
            <h1>Run Your Entire Customer Support Remotely</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae nunc vitae neque
            </p>

            <div className="buttons">
              <button className="free-btn">Get Started For Free</button>
              <button className="price-btn">Pricing</button>
            </div>
          </div>

          <div className="hero-img">
            <img src={heroImage} alt="hero section image" />
          </div>
          <div className="hero-background"></div>
          <div className="hero-background2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
