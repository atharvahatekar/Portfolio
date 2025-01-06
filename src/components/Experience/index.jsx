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
import { Container, H1 } from "styles/index";

const serviceData = [
  {
    Role: "R&D Intern for Digital Solutions",
    location: "Metso, Frankfurt, Germany",
    TimePeriod: "10/ 2024 - Present",
    services: [
      "Built a gRPC-based backend for real-time plant data processing, improving ACT system performance and efficiency.",
      "Designed and deployed a predictive maintenance UI, enabling seasonal trend analysis and reducing unplanned maintenance events by 20%.",
      "Implemented rule-based anomaly detection to handle data outliers, ensuring reliability in plant-specific forecasting models.",
    ],
  },
  {
    Role: "Data Analyst",
    location: "Dreamwarez, Pune, India",
    TimePeriod: "02/ 2022 - 01/ 2023",
    services: [
        "Developed interactive BI dashboards with the UI/UX team, enhancing KPI visualization and improving decision-making efficiency by 42%.",
        "Utilized Python, SQL, and Power BI to create insightful reports and actionable data-driven recommendations.",
        "Applied statistical techniques and supervised learning models to analyze complex datasets for advanced business insights.",
      ]
      
  },
  {
    Role: "Software Developer Intern",
    location: "Dreamwarez, Pune, India",
    TimePeriod: "06/ 2021 - 01/ 2022",
    services: [
        "Designed and developed web applications, improving user experience with responsive designs and intuitive functionality.",
        "Collaborated in an agile team to deliver features, fix bugs, and optimize codebase, ensuring timely project completion.",
        "Performed validation of web forms, enhancing data accuracy and system reliability by resolving input inconsistencies.",
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
                <QuoteContent>{service.Role}</QuoteContent>
                <ServiceList>
                  <Location>{service.location}</Location>
                  {service.services.map((text, idx) => (
                    <ServiceListItem key={idx}>
                      •<ServiceText>{text}</ServiceText>
                    </ServiceListItem>
                  ))}
                </ServiceList>
                <TimePeriod>{service.TimePeriod}</TimePeriod>
              </p>
            </QuoteContainer>
          ))}
        </MainWrapper>
      </DataWrapper>
    </Container>
  );
};

export default Experience;
