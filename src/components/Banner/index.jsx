// import React, { useState, useEffect } from "react";
// import {
//   HeaderContent,
//   H1,
//   P,
//   A,
//   HeaderButtons,
//   TypeWriterH1,
// } from "styles/Banner";
// import { Container } from "styles/index";
// import Typewriter from "typewriter-effect";

// const Banner = () => {
//   const [screenType, setScreenType] = useState("desktop");
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 767) {
//         setScreenType("mobile");
//       } else if (window.innerWidth > 767 && window.innerWidth <= 1124) {
//         setScreenType("tab");
//       } else {
//         setScreenType("desktop");
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <Container id="home">
//       <HeaderContent>
//         <div>
//           {screenType === "mobile" || screenType === "tab" ? (
//             <>
//               <H1>Hi 👋 I'm</H1>
//               <H1>Atharva Hatekar</H1>
//             </>
//           ) : (
//             <H1>Hi 👋 I'm Atharva Hatekar</H1>
//           )}

//           <TypeWriterH1>
//             <Typewriter
//               options={{
//                 strings: [
//                   "A Data Scientist",
//                   "A Data Analyst",
//                   "A Problem Solver",
//                 ],
//                 pauseFor: 1500,
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
//           </TypeWriterH1>
//           <P>
//             <b>Aspiring Data Scientist</b> with over 2 years of industry
//             experience in data analytics, machine learning and software
//             development. Committed to continuous learning and leveraging data
//             science to solve real world problems.
//           </P>
//           <HeaderButtons>
//             <button>
//               <A
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={`${process.env.PUBLIC_URL}/Atharva-Resume.pdf`}
//               >
//                 Resume
//               </A>
//             </button>
//             &nbsp;&nbsp;&nbsp;
//             <button>
//               <A href="https://www.linkedin.com/in/atharvahatekar/">
//                 Let's Connect
//               </A>
//             </button>
//           </HeaderButtons>
//         </div>
//       </HeaderContent>
//     </Container>
//   );
// };

// export default Banner;

import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  MainContainer,
  Container,
  LeftContainer,
  Proffesion,
  Paragraph,
  ButtonContainer,
  FButton,
  ConnectButton,
  SocialSec,
  AnkerTag,
  RightContainer,
} from "styles/Banner";
import { useEffect, useState } from "react";

const Banner = () => {
  // const saveFile = () => {
  //   fileSaver.saveAs(process.env.PUBLIC_URL + "/resume/cv.pdf", "MyCV.pdf");
  // };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContainer id="home">
      <Container>
        <LeftContainer>
          <Proffesion>
            <h3>Hello There!</h3>
            <h3>
              I'm a{" "}
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    strings: [
                      "A Data Scientist",
                      "A Data Analyst",
                      "A Problem Solver",
                    ],
                  }}
                />
              </span>
            </h3>
          </Proffesion>
          <Paragraph>
            <b>Aspiring Data Scientist</b> with over 2 years of industry
            experience in data analytics, machine learning and software
            development. Committed to continuous learning and leveraging data
            science to solve real world problems.
          </Paragraph>
          <SocialSec>
            {/* <AnkerTag href="#">
              <FaFacebookF />
            </AnkerTag> */}
            <AnkerTag href="https://www.instagram.com/kaaju_.12/?next=%2F&hl=en">
              <RiInstagramFill />
            </AnkerTag>
            <AnkerTag href="https://www.linkedin.com/in/kajal-raj">
              <AiFillLinkedin />
            </AnkerTag>
            <AnkerTag href="https://github.com/kaaju-11">
              <AiOutlineGithub />
            </AnkerTag>
            {/* <AnkerTag href="#">
              <RiGitlabFill />
            </AnkerTag> */}
          </SocialSec>

          <ButtonContainer>
            <ConnectButton
              href="https://www.linkedin.com/in/kajal-raj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Connect
            </ConnectButton>
            <FButton
              target="_blank"
              rel="noopener noreferrer"
              href={`${process.env.PUBLIC_URL}/resume/cv.pdf`}
            >
              Resume
            </FButton>
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>
          {/* <BoxContainer></BoxContainer>
          <SecondBoxContainer></SecondBoxContainer>
          
          <Image src={portimage} /> */}
          {isMobile ? (
            ""
          ) : (
            <DotLottieReact
              src="https://lottie.host/44325f2f-8aad-4728-9d64-221fb243e31b/4hOpUuUWT3.lottie"
              loop
              autoplay
              style={{ width: "unset", height: "unset" }}
            />
          )}
        </RightContainer>
      </Container>
    </MainContainer>
  );
};

export default Banner;
