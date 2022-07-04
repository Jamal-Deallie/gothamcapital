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
  Button,
} from './styles';

export default function LeadershipContainer() {
  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          <Title>Gotham's Leadership</Title>
          <Heading>Lorem ipsum dolor sit amet, consectetur adipisicing</Heading>
          <Desc>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
        </ContentContainer>
        <Container>
        <Image src='/images/general/team.svg' alt='Award Ribbon' />
        </Container>
      </Wrapper>
    </Section>
  );
}
