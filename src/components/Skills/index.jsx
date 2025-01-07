import React from "react";
import { BsDatabase } from "react-icons/bs";
import { VscVscodeInsiders } from "react-icons/vsc";
import { ImStatsDots } from "react-icons/im";
import { TfiMicrosoft } from "react-icons/tfi";
import {
  SiTableau,
  SiScikitlearn,
  SiTensorflow,
  SiLangchain,
  SiSpacy,
  SiStreamlit,
} from "react-icons/si";

import {
  FaPython,
  FaHubspot,
  FaChartPie,
  FaGithub,
  FaChartBar,
} from "react-icons/fa";
import {
  SkillsContainer,
  Col,
  BoxDiv,
  SkillBox,
  SkillBoxText,
  Common,
} from "styles/Skills";
import { Container, H1 } from "styles/index";

import("./skills.css");

const Skills = () => {
  const projects = [
    {
      id: 0,
      project_name: "Python",
      project_desc: <FaPython className="commonIcons" />,
    },
    {
      id: 1,
      project_name: "SQL",
      project_desc: <BsDatabase className="commonIcons" />,
    },
    {
      id: 2,
      project_name: "Tableau",
      project_desc: <SiTableau className="commonIcons" />,
    },
    {
      id: 3,
      project_name: "PowerBI",
      project_desc: <FaChartPie className="commonIcons" />,
    },
    {
      id: 4,
      project_name: "SciKit Learn",
      project_desc: <SiScikitlearn className="commonIcons" />,
    },
    {
      id: 5,
      project_name: "TensorFlow",
      project_desc: <SiTensorflow className="commonIcons" />,
    },
    {
      id: 6,
      project_name: "LangChain",
      project_desc: <SiLangchain className="commonIcons" />,
    },
    {
      id: 7,
      project_name: "spaCy",
      project_desc: <SiSpacy className="commonIcons" />,
    },
    {
      id: 8,
      project_name: "VSCode",
      project_desc: <VscVscodeInsiders className="commonIcons" />,
    },
    {
      id: 9,
      project_name: "GIT",
      project_desc: <FaGithub className="commonIcons" />,
    },
    {
      id: 10,
      project_name: "StreamLit",
      project_desc: <SiStreamlit className="commonIcons" />,
    },
    {
      id: 11,
      project_name: "MSOffice",
      project_desc: <TfiMicrosoft className="commonIcons" />,
    },
  ];
  const proficiencies = [
    {
      id: 0,
      project_name: "Data Analytics",
      project_desc: <FaChartBar className="commonIcons" />,
    },
    {
      id: 2,
      project_name: "Machine learning",
      project_desc: <FaHubspot className="commonIcons" />,
    },
    {
      id: 1,
      project_name: "Statistics",
      project_desc: <ImStatsDots className="commonIcons" />,
    },
  ];

  return (
    <Container className="skills">
      <SkillsContainer>
        <Common>
          <H1>Skills & Tools</H1>
        </Common>
        <Col className="colorTechnologies">
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                <div> {item.project_desc}</div>
                <SkillBoxText>{item.project_name}</SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Col>
        <Common>
          <H1>Proficiencies</H1>
        </Common>
        <Col className="colorProficiencies">
          {proficiencies.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                {item.project_desc}
                <SkillBoxText>{item.project_name}</SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Col>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
