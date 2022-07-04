import React, { useRef, useLayoutEffect, useEffect } from 'react';
import {
  Text,
  Heading,
  Title,
  Wrapper,
  Desc,
  InnerContainer,
  ContentContainer,
  Image,
  Section,
  OuterContainer,
  GridContainer,
  Column,
  Subheader,
  Border,
} from './styles';
import { awardItems } from '../../shared/awardItems';
import { gsap } from 'gsap';
import useArrayRef from '../../hooks/useArrayRef';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function AwardsContainer() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subheaderRef = useRef(null);
  const headerRef = useRef(null);
  const [awardRef, setAwardRef] = useArrayRef();
  const sectionRef = useRef(null);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const splitText = new SplitText(textRef.current, {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    const splitHeader = new SplitText(headerRef.current, {
      type: 'lines',
      linesClass: 'lineHeader',
    });
    let tl = gsap
      .timeline({
        // scrollTrigger: {
        //   trigger: '.start',
        //   markers: true,
        //   start: 'top center',
        //   end: 'bottom',
        //   invalidateOnRefresh: true,
        // },
      })
      .from(subheaderRef.current, {
        duration: 0.75,
        opacity: 0,
        ease: 'power2',

      })
      .from(splitHeader.lines, {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power2',
        stagger: {
          amount: 0.2,
        },

      })
      .from(splitText.lines, {
        duration: 0.75,
        y: 100,
        opacity: 0,
        ease: 'power2',
        stagger: {
          amount: 0.6,
        },

      });
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom 30px',
      toggleActions: 'play none none reset',
      animation: tl,
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     gsap.set(awardRef.current, { opacity: 0, y: 100 });
  //     ScrollTrigger.batch(awardRef.current, {
  //       trigger: containerRef.current,
  //       markers: true,
  //       start: 'top center',
  //       end: 'bottom 30px',
  //       toggleActions: 'play none none reverse',
  //       invalidateOnRefresh: true,
  //       onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
  //     });
  //     return () => {
  //       ScrollTrigger.kill();
  //     };
  //   }, 10);
  // }, [awardRef, containerRef]);

  return (
    <Section>
      <Wrapper ref={sectionRef}>
        <ContentContainer>
          <Title ref={subheaderRef}>Gotham's Awards & Recognition</Title>
          <Heading ref={headerRef}>WE HELP YOU PREPARE FOR THE FUTURE</Heading>
          <Desc ref={textRef}>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
        </ContentContainer>
        <OuterContainer ref={containerRef}>
          {awardItems.map(items => {
            return (
              <InnerContainer key={items.id}>
                <GridContainer ref={setAwardRef}>
                  <Column>
                    <Image src={items.src} alt='Award Ribbon' />
                  </Column>
                  <Column>
                    <Title>{items.title}</Title>
                    <Subheader>{items.award}</Subheader>
                    <Text>{items.desc}</Text>
                  </Column>
                </GridContainer>
                <Border />
              </InnerContainer>
            );
          })}
        </OuterContainer>
      </Wrapper>
    </Section>
  );
}
