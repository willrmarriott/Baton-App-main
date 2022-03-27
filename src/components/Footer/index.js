import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, SocialMediaLink, WebsiteRights, LinkedInIcon, FacebookIcon, InstagramIcon } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll/modules';
import Icon12 from '../../images/Baton logo (white)-13.png'
import {LogoIcon} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            <LogoIcon src={Icon12}/>
            </SocialLogo>
            <WebsiteRights> ©{new Date().getFullYear()} All rights reserved.</WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
