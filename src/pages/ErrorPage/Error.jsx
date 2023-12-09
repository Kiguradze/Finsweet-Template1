import { useState } from "react";
import "./error.css";
import Menu from "../../components/menu/Menu";
import Nav from "../../components/header/nav/Nav";
import Content from "../../pages/ErrorPage/content";

const Error = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="pageNotfound">
      <Menu isActive={isActive} handleClick={handleClick} />
      <div className="container">
        <Nav isActive={isActive} handleClick={handleClick} />
      </div>
      <Content />
    </div>
  );
};

export default Error;
