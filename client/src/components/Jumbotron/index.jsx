import {
  ButtonContainer,
  ButtonImage,
  JumbotronSection,
  HeaderContainer,
  ContentContainer,
  Heading,
  GridContainer,
  ImageContainer,
  Italic,
  Image,
} from './styles';

export default function Jumbotron(props) {
  return (
    <JumbotronSection>
      <GridContainer>
        <ContentContainer>
          <HeaderContainer>
            <Heading>
            Explore <Italic>Our</Italic>
            </Heading>
            <Heading>Gotham's Values</Heading>
          </HeaderContainer>
        </ContentContainer>

        <ImageContainer>
          <Image src='images/general/diversity.png' alt='Gotham Capital' />
        </ImageContainer>
      </GridContainer>
    </JumbotronSection>
  );
}
