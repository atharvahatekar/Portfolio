import React from "react";
import IMG1 from "../../assets/images/basic-mining.png";
import IMG2 from "../../assets/images/blog-project.png";
import IMG3 from "../../assets/images/login.png";
import IMG4 from "../../assets/images/basic-mining.png";
import IMG5 from "../../assets/images/blog-project.png";
import IMG6 from "../../assets/images/login.png";
import {PortfolioSection, PortfolioContainer, PortfolioItem, PortfolioCTA, PortfolioImage} from "styles/Project"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 6,
    image: IMG6,
    title: "CryptoCurrency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
];

const Projects = () => {
  return (
    <PortfolioSection id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <PortfolioContainer>
        {data.map(({ id, image, title, github, demo }) => (
          <PortfolioItem key={id}>
            <PortfolioImage>
              <img src={image} alt={title} />
            </PortfolioImage>
            <h3>{title}</h3>
            <PortfolioCTA>
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </PortfolioCTA>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Projects;
