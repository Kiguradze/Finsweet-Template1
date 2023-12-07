import React from "react";
import "./memberCard.css";
import Socials from "../socials/Socials";

const MemberCard = () => {
  return (
    <div className="member-card">
      <img src="" alt="" />
      <span className="role"></span>
      <span className="name"></span>
      <Socials />
    </div>
  );
};

export default MemberCard;
