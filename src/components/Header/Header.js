import React from "react";
import CTA from "./CTA";
import ME from "../../assets/hemaxi.png";
import HeaderSocials from "../HeaderSocials/HeaderSocials";
import "./Header.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import Img from "react-cloudinary-lazy-image";

const Header = () => {
  return (
    <header data-section id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hemaxi Goyani</h1>
        <h5 className="text-light">
          Web Application Developer / Full Stack Developer
        </h5>
        {/* <h5 className="text-light header__container-content">
          Specialized in designing, building and deploying Web Applications. I
          am a believer of finding and solving real world challenges by
          constantly learning and staying updated with latest Technologies.{" "}
        </h5> */}
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="me_mobile">
          <img src={ME} />
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
