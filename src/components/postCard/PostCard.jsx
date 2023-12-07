import React from "react";
import "./postCard.css";

const PostCard = ({ img, title, desk, link }) => {
  return (
    <div className="post-card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{desk}</p>
      <a href={link} className="hero-link">
        Learn More
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0857 6.5L8.29285 1.70718L9.70706 0.292969L16.9142 7.50008L9.70706 14.7072L8.29285 13.293L13.0858 8.5H0V6.5H13.0857Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  );
};

export default PostCard;
