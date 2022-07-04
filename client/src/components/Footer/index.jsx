import {
  ButtonContainer,
  FooterSection,
  Heading,
  Wrapper,
  Border,
  TopRow,
  SecondRow,
  LinkContainer,
  IconContainer,
  Links,
  Icon,
  VerticalDivider,
  ThirdRow,
  FourthRow,
  Text,
  Container,
} from './styles';
import { FooterItems, SocialMediaItems } from '../../shared/sharedData';
import { ScrollButton } from '../../components';
import { Link } from 'react-router-dom';
import { Button } from '../Navigation/styles';

export default function Footer() {
  const groupOneLinks = FooterItems.slice(0, 3).map(item => {
    return (
      <Links key={item.id} to={item.link}>
        {item.label}
      </Links>
    );
  });

  const groupTwoLinks = FooterItems.slice(3, 6).map(item => {
    return (
      <Links key={item.id} to={item.link}>
        {item.label}
      </Links>
    );
  });

  const SocialMedia = SocialMediaItems.map(item => {
    return (
      <Link key={item.id} to={item.link}>
        <Icon src={item.img} />
      </Link>
    );
  });

  return (
    <FooterSection>
      <ButtonContainer>

      <ScrollButton />

      </ButtonContainer>
      <Container>
        <Wrapper>
          <Heading>Gotham Capital</Heading>
        </Wrapper>

        <SecondRow>
          <LinkContainer>{groupOneLinks}</LinkContainer>
          <Wrapper $flexDirection='column'>
            <IconContainer>{SocialMedia}</IconContainer>
          </Wrapper>
          <LinkContainer>{groupTwoLinks}</LinkContainer>
        </SecondRow>
        <ThirdRow>
          <VerticalDivider />
        </ThirdRow>
        <FourthRow>
          <Text>©2022 Gotham Capital</Text>
        </FourthRow>

      </Container>
    </FooterSection>
  );
}
