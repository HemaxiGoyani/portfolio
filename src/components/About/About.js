import React from "react";
import "./About.css";

const About = () => {
  return (
    <section data-section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
            I am skilled Web Application Developer with 4+ years of experience
            in PHP/Laravel, MySQL, and front-end technologies. Throughout my
            career, I have successfully developed end-to-end web applications,
            optimized performance, and improved user experience. Leveraging Rest
            API, AWS services, and PHP, I have implemented innovative features
            that significantly increased user satisfaction.
          </p>
          <p>
            I am a passionate Web Application Developer with a strong background
            in PHP/Laravel and front-end technologies. I am proficient in
            technologies such as React JS, REST APIs, jQuery, AWS, JavaScript,
            and Git, and I am always eager to take on new challenges. My
            approach to web development is performance-oriented, always aiming
            to deliver resilient and scalable products/services. I have a keen
            eye for detail and a commitment to maintaining industry standards,
            ensuring the highest quality of code and adherence to best
            practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
