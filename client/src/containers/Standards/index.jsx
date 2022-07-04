import React, { useEffect, useRef } from 'react';
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
  AccordionWrapper,
} from './styles';
import { Card, Accordion } from '../../components';
import { StandardItems } from '../../shared/sharedData';
import useArrayRef from '../../hooks/useArrayRef';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StandardsContainer() {
  const textRef = useRef(null);
  const headerRef = useRef(null);
  const subHeader = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const subheaderRef = useRef(null);
  const [accordionRef, setAccordionRef] = useArrayRef();
  const contentRef = useRef(null);

  //add a useEffect for the Title Header Desc

  // useEffect(() => {
  //   setTimeout(() => {
  //     const splitText = new SplitText(textRef.current, {
  //       type: 'lines',
  //       linesClass: 'lineChildren',
  //     });
  //     const splitHeader = new SplitText(headerRef.current, {
  //       type: 'lines',
  //       linesClass: 'lineHeader',
  //     });

  //     const tl = gsap
  //       .timeline()
  //       .from(subheaderRef.current, {
  //         duration: 0.75,
  //         opacity: 0,
  //         ease: 'power2',
  //       })
  //       .from(splitHeader.lines, {
  //         duration: 0.75,
  //         y: 100,
  //         opacity: 0,
  //         ease: 'power2',
  //         stagger: {
  //           amount: 0.2,
  //         },
  //       })
  //       .from(splitText.lines, {
  //         duration: 0.75,
  //         y: 100,
  //         opacity: 0,
  //         ease: 'power2',
  //         stagger: {
  //           amount: 0.2,
  //         },
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
  //     ScrollTrigger.refresh();
  //   });
  // }, [contentRef, textRef, subheaderRef, containerRef, headerRef]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     gsap.set(accordionRef.current, { opacity: 0, y: 100 });
  //     ScrollTrigger.batch(accordionRef.current, {
  //       trigger: containerRef.current,
  //       // interval: 0.1, // time window (in seconds) for batching to occur.
  //       // batchMax: 3,   // maximum batch size (targets)

  //       markers: true,
  //       start: 'top center',
  //       end: 'bottom 30px',
  //       toggleActions: 'play none none reverse',
  //       onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
  //       // also onLeave, onEnterBack, and onLeaveBack
  //       // also most normal ScrollTrigger values like start, end, etc.
  //     });
  //     ScrollTrigger.refresh();
  //   });
  // }, [accordionRef]);

  return (
    <Section>
      <Wrapper ref={containerRef}>
        <ContentContainer>
          <Title ref={subheaderRef}>Who We Are</Title>
          <Heading ref={headerRef}>WE HELP YOU PREPARE FOR THE FUTURE</Heading>
          <Desc ref={textRef}>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
        </ContentContainer>
        <AccordionWrapper ref={contentRef}>
          {StandardItems.map(items => {
            return (
              <Container key={items.id} ref={setAccordionRef}>
                <Accordion header={items.main} desc={items.desc} />
              </Container>
            );
          })}
        </AccordionWrapper>
      </Wrapper>
    </Section>
  );
}
