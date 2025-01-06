import React from "react";
import {
  QuoteContainer,
  QuoteContent,
  ServiceList,
  ServiceListItem,
  ServiceListIcon,
  ServiceText,
  MainWrapper,
} from "styles/Publication/index";
import { A, ViewPublication } from "styles/Banner";
import { Container, H1 } from "styles/index";
const Publication = () => {
  return (
    <Container className="Publication">
      <MainWrapper>
        <H1>Publication</H1>
        <QuoteContainer>
          <p className="quote">
            <QuoteContent>
              Passenger Security Using Facial Emotion Recognition System
            </QuoteContent>
            <ServiceList>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>
                  Developed a facial emotion recognition system utilizing DCNN
                  achieving a 90% accuracy rate.
                </ServiceText>
              </ServiceListItem>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>
                  Classify facial expressions into Happy, Sad, Angry, Fear,
                  Surprise, Disgust, and Neutral.
                </ServiceText>
              </ServiceListItem>
              <ServiceListItem>
                <ServiceListIcon />
                <ServiceText>
                  Emphasized the importance of non-verbal communication and
                  safety in passenger transportation, resulting in improved
                  safety incident response times.
                </ServiceText>
              </ServiceListItem>

              <ViewPublication>
                <button>
                  <A
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${process.env.PUBLIC_URL}/Publication.pdf`}
                  >
                    View Publication
                  </A>
                </button>
              </ViewPublication>
            </ServiceList>
            {/* <QuoteAuthor>- Théoden, son of Thengel</QuoteAuthor> */}
          </p>
        </QuoteContainer>
      </MainWrapper>
    </Container>
  );
};

export default Publication;
