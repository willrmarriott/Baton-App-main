import React, {useState} from 'react';
import Video from '../../videos/V1 baton walkthrough.mp4'
import {ImgWrap, HeroWrapper, HeroRow, HeroColumn1, HeroColumn2, HeroContainer, HeroBg, NavBtn, VideoBg, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink } from './HeroElements';


const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <HeroContainer id="home">
      <HeroBg>
          </HeroBg>
        <HeroWrapper>
          <HeroRow imgStart={true}>
            <HeroColumn1>
              <ImgWrap>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
              </ImgWrap>
            </HeroColumn1>
            <HeroColumn2>
                <HeroH1>Giving Homeless People a Digital Identity</HeroH1>
                <HeroP>
                People experiencing homelessness have no safe physical place to store critical documents and identity information. Baton gives the homeless a digital wallet that secures document storage, enables information transfer, and streamlines the process of getting the homeless back on their feet!
                </HeroP>
                <HeroBtnWrapper>
                  <NavBtn>
                    <NavBtnLink to="/getdemo" onMouseEnter={onHover} onMouseLeave={onHover}>Learn More</NavBtnLink>
                  </NavBtn>
                </HeroBtnWrapper> 



            </HeroColumn2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
