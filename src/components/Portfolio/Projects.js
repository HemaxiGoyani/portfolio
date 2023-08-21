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
    // description:
    //   "I provided a tailored CMS, adapting to needs. Evolved site, added CRM with admin panel for efficient records management, ensuring project success.",
    description:
      "I designed a tailored CMS to fit client's needs, improved the website, and introduced a user-friendly CRM system with an admin panel. This streamlined record management, ensuring project success. Our commitment to adapting to changes and delivering excellence is evident in the customized CMS, enhanced site, and comprehensive CRM.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Candor IVF Center",
    demo: "https://candorivf.com/",
    description:
      "The project's culmination unveils a PHP and Laravel-powered hospital management web app. Seamlessly integrating patient management, appointment scheduling, and medical records, it enhances healthcare operations. With user-friendly design and data security, the application streamlines administrative tasks, underscoring a significant advancement in modern hospital management.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Hissa",
    demo: "https://hissaart.com/",
    // description:
    //   "I succeeded in addressing artists' challenges, creating a comprehensive website to showcase talents and engage a wider audience. Blogs, exhibitions, and events boosted recognition and opportunities.",
    description:
      "I delved into their circumstances, grasping their challenges, and initiated a website to empower them. It offered avenues for communication, talent promotion, and showcased their diverse artworks. A blog section allowed them to share personal insights, while exhibitions showcased their artistic prowess. An event area shared upcoming activities, facilitating engagement for those intrigued.",
  },
];

const Projects = () => {
  return (
    <section id="portfolio" data-section>
      <h5>Visit my portfolio</h5>
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
