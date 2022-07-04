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
  Column,
  Caption,
  Subheader,
  FlexContainer,
} from './styles';
// import {Button} from '../../components'
import { ServeItems } from '../../shared/sharedData';
export default function ServeContainer() {
  return (
    <Section>
      <FlexContainer>
        <Container>
          <Image src='/images/general/serve.png' alt='Award Ribbon' />{' '}
        </Container>
        <ContentContainer>
          <Title>Who We Serve</Title>
          <Desc>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
          </Desc>

          <Wrapper>
            {ServeItems.map(d => {
              return (
                <Column key={d.id}>
                  <Subheader> {d.headline}</Subheader>
                  <Caption>{d.text}</Caption>
                </Column>
              );
            })}
          </Wrapper>
        </ContentContainer>
      </FlexContainer>
    </Section>
  );
}
