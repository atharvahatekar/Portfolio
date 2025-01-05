import React from "react";
import {
  HeaderContent,
  H1,
  P,
  A,
  HeaderButtons,
  TypeWriterH1,
} from "styles/Banner";
import { Container } from "styles/index";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <Container className="home">
      <HeaderContent>
        <div>
          <H1>Hi 👋 I'm Atharva Hatekar</H1>
          <TypeWriterH1>
            <Typewriter
              options={{
                strings: [
                  "A Software Engineer",
                  "A Problem Solver",
                  "Data Scientist",
                ],
                pauseFor: 1500,
                autoStart: true,
                loop: true,
              }}
            />
          </TypeWriterH1>
          <P>
            An enthusiastic Data Scientist with a strong academic foundation and
            hands-on industry experience in data analytics, machine learning and
            statistical modeling.Committed to continuous
            learning and leveraging data science to solve real world problems.
          </P>
          <HeaderButtons>
            <button>
              <A
                target="_blank"
                rel="noopener noreferrer"
                href={`${process.env.PUBLIC_URL}/Atharva-Resume.pdf`}
              >
                Resume
              </A>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button>
              <A href="paste linkedin link here">Let's Connect</A>
            </button>
          </HeaderButtons>
        </div>
      </HeaderContent>
    </Container>
  );
};

export default Banner;
