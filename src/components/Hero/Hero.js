import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Multi-talented Developer adept at working customers, quality assurance, project managers and fellow developers to develop leading-edge programs that enhance customers' business success.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/max-aussem-623050173/'} >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;