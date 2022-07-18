import { useRef } from 'react';
import {
  Heading,
  Container,
  ContentContainer,
  Section,
  Wrapper,
  Column,
  Caption,
  Stat,
  CaptionContainer,
} from './styles';
import useArrayRef from '../../hooks/useArrayRef';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { numbersAnimation } from '../../animations/numbersAnimation';
import { resultsItems } from '../../shared/resultsItems';

export default function ResultsContainer() {
  const headingRef = useRef();
  const [statRef, setStatRef] = useArrayRef();
  const containerRef = useRef();

  let stats = resultsItems.map(a => a.stat);

  useIsomorphicLayoutEffect(() => {
    numbersAnimation(
      headingRef.current,
      statRef.current,
      containerRef.current,
      stats
    );
  });
  const items = resultsItems.map(item => {
    return (
      <Column key={item.id} ref={setStatRef}>
        <Stat>{item.stat}</Stat>
        <CaptionContainer>
          <Caption>{item.text}</Caption>
        </CaptionContainer>
      </Column>
    );
  });
  return (
    <Section>
      <ContentContainer ref={containerRef}>
        <Container>
          <Heading ref={headingRef}>Gotham By The Numbers</Heading>
        </Container>
        <Wrapper>{items}</Wrapper>
      </ContentContainer>
    </Section>
  );
}
