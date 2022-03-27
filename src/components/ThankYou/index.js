import React from 'react';
import { Container, ThankYouWrap, Content, ThankYouH1, Text} from './ThankYouElements';
import {Nav, NavbarContainer, NavLogo} from '../Navbar/NavbarElements'
import Icon12 from '../../images/Baton logo (white)-13.png'
import {LogoIcon} from './ThankYouElements';

const ThankYouMessage = () => {
    return (
    <>
      <Container>
        <ThankYouWrap>
        <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
          <LogoIcon src={Icon12}/>
          </NavLogo>
          </NavbarContainer>
          </Nav>
          <Content>
            <ThankYouH1>Thank You!</ThankYouH1>
            <Text>A member of our support team will be in touch.</Text>
          </Content>
        </ThankYouWrap>
      </Container>
    </>
  );
};

export default ThankYouMessage;
