import React from "react";

const Project = ({ title, image, link, github }) => {
  console.log(image);
  return (
    <div className="thumbnail">
      <p>{title}</p>
      <img src={require(`../../assets/Portfolio/${image}.png`)} alt={title} />
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
