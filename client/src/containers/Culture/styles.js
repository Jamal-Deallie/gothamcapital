import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 0 12rem 0;
  width: 100%;
`;

export const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  overflow: hidden;
  max-width: 100rem;
  grid-gap: 3rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: none;
    grid-template-rows: auto;
    gap: 2.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: red;
  @media screen and (max-width: 800px) {
    padding: none;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 50rem;
  height: auto;
  filter: grayscale(100%);
  object-fit: cover;
  aspect-ratio: 3/4;
`;

export const Desc = styled.p`
  font-size: 2.4rem;
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.variant.tertiary};
  line-height: 1.5;
  text-align: left;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 12.5rem;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-top: none;
    grid-row: 1;
    text-align: center;
    justify-content: center;
    padding-left: calc(1px + 1.5625vw);
    padding-right: calc(1px + 1.5625vw);
  }
`;

export const Heading = styled.h1`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 5.2rem;
  color: ${props => props.theme.variant.primary};
  font-style: italic;
  font-weight: 300;
  line-height: 1.5;
`;

export const HeadingContainer = styled.div`
  width: fit-content;
  overflow: hidden;
  margin-bottom: 2rem;
  width: 100%;
`;
export const DescContainer = styled.div`
  width: fit-content;
  overflow: hidden;
  font-family: ${props => props.theme.fontFamily.main};
  width: 100%;
`;
