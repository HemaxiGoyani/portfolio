import React from "react";
import "./Contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section data-section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__left">
          <div className="contact__left-content">
            <h3>Hemaxi Goyani</h3>
            <p className="subtitle">Web Application Developer</p>
            <p className="description">
              A forward-thinking innovator with a deep understanding of the
              latest industry trends and advancements, consistently staying
              ahead of the curve.
            </p>
            <p className="contact">
              Phone: <span className="text-lightText">+1 (519) 591 8235</span>
            </p>
            <p className="contact">
              Email:
              <span className="text-lightText">hemaxigoyani@gmail.com</span>
            </p>
          </div>
          <div className="contact__left-social">
            <h2>Find me in</h2>
            <div className="contact__left-social-icons">
              <a
                href="https://www.linkedin.com/in/hemaxigoyani/"
                target="_blank"
              >
                <span className="contactIcon">
                  <FaLinkedinIn />
                </span>
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
