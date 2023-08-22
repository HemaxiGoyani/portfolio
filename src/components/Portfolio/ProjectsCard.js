import React from "react";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, url }) => {
  return (
    <div className="project__list">
      <div className="portfolio__item">
        <div className="portfolio__item-container portfolio__item-image">
          <a href={url} target="_blank">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={src}
              alt="src"
            />
          </a>
        </div>
        <div className="portfolio__item-container portfolio__item-content">
          <div>
            <div className="portfolio__item-content-title">
              <h3>{title}</h3>
              <div className="portfolio__item-content-cta">
                {/* <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </span> */}
                <a href={url} target="_blank">
                  <span className="portfolio__item-content-cta-icon">
                    <FaGlobe />
                  </span>
                </a>
              </div>
            </div>
            <p>{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
