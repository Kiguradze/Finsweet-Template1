import React from "react";
import "./postCard.css";

const PostCard = ({ img, title, desk, link }) => {
  return (
    <div className="post-card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{desk}</p>
      <a href={link}></a>
    </div>
  );
};

export default PostCard;
