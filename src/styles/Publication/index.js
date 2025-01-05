import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export const QuoteContainer = styled.div`
  position: relative;
  color: Black;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #b3b9c5;
  height: 45vh;
  border-radius: 12px;
  padding: 25px;
  p{
    display: flex;
    flex-direction: column;
  }
`;

export const QuoteContent = styled.span`
  padding-left: 40px;
  display: inline-block;
  opacity: 0.8;
  font-size: 20px;
  color: #000000;
  font-weight: 600;
`;

export const QuoteMarks = styled.span`
  font-family: Arial;
  font-size: 200px;
  position: absolute;
  top: 8px;
  opacity: 0.2;
`;

export const ServiceList = styled.ul`
  padding: 18px 0 5px 65px;
  width: 90%;
`;

export const MainWrapper = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 2em;
   gap: 15px;
`;

export const ServiceListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.5rem;
  font-size: 20px;
`;

export const ServiceListIcon = styled(BiCheck)`
  color: var(--color-primary);
`;

export const ServiceText = styled.p`
  font-size: 0.9rem;
`;
