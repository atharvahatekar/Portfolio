import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap:26px;
  padding: 0px 120px;
`;
export const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: center;
`;
export const IconWrap = styled.div`
width: 100%;
max-width: 100px;
display: flex;
justify-content: center;
     svg{
          width: 30px;
          height: 35px;
          backface-visibility: visible !important;
          color:#ffffffb3;
     }
`

export const Box = styled.div`
  width: 45%;
  border: none;
  padding: 30px 0;
  display: flex;
  background-color: #212129;
  border: 1px solid #021e541a;
  box-shadow: #051e4f57 0px 0px 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; 

  &:hover{
    background-color: unset;
     box-shadow: #939090 0px 0px 10px;
  }

`;
export const BoxWrapper = styled(Box)`
max-width: unset;
padding: unset;
border: none;
  display: flex;
  box-shadow: unset;
`;

export const SecondEduWrapper = styled.div`
 width: 100%;
 background-color: #212129;
 border: 1px solid #021e541a;
 padding: 30px 0;
 box-shadow: #051e4f57 0px 0px 10px;
 display: flex;
 transition: background-color 0.3s ease, box-shadow 0.3s ease; 

 &:hover{
    background-color: unset;
     box-shadow: #939090 0px 0px 8px;
  }
`;
export const DateWrapper = styled.div`
  font-size: 14px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  line-height: 30px;
  color: #ffffffb3;
`;

export const Degree = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
`;
export const AboutDegree = styled.div`
  color: #ffffffb3;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  font-family: Poppins, sans-serif;
`;

export const CollegeHeading = styled.div`
  color: #ffd479;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  font-family: Poppins, sans-serif;
`;



