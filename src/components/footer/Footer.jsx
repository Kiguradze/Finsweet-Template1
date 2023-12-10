import { Link } from "react-router-dom";
import Socials from "../socials/Socials";
import "./footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="finsweet-banner">
          <h2>Get started with Finsweet today</h2>
          <button className="footer-btn">View Pricing</button>
        </div>
        <div className="footer-main">
          <Socials />

          <div className="list">
            <ul className="company">
              <p>Company</p>
              <li className="list-item">
                <Link className="link" to="/product">
                  Product
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>

            <ul className="company">
              <p>Legal</p>
              <li className="list-item">
                <Link className="link" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="*">
                  404
                </Link>
              </li>
              <li className="list-item">
                <a className="link" href="#">
                  Protected Page
                </a>
              </li>
            </ul>

            <ul className="company">
              <p>Reach Us</p>
              <li className="list-item">
                <Link className="link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="list-item">
                <a className="link" href="#">
                  fs@finsweet.com
                </a>
              </li>
              <li className="list-item">
                <a className="link" href="#">
                  +1808 08 08
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-subscribe">
          <span>398 11th St, San Francisco</span>
          <form className="subscribe">
            <input type="text" placeholder="Enter your email" />

            <button className="footer-btn">Subscribe to our newsletter</button>
          </form>
        </div>
      </div>
      <p className="footer-copy">&copy; Copyright Unsaas {year}</p>
    </footer>
  );
};

export default Footer;
