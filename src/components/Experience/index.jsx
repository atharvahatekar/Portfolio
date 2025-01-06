import React from "react";
import {
  QuoteContainer,
  QuoteMarks,
  QuoteContent,
  ServiceList,
  ServiceListItem,
  ServiceText,
  MainWrapper,
  Location,
  DataWrapper,
  TimePeriod,
} from "styles/Experience";
import { TbCircleDot } from "react-icons/tb";
import { Container, H1 } from "styles/index";

const serviceData = [
  {
    Role: "R&D Intern for Digital Solutions",
    location: "Metso, Frankfurt, Germany",
    TimePeriod: "10/ 2024 - Present",
    icon: <TbCircleDot />,
    services: [
      "Developed and deployed gRPC-based backend for real-time plant data processing, enhancing ACT system efficiency.",
      "Evaluated multiple forecasting ML models, including ARIMA / SARIMA, achieving superior results with the Prophet model.",
      "Designed UI for predictive maintenance, enabling seasonal trend analysis, reducing unplanned maintenance events by 20%.",
      "Implemented rule-based anomaly detection to handle outliers for plant-specific data."
    ],
  },
  {
    Role: "Data Analyst",
    location: "Dreamwarez, Pune, India",
    TimePeriod: "02/ 2022 - 01/ 2023",
    icon: <TbCircleDot />,
    services: [
        "Designed interactive BI dashboards collaborating with UI/UX team to visualize KPIs, leading to 42% improvement in decision-making processes.",
        "Utilized Python, SQL, and Power BI to generate insightful reports and data-driven recommendations.",
        "Leveraged statistical models and supervised learning models on complex datasets for advanced analytics.",
      ]
      
  },
  {
    Role: "Software Developer Intern",
    location: "Dreamwarez, Pune, India",
    icon: <TbCircleDot />,
    TimePeriod: "06/ 2021 - 01/ 2022",
    services: [
        "Developed web applications, improving user experience by integrating responsive designs and streamlined functionality.",
        "Collaborated within an agile development team to implement new features, debug issues, and optimize existing code, ensuring timely project delivery.",
        "Conducted thorough validations on web forms, enhancing data accuracy and improving overall system reliability by identifying and resolving input discrepancies.",
      ]
    }      
];

const Experience = () => {
  return (
    <Container className="experience">
      <DataWrapper>
        <H1>Experience</H1>
        <MainWrapper>
          {serviceData.map((service, index) => (
            <QuoteContainer key={index}>
              <p className="quote">
                <QuoteContent>
                  {service.icon}
                  {service.Role}
                  </QuoteContent>
                <ServiceList>
                <TimePeriod>{service.TimePeriod}</TimePeriod>
                  <Location>{service.location}</Location>
                  {service.services.map((text, idx) => (
                    <ServiceListItem key={idx}>
                      •<ServiceText>{text}</ServiceText>
                    </ServiceListItem>
                  ))}
                </ServiceList>
              </p>
            </QuoteContainer>
          ))}
        </MainWrapper>
      </DataWrapper>
    </Container>
  );
};

export default Experience;
