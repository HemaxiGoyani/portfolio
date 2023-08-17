import React from "react";
import IMG1 from "../../assets/dechcept.png";
import IMG2 from "../../assets/candorivf.png";
import IMG3 from "../../assets/hissa.png";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dechcept",
    demo: "https://dechcept.com/",
    description:
      "I provided a tailored CMS, adapting to needs. Evolved site, added CRM with admin panel for efficient records management, ensuring project success.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Candor IVF Center",
    demo: "https://candorivf.com/",
    description:
      "Developed web application using PHP and Laravel, managing patient information, appointment scheduling, billing, and facilitating efficient communication between healthcare providers and patients.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Hissa",
    demo: "https://hissaart.com/",
    description:
      "I succeeded in addressing artists' challenges, creating a comprehensive website to showcase talents and engage a wider audience. Blogs, exhibitions, and events boosted recognition and opportunities.",
  },
];

const Projects = () => {
  return (
    <section id="portfolio" data-section>
      <h5>Visit my portfolio and keep your feedback</h5>
      <h2>My Projects</h2>

      <div className="container container__portfolio">
        {data.map((project) => {
          return (
            <ProjectsCard
              key={project.id}
              title={project.title}
              des={project.description}
              src={project.image}
              url={project.demo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
