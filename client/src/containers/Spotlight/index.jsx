import React, { useRef, useEffect } from 'react';
import {
  Text,
  Heading,
  Title,
  Wrapper,
  Desc,
  Container,
  ContentContainer,
  Image,
  Section,
  Button,
  CEOImage,
  LogoImage,
} from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function SpotlightContainer() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const headerRef = useRef(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.registerPlugin(SplitText);
  //     const splitText = new SplitText(textRef.current, {
  //       type: 'lines',
  //       linesClass: 'lineChildren',
  //     });
  //     const tl = gsap
  //       .timeline()
  //       .from(headerRef.current, {
  //         duration: 1,
  //         opacity: 0,
  //         ease: 'power2',
  //       })
  //       .from(splitText.lines, {
  //         duration: 0.75,
  //         y: 100,
  //         opacity: 0,
  //         ease: 'power2',
  //         stagger: {
  //           amount: 0.2,
  //         },
  //       })
  //       .from(imageRef.current, {
  //         duration: 1.3,
  //         opacity: 0,
  //         ease: 'circ.out',
  //       });
  //     ScrollTrigger.create({
  //       trigger: containerRef.current,
  //       markers: true,
  //       start: 'top center',
  //       end: 'bottom 30px',
  //       toggleActions: 'play none none reverse',
  //       animation: tl,
  //       immediateRender: false,
  //     });
  //     return () => {
  //       ScrollTrigger.kill();
  //     };
  //   }, 10);
  // }, [containerRef, imageRef, headerRef]);
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
