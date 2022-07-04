import React, { useRef, useEffect } from 'react';
import {
  GridContainer,
  Wrapper,
  Heading,
  Section,
  Text,
  Image,
  Desc,
  Title,
  ContentContainer,
  Button,
  SubTitle,
  Icon,
  Number,
  Container,
  Inner,
  Outer,
  Subheader,
  Column,
  ColumnInner,
} from './styles';
import { ApartItems } from '../../shared/sharedData';
// import { SecondaryButton } from '../../components';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';
import useArrayRef from '../../hooks/useArrayRef';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ApartContainer() {
  const textRef = useRef(null);
  const subheaderRef = useRef(null);
  const [headerRef, setHeaderRef] = useArrayRef();
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.registerPlugin(SplitText);
      gsap.registerPlugin(ScrollTrigger);
      const splitText = new SplitText(textRef.current, {
        type: 'lines',
        linesClass: 'lineChildren',
      });
      const tl = gsap
        .timeline()
        .from(headerRef.current, {
          duration: 0.75,
          opacity: 0,
          ease: 'power2',
          stagger: {
            amount: 0.6,
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
        trigger: containerRef.current,
        markers: true,
        start: 'top center',
        end: 'bottom 30px',
        toggleActions: 'play none none reverse',
        animation: tl,
        immediateRender: false,
      });
      return () => {
        ScrollTrigger.kill();
      };
    }, 10);
  }, [textRef, subheaderRef, containerRef, headerRef]);

  return (
    <Section>
      <Wrapper>
        <ContentContainer ref={containerRef}>
          <Title ref={setHeaderRef}>WHAT SETS US APART</Title>
          <Heading ref={setHeaderRef}>
            Vivamus magna justo, lacinia eget
          </Heading>
          <Desc ref={textRef}>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
          {/* <SecondaryButton fontColor={'#050E13'} borderColor={'#050E13'}>
            Discover More
          </SecondaryButton> */}
        </ContentContainer>
        <Container>
          <GridContainer>
            {ApartItems.map(items => {
              return (
                <Column key={items.id} className={items.class}>
                  <ColumnInner>
                    <Icon src={items.image} alt={items.title} />
                    <Subheader>{items.title}</Subheader>
                    <Text>{items.desc}</Text>
                  </ColumnInner>
                </Column>
              );
            })}
          </GridContainer>
        </Container>
      </Wrapper>
    </Section>
  );
}
