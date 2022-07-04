import { useRef } from 'react';
import {
  Desc,
  GridContainer,
  HeaderWrapper,
  Section,
  Subheader,
  Wrapper,
} from './styles';
import useArrayRef from '../../hooks/useArrayRef';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { textFill } from '../../animations/textFill';

export default function AboutContainer() {
  const [textRef, setTextRef] = useArrayRef();
  const containerRef = useRef();

  useIsomorphicLayoutEffect(() => {
    textFill(textRef.current, containerRef.current);
  });

  return (
    <Section ref={containerRef}>
      <GridContainer>
        <HeaderWrapper>
          <Subheader ref={setTextRef}>Gotham's Story</Subheader>
        </HeaderWrapper>
        <Wrapper>
          <Desc ref={setTextRef}>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
          </Desc>
        </Wrapper>
      </GridContainer>
    </Section>
  );
}
