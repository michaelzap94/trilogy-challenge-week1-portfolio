import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import Contact from "../Contact";

const Section = ({ selectedSection }) => {
  let section = null;
  switch (selectedSection) {
    case "About Me":
      section = <About />;
      break;
    case "Portfolio":
      section = <Portfolio />;
      break;
    case "Resume":
      section = <Resume />;
      break;
    case "Contact":
      section = <Contact />;
      break;
    default:
      section = <About />;
  }
  return (
    <main>
      <h2>{selectedSection}</h2>
      {section}
    </main>
  );
};

export default Section;
