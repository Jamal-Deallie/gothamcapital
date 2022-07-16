import React, { useRef, useEffect } from 'react';
import {
  JumbotronSection,
  HeaderContainer,
  ContentContainer,
  Heading,
  GridContainer,
  ImageContainer,
  Italic,
  Image,
  Text,
} from './styles';
import { gridAnimation } from '../../animations/gridAnimation';
import useArrayRef from '../../hooks/useArrayRef';

export default function Jumbotron({
  header1,
  header2,
  italic1,
  italic2,
  desc,
  img,
  alt,
}) {
  const textRef = useRef();
  const [headerRef, setHeaderRef] = useArrayRef();
  const containerRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gridAnimation(
      headerRef.current,
      textRef.current,
      imageRef.current,
      containerRef.current
    );
  }, [gridAnimation]);
  
  return (
    <JumbotronSection>
      <GridContainer ref={containerRef}>
        <ContentContainer>
          <HeaderContainer>
            <Heading ref={setHeaderRef}>
              {header1}
              <Italic> {italic1}</Italic>
            </Heading>
            {header2 && (
              <Heading ref={setHeaderRef}>
                {header2}
                <Italic> {italic2}</Italic>
              </Heading>
            )}
            <Text ref={textRef}>{desc}</Text>
          </HeaderContainer>
        </ContentContainer>

        <ImageContainer ref={imageRef}>
          <Image src={img} alt={alt} />
        </ImageContainer>
      </GridContainer>
    </JumbotronSection>
  );
}
