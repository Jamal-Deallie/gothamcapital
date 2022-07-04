import { useRef, useEffect, useState } from 'react';
import {
  Text,
  Leaders,
  Section,
  QuoteBox,
  LeaderImage,
  QuoteContainer,
  Wrapper,
  ImageContainer,
  OuterContainer,
  InnerContainer,
  TextWrapper,
  Quote,
  Heading,
  Subheader,
  HeadingContainer,
  Path,
  Container,
} from './styles';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { leaderItems } from '../../shared/leaderItems';

export default function LeadersContainer() {
  gsap.registerPlugin(DrawSVGPlugin);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let paths = gsap.utils.toArray('#path');
    // const splitText = new SplitText(textRef.current, {
    //   type: 'lines',
    //   linesClass: 'lineChildren',
    // });
    const tl = gsap
      .timeline()
      // .from(headerRef.current, {
      //   duration: 0.75,
      //   opacity: 0,
      //   ease: 'power2',
      //   stagger: {
      //     amount: 0.6,
      //   },
      // })
      // .from(splitText.lines, {
      //   duration: 0.75,
      //   y: 100,
      //   opacity: 0,
      //   ease: 'power2',
      //   stagger: {
      //     amount: 0.6,
      //   },
      // })
      .fromTo(
       paths,
        { drawSVG: '0%' },
        {
          duration: 0.8,
          drawSVG: '100%',

          stagger: {
            amount: 0.6,
          },
        }
      );

    // ScrollTrigger.create({
    //   trigger: containerRef.current,
    //   markers: true,
    //   start: 'top center',
    //   end: 'bottom 30px',
    //   toggleActions: 'play none none reverse',
    //   animation: tl,
    // });
    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <Section>
      <Wrapper>
        <OuterContainer>
          <HeadingContainer>
            <Heading>Our Senior Leaders</Heading>
            <Subheader>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Pellentesque in ipsum id orci porta dapibus. Vestibulum
              ante
            </Subheader>
          </HeadingContainer>
          {leaderItems.map(items => {
            return (
              <InnerContainer
                key={items.id}
                $flexDirection={items.flexDirection}
                $bg={items.bg}>
                <Leaders>
                  <TextWrapper id='name'>
                    <Text>{items.name}</Text>
                    <Text>{items.title}</Text>
                  </TextWrapper>
                  <LeaderImage id='image' src={items.image} alt={items.name} />
                </Leaders>
                <QuoteContainer>
                  <Container $justifyContent={'flex-start'}>
                    <QuoteBox
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='-1 -1.25 42.84 30.08'>
                      <Path
                        id='path'
                        $color={items.color}
                        d='M21.69,9.23c0-2.54,.93-4.71,2.8-6.52,1.81-1.81,3.95-2.71,6.44-2.71,3.05,0,5.48,1.13,7.29,3.39,1.75,2.09,2.62,4.66,2.62,7.71,0,5.59-4.74,10.98-14.23,16.18l-1.36-2.12c3.22-2.66,4.83-4.8,4.83-6.44,0-.51-.68-1.02-2.03-1.53-2.03-.73-3.42-1.44-4.15-2.12-1.47-1.24-2.2-3.19-2.2-5.85Z'
                      />
                      <Path
                        id='path'
                        $color={items.color}
                        d='M0,9.23C0,6.69,.85,4.52,2.54,2.71,4.35,.9,6.52,0,9.06,0c3.05,0,5.48,1.13,7.29,3.39,1.81,2.09,2.71,4.66,2.71,7.71,0,5.59-4.74,10.98-14.23,16.18l-1.53-2.12c3.33-2.66,5-4.8,5-6.44,0-.51-.73-1.02-2.2-1.53-1.98-.73-3.33-1.44-4.07-2.12-1.36-1.24-2.03-3.19-2.03-5.85Z'
                      />
                    </QuoteBox>
                  </Container>
                  <Quote id='quote' $color={items.color}>
                    The best way to measure your investing success is not by
                    whether you’re beating the market but by whether you’ve put
                    in place a financial plan and a behavioral discipline that
                    are likely to get you where you want to go
                  </Quote>
                  <Container $justifyContent={'flex-end'}>
                    <QuoteBox
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='-1 -1.25 42.84 30.08'>
                      <Path
                        id='path'
                        $color={items.color}
                        d='M18.63,18.51c0,2.61-.91,4.84-2.72,6.69-1.76,1.85-3.85,2.78-6.26,2.78-2.97,0-5.33-1.16-7.09-3.48-1.7-2.14-2.55-4.78-2.55-7.9C0,10.86,4.62,5.33,13.85,0l1.32,2.17c-3.13,2.72-4.7,4.92-4.7,6.6,0,.52,.66,1.04,1.98,1.56,1.98,.75,3.32,1.48,4.04,2.17,1.43,1.28,2.14,3.27,2.14,6Z'
                      />
                      <Path
                        id='path'
                        $color={items.color}
                        d='M39.74,18.51c0,2.61-.82,4.84-2.47,6.69-1.76,1.85-3.87,2.78-6.35,2.78-2.97,0-5.33-1.16-7.09-3.48-1.76-2.14-2.64-4.78-2.64-7.9,0-5.74,4.62-11.26,13.85-16.59l1.48,2.17c-3.24,2.72-4.86,4.92-4.86,6.6,0,.52,.71,1.04,2.14,1.56,1.92,.75,3.24,1.48,3.96,2.17,1.32,1.28,1.98,3.27,1.98,6Z'
                      />
                    </QuoteBox>
                  </Container>
                </QuoteContainer>
              </InnerContainer>
            );
          })}
          {/* <InnerContainer $flexDirection='row-reverse' $bg='#050E13'>
            <Leaders>
              <TextWrapper>
                <Text>Name</Text>
                <Text>Title</Text>
              </TextWrapper>
              <LeaderImage id='image' src='/images/general/leader-2.png' />
            </Leaders>
            <QuoteContainer>
              <QuoteBox src='/images/general/quoteLeft.alt.svg' alt='' />
              <Quote $color='#BB8760'>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Pellentesque in ipsum id orci porta
              </Quote>
              <QuoteBox src='/images/general/quoteRight.alt.svg' alt='' />
            </QuoteContainer>
          </InnerContainer>
          <InnerContainer>
            <Leaders>
              <TextWrapper>
                <Text>Name</Text>
                <Text>Title</Text>
              </TextWrapper>
              <LeaderImage src='/images/general/leader-3.png' />
            </Leaders>
            <QuoteContainer>
              <QuoteBox src='/images/general/quoteLeft.svg' alt='' />
              <Quote>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Pellentesque in ipsum id orci porta
              </Quote>
              <QuoteBox src='/images/general/quoteRight.svg' alt='' />
            </QuoteContainer>
          </InnerContainer>
          <InnerContainer $flexDirection='row-reverse' $bg='#050E13'>
            <Leaders>
              <TextWrapper>
                <Text>Name</Text>
                <Text>Title</Text>
              </TextWrapper>
              <LeaderImage src='/images/general/leader-4.png' />
            </Leaders>
            <QuoteContainer>
              <QuoteBox src='/images/general/quoteLeft.alt.svg' alt='' />
              <Quote $text='#BB8760'>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Pellentesque in ipsum id orci porta
              </Quote>
              <QuoteBox src='/images/general/quoteRight.alt.svg' alt='' />
            </QuoteContainer>
          </InnerContainer> */}
        </OuterContainer>
      </Wrapper>
    </Section>
  );
}
