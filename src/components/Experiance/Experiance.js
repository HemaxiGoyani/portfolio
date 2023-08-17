import React from "react";
import "./Experiance.css";
import { BsBootstrapFill } from "react-icons/bs";
import { FaAws, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { DiPostgresql, DiMysql, DiCss3, DiJqueryLogo } from "react-icons/di";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";

const Experiance = () => {
  return (
    <section id="experiance" data-section>
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>

      <div className="container experiance__container">
        <ul>
          <li>
            <FaPhp class="icon" />
            <div>PHP</div>
          </li>
          <li>
            <FaLaravel class="icon" />
            <div>Laravel</div>
          </li>
          <li>
            <DiMysql class="icon" />
            <div>MySQL</div>
          </li>
          <li>
            <DiPostgresql class="icon" />
            <div>PostgreSQL</div>
          </li>
          <li>
            <FaReact class="icon" />
            <div>React</div>
          </li>
          <li>
            <RiJavascriptFill class="icon" />
            <div>JavaScript</div>
          </li>
          <li>
            <AiFillHtml5 class="icon" />
            <div>HTML</div>
          </li>
          <li>
            <DiCss3 class="icon" />
            <div>CSS</div>
          </li>
          <li>
            <BsBootstrapFill class="icon" />
            <div>Bootstrap</div>
          </li>
          <li>
            <DiJqueryLogo class="icon" />
            <div>jQuery</div>
          </li>
          <li>
            <AiFillGithub class="icon" />
            <div>GitHub</div>
          </li>
          <li>
            <FaAws class="icon" />
            <div>AWS</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiance;
