import React, { useEffect, useRef } from 'react';
import { Heading, Title, Desc, ContentContainer } from './styles';

export default function ContentSection() {
  return (
    <ContentContainer>
      <Title>Who We Are</Title>
      <Heading>WE HELP YOU PREPARE FOR THE FUTURE</Heading>
      <Desc>
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae. Donec
        velit neque, auctor sit amet aliquam vel
      </Desc>
    </ContentContainer>
  );
}
