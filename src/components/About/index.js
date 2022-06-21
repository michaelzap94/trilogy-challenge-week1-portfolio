import React from "react";
import me from "../../assets/About/me.jpg";

const About = () => {
  return (
    <section>
      <img src={me} alt="me" />
      <div>
        I have a proven record in delivering cutting-edge software applications
        within corporate and start-up ecosystems, analysing and bringing
        stakeholder requirements to life by utilising the latest tools and
        programming languages, working within cross-functional teams,
        maintaining adherence to software development best practices and
        exceeding expectations set by colleagues.
      </div>
    </section>
  );
};

export default About;
