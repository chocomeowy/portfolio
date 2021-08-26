import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 2021, text: "Software Engineering Immersive - General Assembly" },
  { number: 2021, text: "Mobile App Development - SMU" },
  {
    number: 2021,
    text: "Advanced Diploma in Python Programming and Machine Learning - SMU",
  },
  { number: 2015, text: "BSc Business - SIM UOL" },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
