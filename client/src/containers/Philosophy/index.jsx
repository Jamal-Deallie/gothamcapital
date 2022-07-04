import React, { useEffect, useRef } from 'react';
import {
  Text,
  Heading,
  Title,
  Wrapper,
  Desc,
  GridContainer,
  ContentContainer,
  Image,
  Section,
  Button,
  DescContainer,
  IconWrapper,
  Icon,
  Column,
  CaptionContainer,
  Subheader,
  Caption,
} from './styles';
import { philosophyItems } from '../../shared/philosophyItems';

export default function PhilosophyContainer() {

  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          <p>Our Philosophy</p>
          <Heading>Lorem ipsum dolor sit amet, consectetur adipisicing</Heading>
          <Desc>
            Our differentiated philosophy supports our singular effort to
            generate attractive risk-adjusted returns for our clients. We strive
            to capture significant upside in rising markets and to preserve
            capital in declining markets.
          </Desc>
        </ContentContainer>
        <GridContainer>
          {philosophyItems.map(items => {
            return (
              <Column key={items.id}>
                <IconWrapper>
                  <Icon src={items.imgUrl} alt={items.alt} />
                </IconWrapper>
                <Subheader>{items.headline} </Subheader>
                <CaptionContainer>
                  <Caption> {items.text}</Caption>
                </CaptionContainer>
              </Column>
            );
          })}
        </GridContainer>
      </Wrapper>
    </Section>
  );
}
