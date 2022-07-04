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
  Button,
  Subheader,
  ContentWrapper,
  Icon,
  IconWrapper,
  Content,
  ColumnInner,
  Column,
  GridContainer,
} from './styles';
// import {Button} from '../../components'
import { focusItems } from '../../shared/focusItems';

export default function FocusContainer() {
  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          <Title>Our Focus</Title>
          <Heading>WE HELP YOU PREPARE FOR THE FUTURE</Heading>
          <Desc>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
        </ContentContainer>
        <Container>
          <GridContainer>
            {focusItems.map(items => {
              return (
                <Column key={items.id} className={items.class}>
                  <ColumnInner>
                    <Icon src={items.src} alt={items.title} />
                    <Subheader>{items.headline}</Subheader>
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
