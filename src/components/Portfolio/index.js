import React from "react";
import Project from "../Project";

const PORTFOLIO = [
  {
    title: "Recipe Book",
    image: "recipe-book",
    link: "https://codepen.io/michaelzap20/full/ZOMORo",
    github: "https://github.com/michaelzap94/recipe-book",
  },
  {
    title: "Random Quote",
    image: "random-quote",
    link: "https://codepen.io/michaelzap20/full/RRawpO",
    github: "https://github.com/michaelzap94/random-quote-generator",
  },
  {
    title: "Tribute Page",
    image: "tribute-page",
    link: "https://codepen.io/michaelzap20/full/zqjdKX",
    github: "https://github.com/michaelzap94/tribute-page",
  },
  {
    title: "Wikipedia Search",
    image: "wikipedia-search",
    link: "https://codepen.io/michaelzap20/full/xOLOzM",
    github: "https://github.com/michaelzap94/wikipedia-search",
  },
  {
    title: "Markdown Previewer",
    image: "markdown-previewer",
    link: "https://codepen.io/michaelzap20/full/jrpPNO",
    github: "https://github.com/michaelzap94/github-markdown-previewer",
  },
  {
    title: "Twitch Streamers",
    image: "twitch-streamers",
    link: "https://codepen.io/michaelzap20/full/pEwEJj",
    github: "https://github.com/michaelzap94/twitch-streamers",
  },
];

const Portfolio = () => {
  return (
    <section>
      <div className="thumbnail-wrapper">
        {PORTFOLIO.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
