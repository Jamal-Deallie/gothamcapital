import styled from 'styled-components';

export const Section = styled.section`
  padding: 9.5rem 0 0;
  width: 100%;
`;
export const Wrapper = styled.div`
  padding: 1rem;
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10rem;
  overflow: hidden;
  max-width: 120rem;

  @media screen and (max-width: 40rem) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const InnerContainer = styled.div`
  padding: calc(2px + 1.5625vw);
`;

export const ContentContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  padding: 2.5rem 0;
  text-transform: uppercase;
  text-align: left;
  & .lineHeader {
    transform: 0rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
`;

export const Button = styled.button`
  background: none;
  backface-visibility: hidden;
  border-radius: 0.375rem;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: ${props => props.theme.variant.primary};
  cursor: pointer;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  padding: 0.875rem 1.125rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${props => props.theme.variant.primary};
  text-align: left;
`;

export const Desc = styled.p`
  font-size: 1.8rem;
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.variant.tertiary};
  font-style: italic;
  line-height: 1.5;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 45.5rem;
  filter: grayscale(100%);
`;

export const SubTitle = styled.p``;

export const SubHeader = styled.p`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  text-transform: capitalize;
  font-style: italic;
  line-height: 1.5;
  font-size: 3.2rem;
  font-weight: 400;
`;

export const Number = styled.p`
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.25rem, calc(1.93rem + 1.58vw), 3.91rem);
  color: ${props => props.theme.variant.primary};
`;

export const Icon = styled.img`
  height: 7.5rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.variant.tertiary};
  width: 55ch;
  font-style: italic;
  line-height: 1.5;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Outer = styled.div`
  display: flex;
  gap: 10px;
`;

export const OuterCircle = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  background: ${props => props.theme.variant.primary};
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

export const Circle = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
`;

export const StatSection = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  width: 25rem;
`;

export const SVGCircle = styled.svg`
  /* stroke-dasharray: 577;
  stroke-dashoffset: 577; */
  transition: all 1s ease;
  /* stroke-dashoffset: 294; */
  stroke-dashoffset: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25rem;
  width: 25rem;
`;

export const RowContainer = styled.div`
  width: 100%;
  grid-gap: 3.5rem;
  display: grid;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
