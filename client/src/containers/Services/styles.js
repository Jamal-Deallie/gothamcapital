import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.variant.primary};
`;
export const Wrapper = styled.div`
  padding: 10rem 5rem;
  margin: 0 auto;
`;

export const Container = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.25rem, calc(1.93rem + 1.58vw), 3.91rem);
  width: 20ch;
  padding: 25px 0;
  line-height: 5rem;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.secondary};
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-size: 1.8rem;
  font-weight: 800;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-size: clamp(1.44rem, calc(1.34rem + 0.49vw), 1.95rem);
  padding-bottom: 2.5rem;
  max-width: 50rem;
`;

export const Placeholder = styled.div`
  width: 800px;
  height: 400px;
  border: solid 1px rgba(0, 0, 0, 1);
`;

export const PlaceholderTitle = styled.p`
  text-align: center;
`;

export const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  max-width: 140rem;
  place-items: center;
  padding: 1rem;
`;
export const Image = styled.img`
  width: 7.5rem;
`;

export const Column = styled.div`
  width: 300px;
`;

export const Subheader = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.variant.secondary};
`;

export const Caption = styled.p`
  font-size: 14px;
  padding: 2.5rem 0;
`;

export const IconWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Wheel = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 157.61 93.99',
})`
  /* transform: ${props => (props.filterOpen ? 'rotate(45deg)' : null)}; */
  fill: #f7b92d;
`;

export const WheelContainer = styled.div``;

export const WheelWrap = styled.div``;

export const SVG = styled.img``;

export const SVGCircle = styled.svg`
  /* stroke-dasharray: 577;
  stroke-dashoffset: 577; */
  transition: all 1s ease;
  /* stroke-dashoffset: 294; */
  stroke-dashoffset: 0;
  position: absolute;
  top: 50%;
  left: 46%;

  height: 300px;
  width: 300px;
`;
