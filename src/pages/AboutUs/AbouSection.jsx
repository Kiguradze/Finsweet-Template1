import React from "react";
import "./aboutSection.css";
import aboutSectionImage from "../../assets/aboutSectionImage.png";

const AbouSection = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>Finsweet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
          eu lorem rutrum tempus. Integer tincidunt tellus quis est tincidunt
          auctor.
        </p>
        <div className="about-image">
          <img src={aboutSectionImage} alt="" />
        </div>
        <p className="desk">
          Phasellus scelerisque eros felis, ut lobortis ipsum mattis
          ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada sed
          dolor. Pellentesque facilisis condimentum nunc, nec placerat eros
          aliquam lobortis. Nullam non bibendum neque, nec sagittis risus. Proin
          est metus, bibendum at maximus quis, placerat id sapien. Fusce ipsum
          quam, placerat sit amet mauris vitae, suscipit ultrices turpis. Etiam
          ac eros est. Quisque id rhoncus dolor, eget gravida ante. Integer
          commodo id lacus at fringilla.
          <span>
            <br />
            <br />
            Phasellus scelerisque eros felis, ut lobortis ipsum mattis
            ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada sed
            dolor. Pellentesque facilisis
          </span>
        </p>
      </div>
    </section>
  );
};

export default AbouSection;
