import React from "react";
import cv from "../../assets/Resume/Michael Zapata CV.pdf";

const SKILLS = [
  "Java",
  "TypeScript",
  "Python",
  "JavaScript",
  "Android",
  "React",
  "Node.js",
  "Docker.js",
  "Django",
  "SQL",
  "MongoDB",
];

const Resume = () => {
  return (
    <section>
      <a href={cv} download>
        Download my Resume
      </a>
      <h3>Technical Skills</h3>
      <ul>
        {SKILLS.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
