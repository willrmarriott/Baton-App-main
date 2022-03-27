import React from 'react';
import emailjs from '@emailjs/browser';
import { Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton } from './DemoElements';
import {Nav, NavbarContainer, NavLogo} from '../Navbar/NavbarElements'
import {useNavigate} from 'react-router-dom';
import Icon12 from '../../images/Baton logo (white)-13.png'
import {LogoIcon} from './DemoElements';

const DemoForm = () => {
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    sendEmail(event);
    navigate('/thankyou');
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('BatonEmailService', 'template_beu7s0j', e.target, 'NLiwtj6F8p0-lzgXb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();

  }

  return (
    <>
      <Container>
        <FormWrap>
        <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
          <LogoIcon src={Icon12}/>
          </NavLogo>
          </NavbarContainer>
          </Nav>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1> Contact Us </FormH1>
              <FormLabel htmlFor='firstname'>First Name</FormLabel>
              <FormInput  required id="firstname" name='firstname'/>
              <FormLabel htmlFor='for' name='lastname'>Last Name</FormLabel>
              <FormInput required id='lastname' name='lastname'/>
              <FormLabel htmlFor='for' name='email'>Email</FormLabel>
              <FormInput type='email' id='email' name='email' required />
              <FormLabel htmlFor='for'>Organization Name</FormLabel>
              <FormInput required id='company' name='company'/>
              <FormButton type='submit'>Let's Chat</FormButton>
              {/* <Text>Forgot Password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default DemoForm;