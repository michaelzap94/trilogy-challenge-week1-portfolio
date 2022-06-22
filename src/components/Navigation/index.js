import React from "react";
import { capitalizeWord } from "../../utils/helpers";

const Navigation = ({ setSelectedSection, sections, selectedSection }) => {
  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section} >
            <span className={`${section === selectedSection ? "active": ""}`} onClick={() => setSelectedSection(section)}>
              {capitalizeWord(section)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
