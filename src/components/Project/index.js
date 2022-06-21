import React from "react";

const Project = ({ title, image, link, github }) => {
  return (
    <div className="thumbnail">
      <p>{title}</p>
      <img src={image} alt={title} />
      <a target="_blank" href={link}>
        Project
      </a>
      <br />
      <a target="_blank" href={github}>
        Repository
      </a>
    </div>
  );
};

export default Project;
