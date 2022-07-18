import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: url(images/general/mesh-gradient.png);
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 140rem;
  padding: calc(2px + 1.5625vw);
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: none;
    grid-gap: 0;
  }
`;

export const Stat = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 4.8rem;
  text-align: center;
  font-style: italic;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(images/general/circle.svg) 50% 50% / contain no-repeat;
  height: 40rem;
`;

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CaptionContainer = styled.div`
  overflow: hidden;
`;

export const Caption = styled.p`
  margin-top: 2.5rem;
  font-size: 1.4rem;
  text-align: center;
  width: 30ch;
  line-height: 1.5;
  color: ${props => props.theme.variant.secondary};
  font-style: italic;
`;

export const Heading = styled.h1`
  padding-top: 4.5rem;
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  overflow: hidden;
  line-height: 1.2;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
