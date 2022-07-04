import {
  Column,
  ColumnInner,
  Container,
  ContentContainer,
  Desc,
  GridContainer,
  Icon,
  Section,
  Heading,
  Text,
  Title,
  Wrapper,
} from './styles';
import { principlesItems } from '../../shared/principleItems.js';

export default function PrinciplesContainer() {
  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          <Heading>Investment Principles</Heading>
        </ContentContainer>
        <Container>
          <GridContainer>
            {principlesItems.map(items => {
              return (
                <Column
                  key={items.id}
                  className={items.class}
                  $bgColor={items.bgColor}
                  $txtColor={items.txtColor}>
                  <ColumnInner>
                    <Icon src={items.src} alt={items.title} />
                    <Title>{items.strategy}</Title>
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
