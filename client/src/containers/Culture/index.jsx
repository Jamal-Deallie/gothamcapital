import React, { useEffect, useRef } from 'react';
import {
  DescContainer,
  Heading,
  HeadingContainer,
  Image,
  Desc,
  ContentContainer,
  Container,
  GridContainer,
  Section,
  InnerContainer,
} from './styles';
import { gridAnimation } from '../../animations/gridAnimation';
import { GridLayout } from '../../components';

export default function CultureContainer() {
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
    <>
      <GridLayout
        heading='Our Culture'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                in semper ex, in ullamcorper turpis. Nunc in mollis ex. Sed vel
                libero id neque varius maximus a quis dolor. Phasellus
                consectetur massa augue, a porttitor lacus congue at. Nunc
                bibendum tellus ac lorem.'
        img={'images/general/serve.png'}
        alt={'iPhone'}
        filter={true}
      />

      {/* <Section>
        <GridContainer ref={containerRef}>
          <Container ref={imageRef}>
            <Image src=alt='iPhone' />
          </Container>
          <ContentContainer>
            <HeadingContainer>
              <Heading ref={headerRef}>Our Culture</Heading>
            </HeadingContainer>
            <DescContainer>
              <Desc ref={textRef}> </Desc>
            </DescContainer>
          </ContentContainer>
        </GridContainer>
      </Section> */}
    </>
  );
}
