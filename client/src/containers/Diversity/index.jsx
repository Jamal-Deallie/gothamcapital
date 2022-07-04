import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';
import useArrayRef from '../../hooks/useArrayRef';
import {
  SVGContainer,
  SVGCircle,
  GroupImag,
  Heading,
  Text,
  Title,
  Desc,
  Wrapper,
  Section,
  StatText,
  StatTitle,
  GroupImage,
  StatContainer,
  StatOuter,
  ContentContainer,
  StatWrapper,
  ContentInner,
  ContentOuter,
  ImageWrapper,
  Statistic,
  StatInner,
  StatSection,
  Caption,
  Percent,
  Stat,
  BarOuter,
  BarInner,
} from './styles';

export default function DiversityContainer() {
  // gsap.registerPlugin(DrawSVGPlugin);
  // const [statRef, setStatRef] = useArrayRef();
  // const [barRef, setBarRef] = useArrayRef();
  // const [textRef, setTextRef] = useArrayRef();
  
  // gsap.registerPlugin(SplitText);
  // const tl = gsap.timeline();

  // useEffect(() => {
  //   const split = new SplitText(textRef.current, {
  //     type: 'lines',
  //     linesClass: 'lineChildren',
  //   });

  //   const splitParent = new SplitText(textRef.current, {
  //     type: 'lines',
  //     linesClass: 'lineParent',
  //   });

  //   tl.to(statRef.current, {
  //     innerText: 48,
  //     duration: 2,
  //     snap: {
  //       innerText: 1,
  //     },
  //   }).from(split.lines, {
  //     duration: 1,
  //     y: 150,
  //     opacity: 0,
  //     ease: 'power2',
  //     stagger: {
  //       amount: 0.2,
  //     },
  //   }, "-=1").from(barRef.current, {
  //     duration: 1,
  //     width: 0
  //   });
  // }, [tl, statRef, textRef]);
  return (
    <Section>
      <Wrapper>
        <ContentContainer>
          <ImageWrapper>
            <GroupImage
              src='/images/general/diversity.png'
              alt='Gotham Leadership'
            />
          </ImageWrapper>
          <ContentOuter>
            <Heading>Diversity and Inclusion</Heading>
            <ContentInner>
              <Text>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae. Donec velit neque, auctor sit amet aliquam vel
              </Text>
              <Text>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae. Donec velit neque, auctor sit amet aliquam vel
              </Text>
              <Caption>~ Tracey E. Flaherty</Caption>
              <Caption>
                Senior Vice President, Global Head of Corporate Social
                Responsibility and Public Affairs
              </Caption>
            </ContentInner>
          </ContentOuter>
        </ContentContainer>
      </Wrapper>
    </Section>
  );
}

// <StatContainer>
// <StatOuter>
//   <StatInner>
//     <SVGCircle xmlns='http://www.w3.org/2000/svg'>
//       <g>
//         {/* <ellipse
//         ry='60'
//         rx='60'
//         cy='62.5'
//         cx='62.5'
//         stroke-width='5'
//         stroke='#F3F3F3'
//         fill='transparent'
//       /> */}
//         <ellipse
//           ry='150'
//           rx='150'
//           class='circle'
//           cy='160'
//           cx='160'
//           stroke-width='5'
//           stroke='#BB8760'
//           fill='transparent'
//         />
//       </g>
//     </SVGCircle>
//     <StatText>26%</StatText>
//   </StatInner>
//   <StatTitle> of Portfolio Managers are females</StatTitle>
// </StatOuter>
// </StatContainer>
