import React, { useRef, useEffect, useState } from 'react';
import {
  Text,
  Heading,
  Title,
  Desc,
  Container,
  ContentContainer,
  Section,
  Placeholder,
  Value,
  Values,
  Wrapper,
  ValueContainer,
  ValueButton,
} from './styles';
import { ValueItems } from '../../shared/sharedData';

export default function ValuesContainer() {
  const [value, setValue] = useState(0);

  const { id, desc } = ValueItems[value];

  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          <Title>Gotham's Values</Title>
          <Heading>Lorem ipsum dolor sit amet</Heading>
          <Desc>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae. Donec velit neque, auctor sit amet aliquam vel
          </Desc>
        </ContentContainer>
        <Container>
          <ValueContainer>
            <Desc key={id}>
              <p>{desc}</p>
            </Desc>
          </ValueContainer>
          <Values>
            {ValueItems.map((item, index) => {
              return (
                <ValueButton
                  key={item.id}
                  onClick={() => {
                    setValue(index);
                  }}
                  $active={index === value ? true : false}>
                  <p>{item.principles}</p>
                </ValueButton>
              );
            })}
          </Values>
        </Container>
      </Wrapper>
    </Section>
  );
}
