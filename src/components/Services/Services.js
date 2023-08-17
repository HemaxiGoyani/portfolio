import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const SERVICES = [
  {
    id: 1,
    name: "Web Development",
    list: [
      {
        id: "list_1",
        description:"We develop websites using Laravel, PHP, MySQL, and PostgreSQL.",
      },
      {
        id: "list_2",
        description:
          "PHP expertise for secure, high-performance web applications tailored to you.",
      },
      {
        id: "list_3",
        description:
          "Laravel creates feature-rich sites with seamless user experiences and backend management.",
      },
      {
        id: "list_4",
        description:
          "MySQL and PostgreSQL ensure efficient data storage and retrieval.",
      },
    ],
  },
  {
    id: 2,
    name: "API Development",
    list: [
      {
        id: "list_1",
        description: "We offer expert REST API development services for seamless integration.",
      },
      {
        id: "list_2",
        description: "Our team delivers scalable and secure APIs tailored to your needs.",
      },
      {
        id: "list_3",
        description: "With our expertise, we ensure smooth communication between applications.",
      },
      {
        id: "list_4",
        description: "Our REST API development services optimize data exchange and functionality.",
      },
    ],
  },
  {
    id: 3,
    name: "Front End Development",
    list: [
      {
        id: "list_1",
        description: "",
      },
      {
        id: "list_2",
        description: "",
      },
      {
        id: "list_3",
        description: "",
      },
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {SERVICES.map((service) => {
          return (
            <article className="service" key={service.id}>
              <div className="service__head">
                <h3>{service.name}</h3>
              </div>
              <ul className="service__list">
                {service.list.map((serviceList) => {
                  return (
                    <li key={serviceList.id}>
                      <span>
                        <BiCheck className="service__list-icon" /></span>
                      
                        <p>{serviceList.description}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
