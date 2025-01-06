import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export const QuoteContainer = styled.div`
  color: Black;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #212129;
  border-radius: 5px;
  height: 50vh;
  padding: 15px;
  transition: background-color 0.3s ease-in-out; 
  p {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1920px) {
    height: auto;
    padding: 25px;
  }

  &:hover {
    background-color: unset;
    box-shadow: #939090 0px 0px 10px;
  }
`;

export const QuoteContent = styled.span`
  display: inline-block;
  font-size: 16px;
  color: #ffd479;
  font-weight: 600;
  font-family: Poppins, sans-serif;
`;

export const QuoteMarks = styled.span`
  font-family: Arial;
  font-size: 200px;
  position: absolute;
  top: 8px;
  opacity: 0.2;
`;

export const ServiceList = styled.ul`
  padding: 4px 0 5px 0;
  width: 90%;

  @media (max-width: 1920px) {
    padding: 6px 0 5px 0;
  }
`;

export const TimePeriod = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  color: #b3b9c5;
  padding-top: 10px;
`;

export const MainWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 80%;
`;
export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  gap: 15px;
`;

export const ServiceListItem = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 0.5rem;
  font-size: 20px;
  color: #fff;
  padding-top: 5px;

  @media (max-width: 1920px) {
    margin-bottom: 1rem;
    padding-top: 15px;
  }
`;

export const ServiceText = styled.p`
  font-size: 0.9rem;
  color: #b3b9c5;
`;

export const Location = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
`;
