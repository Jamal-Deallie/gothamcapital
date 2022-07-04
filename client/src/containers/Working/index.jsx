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
  Container,
  FlexContainer,
  QuoteContainer,
  ImageWrapper,
  Quote,
  QuoteLeft,
  QuoteRight,
} from './styles';
import { workingItems } from '../../shared/workingItems';
export default function WorkingContainer() {
  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          <Title>Our Work Environment</Title>
          <Heading>WE HELP YOU PREPARE FOR THE FUTURE</Heading>
          <Desc>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
        </ContentContainer>
        <OuterContainer>
          <InnerContainer>
            <GridContainer>
              {workingItems.map(items => {
                return (
                  <Column key={items.id}>
                    <Subheader>{items.subheader}</Subheader>
                    <Text>{items.desc}</Text>
                  </Column>
                );
              })}
            </GridContainer>
          </InnerContainer>
          <FlexContainer>
            <ImageWrapper>

            </ImageWrapper>
            <Container>

            </Container>
          </FlexContainer>
        </OuterContainer>
      </Wrapper>
    </Section>
  );
}
