import React, { useEffect, useRef } from 'react';
import {
  Heading,
  Title,
  Wrapper,
  Desc,
  Container,
  ContentContainer,
  Section,
  Subheader,
  GridContainer,
  HeaderWrapper,
} from './styles';
import useArrayRef from '../../hooks/useArrayRef';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { textFill } from '../../animations/textFill';

export default function StoryContainer() {
  const [textRef, setTextRef] = useArrayRef();
  const headerRef = useRef();
  const containerRef = useRef();
  const imageRef = useRef();
  const buttonRef = useRef();
  const subheaderRef = useRef();

  useIsomorphicLayoutEffect(() => {
    textFill(textRef.current, containerRef.current);
  });

  // useEffect(() => {
  //   gsap.registerPlugin(SplitText);
  //   gsap.registerPlugin(ScrollTrigger);
  //   const splitText = new SplitText(textRef.current, {
  //     type: 'lines',
  //     linesClass: 'lineChildren',
  //   });

  //   const splitHeader = new SplitText(headerRef.current, {
  //     type: 'lines',
  //     linesClass: 'lineHeader',
  //   });
  //   // gsap.set(subheaderRef.current, { autoAlpha: 0 });

  //   const tl = gsap
  //     .timeline()
  //     // .from(subheaderRef.current, {
  //     //   autoAlpha: 0,
  //     // })
  //     .from(splitHeader.lines, {
  //       duration: 0.75,
  //       y: 100,
  //       opacity: 0,
  //       ease: 'power2',
  //       stagger: {
  //         amount: 0.2,
  //       },
  //     })
  //     .from(splitText.lines, {
  //       duration: 0.75,
  //       y: 100,
  //       opacity: 0,
  //       ease: 'power2',
  //       stagger: {
  //         amount: 0.2,
  //       },
  //     });

  //   ScrollTrigger.create({
  //     trigger: containerRef.current,
  //     markers: true,
  //     start: 'top center',
  //     end: 'bottom 30px',
  //     toggleActions: 'play none none none',
  //     animation: tl,
  //     immediateRender: false,
  //   });
  //   return () => {
  //     tl.scrollTrigger.refresh();
  //     // window.removeEventListener('pointermove', onMove);
  //   };
  // }, [textRef, containerRef, subheaderRef, headerRef, buttonRef]);

  return (
    <Section ref={containerRef}>
      <GridContainer>
        <HeaderWrapper>
          <Subheader ref={setTextRef}>Who We Are</Subheader>
        </HeaderWrapper>
        
        <Wrapper>
          <Desc ref={setTextRef}>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
          </Desc>
        </Wrapper>
      </GridContainer>
    </Section>
  );
}
