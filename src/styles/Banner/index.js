import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  width: 70%;
  text-align: center;
  margin: auto;
  color: ${(props) => props.theme.fontColorSecondary};
  margin-top: 2em;

  @media (max-width: 767px) {
    margin-top: 2em;
    width: 85%;
  }

  @media (max-width: 430px) {
    margin-top: 5em;
  }

  @media (max-width: 390px) {
    margin-top: 13em;
  }
`;

export const H1 = styled.h1`
  font-size: 57px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColorHeader};
  animation-name: fadeInUp;
  animation: 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @media (max-width: 767px) {
    font-size: 49px;
  }
  @media (max-width: 450px) {
    font-size: 45px;
  }
`;

export const TypeWriterH1 = styled.h1`
  height: 70px;
  font-size: 35px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColorHeader};
  animation-name: fadeInUp;
  animation: 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @media (max-width: 767px) {
    margin-bottom: 0px;
  }
`;

export const HeaderButtons = styled.div`
  object-fit: cover;
  justify-content: space-between;

  button {
    border: 1px solid rgb(211, 220, 230);
    background-color: #343a40;
    color: #fff;
    border-radius: 5px 5px 5px 5px;
    padding: 13px 40px;
    width: 175px;
    cursor: pointer;

    &:hover {
      color: #000;
      background-color: ${(props) => props.theme.fontColorPrimary};
      border: 1px solid rgb(211, 220, 230);
    }

    @media (max-width: 450px) {
    width: 163px;
  }
  }

  @media (max-width: 450px) {
    display: flex;
     flex-direction: column;
     align-items: center;
  }

  @media (max-width: 390px) {
    display: flex;
     flex-direction: column;
     align-items: center;
  }
`;

export const ViewPublication = styled(HeaderButtons)`
padding-top: 20px;
  button {
    width: 180px;

    &:hover {
    border: 1px solid rgb(211, 220, 230);
    background-color:rgb(96, 103, 109);
    color: #fff;
    }
  }
  
`;

export const ProjectLinks = styled(HeaderButtons)`
padding-top: 20px;
  button {
    width: 120px;
    padding: 10px 30px;

    &:hover {
    border: 1px solid rgb(211, 220, 230);
    background-color:rgb(96, 103, 109);
    color: #fff;
    }
  }
  
`;

export const P = styled.p`
  font-size: 26px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 50px;
`;

export const A = styled.a`
  outline: none;
  border: none;
  color: #fff;
  text-decoration: none;
`;
