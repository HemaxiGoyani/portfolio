import React from "react";
import CTA from "./CTA";
import ME from "../../assets/hemaxi.png";
import HeaderSocials from "../HeaderSocials/HeaderSocials";
import "./Header.css";

const Header = () => {
  return (
    <header data-section id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hemaxi Goyani</h1>
        <h3>Web Application Developer</h3>
        <h5 className="text-light header__container-content">
          Specialized in designing, building and deploying Font-end and Back-end
          Web Technologies. I am a believer of finding and solving real world
          challenges by constantly learning and staying updated with latest
          Technologies.{" "}
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
