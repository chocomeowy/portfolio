import React from "react";
import Link from "next/link";
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
      <Link href="#footer">
        <Button>Contact Me</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
