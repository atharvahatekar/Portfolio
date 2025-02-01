import React from "react";
import Marquee from "react-fast-marquee";
import { BsDatabase } from "react-icons/bs";
import { VscVscodeInsiders } from "react-icons/vsc";
import { ImStatsDots } from "react-icons/im";
import { TfiMicrosoft } from "react-icons/tfi";
import { AiFillOpenAI } from "react-icons/ai";
import {
  SiScikitlearn,
  SiTensorflow,
  SiLangchain,
  SiSpacy,
  SiStreamlit,
  SiPytorch,
  SiOllama,
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
      color: "yellow",
    },
    {
      id: 1,
      project_name: "SQL",
      project_desc: <BsDatabase className="commonIcons" />,
      color: "#00d8ff",
    },
    {
      id: 2,
      project_name: "PowerBI",
      project_desc: <FaChartPie className="commonIcons" />,
      color: "#c5a1ff",
    },
    {
      id: 3,
      project_name: "SciKit Learn",
      project_desc: <SiScikitlearn className="commonIcons" />,
      color: "#ff8f73",
    },
    {
      id: 4,
      project_name: "TensorFlow",
      project_desc: <SiTensorflow className="commonIcons" />,
      color: "#64c3fe",
    },
    {
      id: 5,
      project_name: "Pytorch",
      project_desc: <SiPytorch className="commonIcons" />,
      color: "#ff60ef",
    },
    {
      id: 6,
      project_name: "LangChain",
      project_desc: <SiLangchain className="commonIcons" />,
      color: "#66ff66",
    },
    {
      id: 7,
      project_name: "OpenAI",
      project_desc: <AiFillOpenAI className="commonIcons" />,
      color: "#18effa",
    },
    {
      id: 8,
      project_name: "LLama",
      project_desc: <SiOllama className="commonIcons" />,
      color: "#fbaf58",
    },

    {
      id: 9,
      project_name: "spaCy",
      project_desc: <SiSpacy className="commonIcons" />,
      color: "#1efa05",
    },
    {
      id: 10,
      project_name: "VSCode",
      project_desc: <VscVscodeInsiders className="commonIcons" />,
      color: "#00bfff",
    },
    {
      id: 11,
      project_name: "GIT",
      project_desc: <FaGithub className="commonIcons" />,
      color: "#00bfff",
    },
    {
      id: 12,
      project_name: "StreamLit",
      project_desc: <SiStreamlit className="commonIcons" />,
      color: "#0dff00",
    },
    {
      id: 13,
      project_name: "MSOffice",
      project_desc: <TfiMicrosoft className="commonIcons" />,
      color: "#fd4ab6",
    },
  ];
  const proficiencies = [
    {
      id: 0,
      project_name: "Data Analytics",
      project_desc: <FaChartBar className="commonIcons" />,
      color: "#fd804a",
    },
    {
      id: 1,
      project_name: "Statistics",
      project_desc: <ImStatsDots className="commonIcons" />,
      color: "#ee23a4",
    },
    {
      id: 2,
      project_name: "Machine learning",
      project_desc: <FaHubspot className="commonIcons" />,
      color: "#656fdd",
    },
  ];

  const skillBoxStyle = {
    backgroundColor: "#212129",
    // boxShadow: `#ebb42c 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px`,
}

  return (
    <Container id="skills">
      <SkillsContainer>
        <Common>
          <H1>Skills & Tools</H1>
        </Common>
        <div className="skillsContainer">
          <div className="skill--scroll">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {projects.map((item) => (
                <BoxDiv className="skill--box" key={item.id} style={skillBoxStyle}>
                  <SkillBox>
                    <div style={{ color: item.color }}> {item.project_desc}</div>
                    <SkillBoxText style={{ color: item.color }}>{item.project_name}</SkillBoxText>
                  </SkillBox>
                </BoxDiv>
              ))}
            </Marquee>
          </div>
        </div>
        <Common style={{ marginTop: "45px" }}>
          <H1>Proficiencies</H1>
        </Common>
        <Col className="colorProficiencies">
          {proficiencies.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                <div style={{ color: item.color }}> {item.project_desc}</div>
                <SkillBoxText style={{ color: item.color }}>{item.project_name}</SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Col>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
