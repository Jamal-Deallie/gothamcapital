import { useRef } from 'react';
import {
  ButtonContainer,
  ButtonImage,
  HeroSection,
  HeaderContainer,
  ContentContainer,
  Heading,
  GridContainer,
  VideoContainer,
  Hover,
  Video,
} from './styles';
import { MainButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import { hoverOnEnter, hoverOnLeave } from '../../animations/hoverAnimations';
import { gsap } from 'gsap';

export default function HeroContainer() {
  let navigate = useNavigate();
  const btnRef = useRef();

  function handleClick() {
    navigate('about');
  }
  const hoverOnEnter = () => {
    gsap.to(btnRef.current, { clipPath: 'circle(100%)' });
  };

  const hoverOnLeave = () => {
    gsap.to(btnRef.current, { clipPath: 'circle(0%)' });
  };

  return (
    <HeroSection>
      <GridContainer>
        <ContentContainer>
          <HeaderContainer>
            <Heading>For Pioneers</Heading>
            <Heading>And Investors</Heading>
          </HeaderContainer>

          <ButtonContainer
            onMouseEnter={hoverOnEnter}
            onMouseLeave={hoverOnLeave}>
            <Hover ref={btnRef} />
            <ButtonImage src='images/icons/gotham.svg' alt='Gotham Capital' />
          </ButtonContainer>
        </ContentContainer>

        <VideoContainer>
          <Video loop autoPlay muted>
            <source src='images/general/video.mp4' type='video/mp4' />
          </Video>
        </VideoContainer>
      </GridContainer>
    </HeroSection>
  );
}
