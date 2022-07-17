import { useRef, useCallback } from 'react';
import {
  Text,
  Heading,
  Percentage,
  Desc,
  Container,
  ContentContainer,
  Section,
  Wrapper,
  Column,
  Number,
  Subheader,
  Caption,
  Stat,
  Results,
  CaptionContainer,
  OuterContainer,
} from './styles';
import useArrayRef from '../../hooks/useArrayRef';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { numbersAnimation } from '../../animations/numbersAnimation';

const ResultsItems = [
  {
    id: 1,
    text: 'Of active core bond funds outperform their benchmark',
    stat: '89%',
  },
  {
    id: 3,
    text: 'Highly rated 4- and 5-star Morningstar rated funds',
    stat: 15,
  },
  {
    id: 4,
    text: 'Increase in Stock Fund Cash Flows, Year to date',
    stat: '16%',
  },
];

export default function ResultsContainer() {
  const headingRef = useRef();
  const [statRef, setStatRef] = useArrayRef();
  const containerRef = useRef();

  let stats = ResultsItems.map(a => a.stat);



  useIsomorphicLayoutEffect(() => {
    numbersAnimation(
      headingRef.current,
      statRef.current,
      containerRef.current,
      stats
    );
  });
  const items = ResultsItems.map(item => {
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

