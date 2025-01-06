import {
  MainContainer,
  Box,
  BoxContainer,
  DateWrapper,
  Degree,
  BoxWrapper,
  EducationWrapper,
  SecondEduWrapper,
  IconWrap,
  AboutDegree,
  CollegeHeading
} from "styles/Education";
import { Container, H1 } from "styles/index";
import { FaUserGraduate } from "react-icons/fa";

const Educations = () => {
  return (
    <Container className="education">
    <MainContainer>
      <EducationWrapper>
        <H1>Education</H1>
        <BoxContainer>
          <Box>
            <IconWrap>
              <FaUserGraduate />
            </IconWrap>
            <div>
              <CollegeHeading>Rajindra Mishra College</CollegeHeading>
              <Degree>Bechlor of Computer Application</Degree>
              <DateWrapper>August 2017 - February 2021</DateWrapper>
              <AboutDegree>
                - Major: Electronics and Communication Engineering
              </AboutDegree>
              <AboutDegree>- Minor: Information Technology</AboutDegree>
            </div>
          </Box>
          <BoxWrapper>
            <SecondEduWrapper>
              <IconWrap>
                <FaUserGraduate />
              </IconWrap>
              <div>
                <CollegeHeading>Lovely Professional University</CollegeHeading>
                <Degree>Master of Computer Application</Degree>
                <DateWrapper>May 2021 - August 2023</DateWrapper>
                <AboutDegree>
                  - Major: Electronics and Communication Engineering
                </AboutDegree>
                <AboutDegree>- Minor: Information Technology</AboutDegree>
              </div>
            </SecondEduWrapper>
          </BoxWrapper>
        </BoxContainer>
      </EducationWrapper>
    </MainContainer>
    </Container>
  );
};

export default Educations;
