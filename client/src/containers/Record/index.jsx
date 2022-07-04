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

import useArrayRef from '../../hooks/useArrayRef';

export default function ApartContainer() {
  const headerRef = useRef();
  const containerRef = useRef();

  return (
    <Section>
      <GridContainer ref={containerRef}>
        <ContentContainer>
          <InnerContainer>
            <Heading ref={headerRef}>Never Made Investing So Easy</Heading>
            <Desc>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae. Donec velit neque, auctor sit amet aliquam vel
            </Desc>
          </InnerContainer>
        </ContentContainer>
        <Container>
          <Image src='images/general/iphone.png' alt='iPhone' />
        </Container>
      </GridContainer>
    </Section>
  );
}
