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
                <a className="link" href="#">
                  Product
                </a>
              </li>
              <li className="list-item">
                <a className="link" href="#">
                  Pricing
                </a>
              </li>
              <li className="list-item">
                <a className="link" href="#">
                  About Us
                </a>
              </li>
            </ul>

            <ul className="company">
              <p>Legal</p>
              <li className="list-item">
                <a className="link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="list-item">
                <a className="link" href="#">
                  404
                </a>
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
                <a className="link" href="#">
                  Contact Us
                </a>
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
