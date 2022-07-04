import React from 'react';
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
  Button
} from './styles';
// import {Button} from '../../components'

export default function AboutContainer() {
  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          <Title>About Gotham</Title>
          <Heading>WE HELP YOU PREPARE FOR THE FUTURE</Heading>
          <Desc>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
          <Button>Discover More</Button>
        </ContentContainer>
        <Container>
          <Image src='/images/general/about.svg' alt='Award Ribbon' />{' '}
        </Container>
      </Wrapper>
    </Section>
  );
}
