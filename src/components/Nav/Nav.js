import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineFile } from "react-icons/ai";
import { BiBookContent, BiMessageSquare } from "react-icons/bi";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveNav(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("home");
        }}
        className={activeNav === "home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("about");
        }}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiance"
        onClick={() => {
          setActiveNav("experiance");
        }}
        className={activeNav === "experiance" ? "active" : ""}
      >
        <AiOutlineFile />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActiveNav("portfolio");
        }}
        className={activeNav === "portfolio" ? "active" : ""}
      >
        <BiBookContent />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("contact");
        }}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BiMessageSquare />
      </a>
    </nav>
  );
};

export default Nav;
