import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const sections = ["About Me", "Portfolio", "Resume", "Contact"];

const App = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  return (
    <div>
      <Header
        setSelectedSection={setSelectedSection}
        sections={sections}
        selectedSection={selectedSection}
      />
      <Section selectedSection={selectedSection} />
      <Footer />
    </div>
  );
};

export default App;
