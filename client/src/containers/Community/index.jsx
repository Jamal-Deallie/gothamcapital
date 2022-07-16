import { useRef, useEffect } from 'react';
import {
  Box,
  Container,
  CommunitySection,
  Heading,
  Image,
  OuterContainer,
  Section,
  Wrapper,
} from './styles';
import { CommunityData as data } from '../../shared/sharedData';
import useArrayRef from '../../hooks/useArrayRef';
import { horizontalLoop } from '../../animations/horizontalLoop';
import { headerAnimation } from '../../animations/headerAnimation';

export default function CommunityContainer() {
  const headerRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    headerAnimation(headerRef.current, containerRef.current);
  });

  const config = {
    draggable: true,
    center: false,
    speed: 0.5,
    reversed: false,
    repeat: -1,
    snap: false,
  };

  useEffect(() => {
    horizontalLoop(logo.current, config);
  }, []);

  const [logo, setLogo] = useArrayRef();
  return (
    <CommunitySection>
      <OuterContainer>
        <Container ref={containerRef}>
          <Heading ref={headerRef}>Community Partners</Heading>
        </Container>
        <Section>
          <Wrapper>
            {data.map(d => {
              return (
                <Box key={d.id} ref={setLogo}>
                  <Image src={d.image} alt={d.alt} />
                </Box>
              );
            })}
          </Wrapper>
        </Section>
      </OuterContainer>
    </CommunitySection>
  );
}
