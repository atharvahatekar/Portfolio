import React from "react";
import { BsDatabase } from "react-icons/bs";
import { SiCplusplus } from "react-icons/si";

import {
  FaHtml5,
  FaPython,
  FaJs,
  FaNodeJs,
  FaCss3,
  FaLaptopCode,
  FaServer,
  FaHubspot,
} from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
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
      project_name: "C++",
      project_desc: <SiCplusplus className="commonIcons" />,
    },
    {
      id: 3,
      project_name: "HTML",
      project_desc: <FaHtml5 className="commonIcons" />,
    },
    {
      id: 4,
      project_name: "CSS",
      project_desc: <FaCss3 className="commonIcons" />,
    },
    {
      id: 5,
      project_name: "Node JS",
      project_desc: <FaNodeJs className="commonIcons" />,
    },
    {
      id: 6,
      project_name: "Express",
      project_desc: <FaNodeJs className="commonIcons" />,
    },
    {
      id: 7,
      project_name: "Mongo DB",
      project_desc: <SiMongodb className="commonIcons" />,
    },
  ];
  const proficiencies = [
    {
      id: 0,
      project_name: "Frontend",
      project_desc: <FaLaptopCode className="commonIcons" />,
    },
    {
      id: 2,
      project_name: "Data Structures",
      project_desc: <FaHubspot className="commonIcons" />,
    },
    {
      id: 1,
      project_name: "Backend",
      project_desc: <FaServer className="commonIcons" />,
    },
  ];

  return (
    <Container className="skills">
      <SkillsContainer>
        <Common>
          <H1>Technologies</H1>
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
