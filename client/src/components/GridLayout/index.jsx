import { useRef, useEffect } from 'react';
import {
  ContentContainer,
  ImageContainer,
  Desc,
  GridContainer,
  Heading,
  Image,
  InnerContainer,
  Section,
} from './styles';
import { gridAnimation } from '../../animations/gridAnimation';

export default function GridLayout({
  heading,
  desc,
  img,
  alt,
  filter,
  pad,
  order,
}) {
  const textRef = useRef();
  const headerRef = useRef();
  const containerRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    gridAnimation(
      headerRef.current,
      textRef.current,
      imageRef.current,
      containerRef.current
    );
  }, []);

  
  return (
    <Section $pad={pad}>
      <GridContainer ref={containerRef}>
        <ContentContainer>
          <InnerContainer>
            <Heading ref={headerRef}>{heading}</Heading>
            <Desc ref={textRef}>{desc}</Desc>
          </InnerContainer>
        </ContentContainer>
        <ImageContainer $order={order}>
          <Image src={img} alt={alt} $filter={filter} ref={imageRef} />
        </ImageContainer>
      </GridContainer>
    </Section>
  );
}
