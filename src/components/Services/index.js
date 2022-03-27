import React from 'react';
import Icon1 from '../../images/Feature1.png'
import Icon2 from '../../images/Feature2.png'
import Icon3 from '../../images/Feature3.png'


import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';



const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>

      <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Stores Credentials</ServicesH2>
          <ServicesP>Documents can be easily encyrpted and centralized for easy access and sharing.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Centralizes Identity Data</ServicesH2>
          <ServicesP>Important elements of a person's identity are aggregated so that they are not lost.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Autofills Forms</ServicesH2>
          <ServicesP>Documents and info and automatically generates assistance applications.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
        
    </ServicesContainer>
  );
};

export default Services;
