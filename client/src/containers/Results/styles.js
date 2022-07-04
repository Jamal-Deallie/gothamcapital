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

export const Percentage = styled.span`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
`;

export const Number = styled.span`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
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

export const Text = styled.p`
  color: ${props => props.theme.variant.secondary};
  text-align: center;
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-size: 1.8rem;
  font-weight: 800;
  text-align: left;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 2.4rem;
  padding-bottom: 2.5rem;
  text-align: center;
`;

export const Placeholder = styled.div`
  width: 800px;
  height: 400px;
  border: solid 1px rgba(0, 0, 0, 1);
`;

export const PlaceholderTitle = styled.p`
  text-align: center;
`;

export const Image = styled.img`
  width: 45vw;
`;

export const Subheader = styled.p`
  font-size: 18px;
  font-weight: 600;
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

export const ResultContainer = styled.div``;

export const Results = styled.p``;

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Heading = styled.h1`
padding-top: 4.5rem;
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  overflow: hidden;
  line-height: 1.2;
`;
