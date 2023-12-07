import React from "react";
import "./teamSection.css";
import teamMembersData from "../../data/TeamMembers/teamMembers";
import MemberCard from "../../components/memberCard/MemberCard";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="our-team">
          <h1>Our Team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur dipiscing elit.</p>
        </div>
        <div className="team-members">
          {teamMembersData.map((member) => {
            return (
              <MemberCard
                key={member.id}
                img={member.img}
                role={member.role}
                name={member.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
