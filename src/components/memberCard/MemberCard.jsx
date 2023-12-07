import React from "react";
import "./memberCard.css";
import Socials from "../socials/Socials";

const MemberCard = ({ img, role, name }) => {
  return (
    <div className="member-card">
      <img src={img} alt="" />
      <span className="role">{role}</span>
      <span className="name">{name}</span>
      <Socials />
    </div>
  );
};

export default MemberCard;
