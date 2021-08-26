import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm
        <br />
        Fah Jin
      </SectionTitle>
      <SectionText>Front End / Full Stack developer</SectionText>
      <Button href="mailto:yongfahjin@hotmail.com">Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
