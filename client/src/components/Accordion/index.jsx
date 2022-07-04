import { useRef, useEffect, useState } from 'react';
import {
  AccordionMenu,
  AccordionTitle,
  AccordionContent,
  AccordionContainer,
  InnerContainer,
  OuterContainer,
  Icon,
  AccordionWrapper,
  TitleContainer,
  ContentContainer,
} from './styles';
import { gsap } from 'gsap';

export default function Accordion(props) {
  const contentRef = useRef(null);
  const tl = useRef();
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const [reversed, setReversed] = useState(false);
  console.log(props);
  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .to(iconRef.current, {
        transform: 'rotate(45deg)',
      })
      .to(contentRef.current, {
        height: 'auto',
        ease: 'elastic',
        duration: 1.2,
      });
    // .to(textRef.current, {
    //   duration: 0.5,
    //   yPercent: '100',
    //   opacity: 1,
    // });
  }, [contentRef]);

  useEffect(() => {
    reversed ? tl.current.play() : tl.current.reverse();
  }, [tl, reversed]);

  return (
    <>
      <AccordionMenu>
        <AccordionWrapper>
          <TitleContainer
            onClick={() => {
              setReversed(reversed => !reversed);
            }}>
            <AccordionTitle>{props.main}</AccordionTitle>
            <Icon ref={iconRef} src='/images/icons/plus.svg' alt='plus-icon' />
          </TitleContainer>

          <ContentContainer ref={contentRef}>
            <AccordionContent ref={textRef}>{props.desc}</AccordionContent>
          </ContentContainer>
        </AccordionWrapper>
      </AccordionMenu>
    </>
  );
}
