import styled from "styled-components";

export const PortfolioSection = styled.section`
  padding: 2rem 0;
  text-align: center;
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }
`;

export const PortfolioImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const PortfolioCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

