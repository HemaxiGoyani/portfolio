import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        HEMAXI GOYANI
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Experiance</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; 2023 Hemaxi Goyani. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
