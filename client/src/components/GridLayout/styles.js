import styled from 'styled-components';

export const Section = styled.section`
  padding: ${props => (props.$pad ? props.$pad : '8.5rem 0 8.5rem 0')};
  width: 100%;
`;

export const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5rem;
  overflow: hidden;
  max-width: 120rem;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const InnerContainer = styled.div`
  margin-top: calc(0.5rem + 2vw);
  padding: calc(2px + 1.5625vw);
  white-space: pre-line;
  @media screen and (max-width: 800px) {
    margin: 0 auto;
    max-width: 60rem;
  }
`;

export const ContentContainer = styled.div``;

export const Heading = styled.h1`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 5.2rem;
  color: ${props => props.theme.variant.primary};
  line-height: 1.2;
  text-align: left;
  margin-bottom: 3.5rem;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const Desc = styled.p`
  font-size: 1.8rem;
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.variant.tertiary};
  line-height: 1.5;
  text-align: left;
  white-space: pre-line;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 47.5rem;
  filter: ${props => (props.$filter ? 'grayscale(100%)' : 'none')};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  order: ${props => (props.$order ? -1 : 2)};
  @media screen and (max-width: 800px) {
    order: 2;
  }
`;
