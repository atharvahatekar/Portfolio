import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilePic from "assets/images/profile-pic.jpeg";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "styles/About";

import { Container, H1 } from "styles/index";
const socialMediaLinks = [
  {
    id: 0,
    link: "Linkedin Link paste here",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "github Link paste here",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "Twitter Link paste here",
    icon: <FaTwitter />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <AboutDiv>
        <Column>
          <Img src={ProfilePic} alt="my image" />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
              Hello Everyone, I am Atharva Hatekar from Nagpur. I graduated in
              B.Tech in Electrical and Electronics branch in 2020 from Techno
              India njr Institute of Currently,Skilled in Python, SQL, Tableau,
              PowerBI, and advanced data handling, visualization techniques.
              Demonstrated ability to transform complex datasets into actionable
              insights that drive business growth and enhance decision-making.
              Proven track record in deploying predictive models, conversational
              AI solutions, and creating interactive BI dashboards. My hobbies
              include cooking and traveling. Interested in Listening to songs
              and business.
            </AboutInfoP>
            <AboutInfoP>
              I am adaptable, proficient in remote collaboration, and committed
              to achieving organizational goals. With a knack for
              problem-solving and analytics, I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
    </Container>
  );
};

export default About;
