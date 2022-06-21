import React from "react";
import cv from "../../assets/Resume/Michael Zapata CV.pdf";

const Resume = () => {
  return (
    <section>
      <a href={cv} download>Download my Resume</a>
    </section>
  );
};

export default Resume;
