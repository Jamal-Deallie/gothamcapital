import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding-top: 100px 0;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.25rem, calc(1.93rem + 1.58vw), 3.91rem);
  padding-bottom: 2.5rem;
  text-align: center;
`;

export const Leaders = styled.div`
  width: 700px;
  position: relative;
`;

export const QuoteContainer = styled.div`
  width: 600px;
  position: relative;
  height: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const LeaderImage = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: grayscale(100%);
  mask-image: linear-gradient(to left, transparent 1%, black 45%);
  @media screen and (max-width: 1024px) {
    mask-image: linear-gradient(to bottom, transparent -10%, black 45%);
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 2.7rem;
  margin-bottom: 5%;
`;

export const Wrapper = styled.div`
  background-color: ${props => props.theme.variant.primary};
  width: 100%;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const InnerContainer = styled.div`
  background-color: ${props => props.$bg || props.theme.variant.primary};
  display: flex;
  gap: 100px;
  flex-direction: ${props => props.$flexDirection || 'row'};
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 100%;
`;
export const OuterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Quote = styled.p`
  max-width: 60rem;
  color: ${props => props.$color || props.theme.variant.secondary};
  font-size: 2.4rem;
  margin: 2.5% 0;
  letter-spacing: 0.5px;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const Subheader = styled.p`
  font-size: 18px;
  text-align: center;
  width: 45ch;
`;

export const HeadingContainer = styled.div``;

export const ArrowUp = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  transition: all 0.3 ease-in-out;
  /* transform: ${props => (props.filterOpen ? 'rotate(45deg)' : null)}; */
  fill: #f7b92d;
`;

export const QuoteBox = styled.svg`
  fill: transparent;
  height: 10.5rem;
`;

export const Path = styled.path`
  fill: transparent;
  stroke-width: 1.4;
  stroke: ${props => props.$color || props.theme.variant.primary};
  stroke-dasharray: 0;
  stroke-dashoffset: 20;
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.$justifyContent || 'center'};
  flex-direction: ${props => props.$flexDirection || 'row'};
  padding: 1rem;
  width: 100%;
`;
