import { useRef, useEffect } from 'react';
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
  Italic,
} from './styles';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import useArrayRef from '../../hooks/useArrayRef';
import { heroAnimation } from '../../animations/heroAnimation';

export default function HeroContainer() {
  const containerRef = useRef();
  const btnRef = useRef();
  const [headingRef, setHeadingRef] = useArrayRef();

  const hoverOnEnter = () => {
    gsap.to(btnRef.current, { clipPath: 'circle(100%)' });
  };

  const hoverOnLeave = () => {
    gsap.to(btnRef.current, { clipPath: 'circle(0%)' });
  };

  useEffect(() => {
    heroAnimation(headingRef.current);
  }, [headingRef]);

  return (
    <HeroSection>
      <GridContainer ref={containerRef}>
        <ContentContainer>
          <HeaderContainer>
            <Heading ref={setHeadingRef}>
              For <Italic>Pioneers</Italic>
            </Heading>
            <Heading ref={setHeadingRef}>
              <Italic>And</Italic> Investors
            </Heading>
          </HeaderContainer>

          <ButtonContainer
            onMouseEnter={hoverOnEnter}
            onMouseLeave={hoverOnLeave}>
            <Hover ref={btnRef} />
            <Link to='about'>
              <ButtonImage src='images/icons/gotham.svg' alt='Gotham Capital' />
            </Link>
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
