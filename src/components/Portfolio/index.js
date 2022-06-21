import React from "react";
import Project from "../Project";

const PORTFOLIO = [
  { title: "", image: "", link: "", github: "" },
  { title: "", image: "", link: "", github: "" },
  { title: "", image: "", link: "", github: "" },
  { title: "", image: "", link: "", github: "" },
  { title: "", image: "", link: "", github: "" },
  { title: "", image: "", link: "", github: "" },
];

const Portfolio = () => {
  return (
    <section>
      <div className="wrapper">
        {PORTFOLIO.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
