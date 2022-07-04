import styled from 'styled-components';

export const Section = styled.section`
  padding: 9.5rem 0 12rem 0;
  width: 100%;
`;

export const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5rem;
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
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 5.2rem;
  color: ${props => props.theme.variant.primary};
  line-height: 1.2;
  text-align: left;
  margin-bottom: 3.5rem;
`;

export const Desc = styled.p`
  font-size: 2.4rem;
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.variant.tertiary};
  line-height: 1.5;
  text-align: left;
  font-style: italic;
  @media screen and (max-width: 800px) {
    /* text-align: center; */
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 37.5rem;
  filter: ${props => (props.$filter ? 'grayscale(100%)' : 'none')};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
