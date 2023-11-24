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
          <div className="socials">
            <svg
              className="fb"
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.78224 0.778809H7.11435C5.93508 0.778809 4.8041 1.24727 3.97022 2.08115C3.13635 2.91503 2.66788 4.046 2.66788 5.22528V7.89316H0V11.4503H2.66788V18.5647H6.22506V11.4503H8.89294L9.78224 7.89316H6.22506V5.22528C6.22506 4.98943 6.31875 4.76323 6.48553 4.59646C6.6523 4.42968 6.8785 4.33599 7.11435 4.33599H9.78224V0.778809Z"
                fill="#5B5B5B"
              />
            </svg>

            <svg
              className="inst"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_1049)">
                <path
                  d="M15.5562 1.77859H6.66327C4.20755 1.77859 2.2168 3.76935 2.2168 6.22507V15.118C2.2168 17.5737 4.20755 19.5645 6.66327 19.5645H15.5562C18.0119 19.5645 20.0027 17.5737 20.0027 15.118V6.22507C20.0027 3.76935 18.0119 1.77859 15.5562 1.77859Z"
                  stroke="#5B5B5B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6667 10.1113C14.7765 10.8514 14.65 11.6073 14.3054 12.2714C13.9608 12.9355 13.4156 13.4741 12.7473 13.8104C12.079 14.1468 11.3216 14.2639 10.5829 14.145C9.84417 14.0262 9.16176 13.6774 8.6327 13.1484C8.10364 12.6193 7.75487 11.9369 7.636 11.1982C7.51713 10.4595 7.63422 9.7021 7.97061 9.03378C8.30699 8.36545 8.84555 7.82022 9.50967 7.47561C10.1738 7.13101 10.9297 7.0046 11.6698 7.11435C12.4247 7.2263 13.1236 7.57808 13.6633 8.11774C14.203 8.65741 14.5548 9.35633 14.6667 10.1113Z"
                  stroke="#5B5B5B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.001 5.78043H16.0106"
                  stroke="#5B5B5B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1049">
                  <rect
                    width="21.3431"
                    height="21.3431"
                    fill="white"
                    transform="translate(0.438477)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              className="twt"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5645 0.668122C18.7129 1.26882 17.77 1.72826 16.7721 2.02874C16.2365 1.41292 15.5247 0.976433 14.733 0.778329C13.9412 0.580225 13.1078 0.630056 12.3453 0.921085C11.5828 1.21211 10.928 1.7303 10.4696 2.40555C10.0113 3.08081 9.7713 3.88055 9.78224 4.69663V5.58592C8.21942 5.62644 6.67084 5.27984 5.27441 4.57697C3.87798 3.8741 2.67706 2.83679 1.77859 1.55742C1.77859 1.55742 -1.77859 9.56107 6.22506 13.1182C4.39358 14.3614 2.21181 14.9848 0 14.8968C8.00365 19.3433 17.7859 14.8968 17.7859 4.66995C17.7851 4.42224 17.7613 4.17514 17.7147 3.93183C18.6224 3.03675 19.2629 1.90665 19.5645 0.668122Z"
                fill="#5B5B5B"
              />
            </svg>
          </div>

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
