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
import { gridAnimation } from '../../animations/gridAnimation';

export default function GridLayout({ heading, desc, img, alt, filter }) {
  const textRef = useRef();
  const headerRef = useRef();
  const containerRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    gridAnimation(
      headerRef.current,
      textRef.current,
      imageRef.current,
      containerRef.current
    );
  });
  return (
    <Section>
      <GridContainer ref={containerRef}>
        <ContentContainer>
          <InnerContainer>
            <Heading ref={headerRef}>{heading}</Heading>
            <Desc ref={textRef}>{desc}</Desc>
          </InnerContainer>
        </ContentContainer>
        <Container>
          <Image src={img} alt={alt} $filter={filter} ref={imageRef} />
        </Container>
      </GridContainer>
    </Section>
  );
}
