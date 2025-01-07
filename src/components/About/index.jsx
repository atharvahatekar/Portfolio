import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
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
    link: "https://www.linkedin.com/in/atharvahatekar/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/atharvahatekar",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://www.instagram.com/atharvahatekar.ai/profilecard/?igsh=MzQ2OGxpeGFuc3p3",
    icon: <FaInstagram />,
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
            I am Atharva Hatekar, currently pursuing a Master’s in Artificial Intelligence at Brandenburgische Technische Universität, 
            Germany. I hold a Bachelor’s degree in Computer Science and Engineering from Lovely Professional University, India.
            Professionally, I am working as a Data Science Intern at Metso, Frankfurt, Germany, and have previously worked as a Data Analyst 
            and Software Developer at Dreamwarez, India.
            </AboutInfoP>
            <AboutInfoP>
            Beyond my professional endeavors, I am a sports enthusiast, proudly holding gold medals in American Football and Rugby 
            at national championships. I also have a deep passion for music, and I enjoy singing as well as playing the guitar and drums.
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
