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
  CollegeHeading,
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
                <CollegeHeading>Brandenburgische Technische Universität</CollegeHeading>
                <Degree>Masters in Artificial Intelligence</Degree>
                <DateWrapper>April 2023 - Present</DateWrapper>
                <AboutDegree>Key Subjects : Data Mining • Image Processing • Information Retrival </AboutDegree>
              </div>
            </Box>
            <BoxWrapper>
              <SecondEduWrapper>
                <IconWrap>
                  <FaUserGraduate />
                </IconWrap>
                <div>
                  <CollegeHeading>
                    Lovely Professional University
                  </CollegeHeading>
                  <Degree>Bachelors in Computer Science and Engineering</Degree>
                  <DateWrapper>June 2017 - June 2021</DateWrapper>
                  <AboutDegree> Key Subjects : Programming • Data Structure and Algorithm • DBMS</AboutDegree>
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
