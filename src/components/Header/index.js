import React from "react";
import Navigation from "../Navigation";

const Header = ({ setSelectedSection, sections, selectedSection }) => {
  return (
    <header>
      <h3>Michael Zapata</h3>
      <Navigation
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        sections={sections}
      />
    </header>
  );
};

export default Header;
