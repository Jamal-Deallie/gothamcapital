import React, { useRef } from 'react';
import {
  Wrapper,
  Desc,
  Section,
  Subheader,
  GridContainer,
  HeaderWrapper,
} from './styles';
import useArrayRef from '../../hooks/useArrayRef';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { textFill } from '../../animations/textFill';

export default function StoryContainer() {
  const [textRef, setTextRef] = useArrayRef();
  const containerRef = useRef();

  useIsomorphicLayoutEffect(() => {
    textFill(textRef.current, containerRef.current);
  }, [textFill]);

  return (
    <Section ref={containerRef}>
      <GridContainer>
        <HeaderWrapper>
          <Subheader ref={setTextRef}>Who We Are</Subheader>
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
