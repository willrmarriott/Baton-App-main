import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';


export const FooterContainer = styled.footer`
  background-color: #193b61;

`

export const FooterWrap = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -80px;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  color: #81FCC5;
`

export const FooterLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: var(--primary-button);
    transition: 0.3s ease-out;
  }
`

export const SocialMediaLink = styled.a`
  color: var(--white);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: var(--primary-button);
    transition: 0.3s ease-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: var(--white);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold
`

export const WebsiteRights = styled.small`
  color: var(--white);
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: var(--white);
  font-size: 24px;
`

export const InstagramIcon = styled(FaInstagram)`
  &:hover{
    color: var(--instagram-hex);
  }
`;

export const LinkedInIcon = styled(FaLinkedin)`
  &:hover{
    color: var(--linkedin-hex);
  }
`;

export const FacebookIcon = styled(FaFacebook)`
  &:hover{
    color: var(--facebook-hex);
  }
`;

export const LogoIcon = styled.img`
  align: center;
  margin-top: 10px;
  height: 25px;
  width: 105px;


`