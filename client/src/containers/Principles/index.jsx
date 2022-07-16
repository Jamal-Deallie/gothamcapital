import { useRef, useEffect } from 'react';
import {
  Column,
  ColumnInner,
  ContentContainer,
  GridContainer,
  Icon,
  Section,
  Heading,
  Text,
  Title,
  Wrapper,
} from './styles';
import { principlesItems } from '../../shared/principleItems.js';
import { headerAnimation } from '../../animations/headerAnimation';
import { batchAnimation } from '../../animations/batchAnimation';
import useArrayRef from '../../hooks/useArrayRef';

export default function PrinciplesContainer() {
  const headerRef = useRef();
  const containerRef = useRef();
  const batchContainerRef = useRef();
  const [batchRef, setBatchRef] = useArrayRef();

  useEffect(() => {
    headerAnimation(headerRef.current, containerRef.current);
  });

  useEffect(() => {
    batchAnimation(batchRef.current, containerRef.current);
  });
  return (
    <Section>
      <Wrapper>
        <ContentContainer ref={containerRef}>
          <Heading ref={headerRef}>Investment Principles</Heading>
        </ContentContainer>

        <GridContainer ref={batchContainerRef}>
          {principlesItems.map(items => {
            return (
              <Column key={items.id}>
                <ColumnInner ref={setBatchRef}>
                  <Icon src={items.src} alt={items.title} />
                  <Title>{items.strategy}</Title>
                  <Text>{items.desc}</Text>
                </ColumnInner>
              </Column>
            );
          })}
        </GridContainer>
      </Wrapper>
    </Section>
  );
}
