import React, { useRef, useEffect } from 'react';
import { Text, Wrapper, Section, CEOImage, LogoImage } from './styles';
import { spotlightAnimation } from '../../animations/spotlightAnimation';

export default function SpotlightContainer() {
  const containerRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    spotlightAnimation(
      headerRef.current,
      textRef.current,
      imageRef.current,
      containerRef.current
    );
  });

  return (
    <Section ref={containerRef}>
      <Wrapper>
        <div>
          <LogoImage ref={headerRef} src='/images/logos/top-ceo.svg' />
          <Text ref={textRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis
            fringilla eros, non feugiat magna varius ut. Mauris diam arcu,
            efficitur sit amet risus nec, viverra auctor tortor. Morbi
            vestibulum finibus risus, et consectetur sapien. Quisque volutpat
            lacinia condimentum. Cras ex neque, interdum at lectus a, efficitur
            imperdiet magna.
          </Text>
        </div>
        <div>
          <CEOImage ref={imageRef} src='/images/general/ceoSpotlight.png' />
        </div>
      </Wrapper>
    </Section>
  );
}
