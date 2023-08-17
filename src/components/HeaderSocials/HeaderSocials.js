import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./HeaderSocials.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hemaxigoyani/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/HemaxiGoyani" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
