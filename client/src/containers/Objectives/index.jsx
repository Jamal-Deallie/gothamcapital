import React, { useRef, useEffect } from 'react';
import {
  ContentContainer,
  Container,
  Desc,
  GridContainer,
  Heading,
  Image,
  InnerContainer,
  Section,
} from './styles';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';
import useArrayRef from '../../hooks/useArrayRef';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ObjectiveContainer() {
  gsap.registerPlugin(DrawSVGPlugin);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  const textRef = useRef(null);
  const subheaderRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  // useEffect(() => {
  //   const splitText = new SplitText(textRef.current, {
  //     type: 'lines',
  //     linesClass: 'lineChildren',
  //   });
  //   const splitHeader = new SplitText(headerRef.current, {
  //     type: 'lines',
  //     linesClass: 'lineHeader',
  //   });
  //   gsap.set(subheaderRef.current, { autoAlpha: 0 });
  //   const tl = gsap
  //     .timeline()
  //     .to(subheaderRef.current, { autoAlpha: 1 })
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
  //         amount: 0.6,
  //       },
  //     })
  //     .fromTo(
  //       circleRef.current,
  //       { drawSVG: '0%' },
  //       {
  //         duration: 0.8,
  //         drawSVG: '100%',

  //         stagger: {
  //           amount: 0.6,
  //         },
  //       }
  //     )
  //     .to(
  //       statRef.current[0],
  //       {
  //         innerText: 24,
  //         duration: 2,
  //         snap: {
  //           innerText: 1,
  //         },
  //       },
  //       0
  //     )
  //     .to(
  //       statRef.current[1],
  //       {
  //         innerText: 17,
  //         duration: 2,
  //         snap: {
  //           innerText: 1,
  //         },
  //       },
  //       0
  //     )
  //     .to(
  //       statRef.current[2],
  //       {
  //         innerText: 15,
  //         duration: 2,
  //         snap: {
  //           innerText: 1,
  //         },
  //       },
  //       0
  //     );

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
  // }, [circleRef, statRef, textRef, subheaderRef, containerRef, headerRef]);

  //add matchmedia Scrolltrigger batch
  // useEffect(() => {
  //   function animate(section) {
  //     let tl = gsap.timeline();
  //     tl.fromTo(
  //       circleRef.current,
  //       { drawSVG: '0%' },
  //       { duration: 0.8, drawSVG: '100%' }
  //     )

  //   }
  // });

  useEffect(() => {
    setTimeout(() => {
      gsap.from(imageRef.current, {
        duration: 1,
        opacity: 0,
        ease: 'power3',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top center',
          markers: true,
          end: 'bottom 30px',
          toggleActions: 'play none none reverse',
        },
      });
      ScrollTrigger.refresh();
    }, 10);
  }, [imageRef, wrapperRef]);

  return (
    <Section>
      <GridContainer ref={containerRef}>
        <Container>
          <Image src='images/general/diversity.jpg' alt='business meeting' />
        </Container>
        <ContentContainer>
          <InnerContainer>
            <Heading ref={headerRef}>Never Made Investing So Easy</Heading>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Desc>
          </InnerContainer>
        </ContentContainer>
      </GridContainer>
    </Section>
  );
}
