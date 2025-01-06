import React from "react";
import IMG1 from "../../assets/images/basic-mining.png";
import IMG2 from "../../assets/images/blog-project.png";
import IMG3 from "../../assets/images/login.png";
import IMG4 from "../../assets/images/basic-mining.png";
import IMG5 from "../../assets/images/blog-project.png";
import IMG6 from "../../assets/images/login.png";
import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioItem,
  PortfolioImage,
  ServiceBoxHeader,
  ServiceBoxP,
} from "styles/Project";
import { A, ProjectLinks } from "styles/Banner";
import { Container, H1 } from "styles/index";

const data = [
  {
    id: 1,
    image: IMG1,
    project_name: "FoodyMoody Restaurent",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "",
  },
  {
    id: 2,
    image: IMG2,
    project_name: "FoodyMoody Restaurent",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "",
  },
  {
    id: 3,
    image: IMG3,
    project_name: "FoodyMoody Restaurent",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "",
  },
  {
    id: 4,
    image: IMG4,
    project_name: "FoodyMoody Restaurent",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "",
  },
  {
    id: 5,
    image: IMG5,
    project_name: "FoodyMoody Restaurent",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "",
  },
  {
    id: 6,
    image: IMG6,
    project_name: "FoodyMoody Restaurent",
    title: "CryptoCurrency Dashboard & Financial Visualization",
    github: "",
  },
];

const Projects = () => {
  return (
    <Container id="project">
      <PortfolioSection>
        <H1>Portfolio</H1>
        <PortfolioContainer>
          {data.map(({ id, image, project_name, title, github, demo }) => (
            <PortfolioItem key={id}>
              <PortfolioImage>
                <img src={image} alt={title} />
              </PortfolioImage>
              <ServiceBoxHeader style={{ textAlign: "center" }}>
                {project_name}
              </ServiceBoxHeader>
              <ServiceBoxP>{title}</ServiceBoxP>
              <ProjectLinks>
                <button>
                  <A
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </A>
                </button>
              </ProjectLinks>
            </PortfolioItem>
          ))}
        </PortfolioContainer>
      </PortfolioSection>
    </Container>
  );
};

export default Projects;
