import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 10rem 0 12rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.header};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  overflow: hidden;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  font-style: italic;
  padding: 2.5rem 0;
  overflow: hidden;
`;

export const Subheader = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(2.16rem, calc(1.40rem + 3.79vw), 4.10rem);
  font-weight: 800;
  font-style: italic;
  background-image: linear-gradient(90deg, #f3f3f3 0%, #f3f3f3 0%, #444 0%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.63rem + 2.65vw), 3.52rem);
  font-style: italic;
  line-height: 1.5;
  overflow: hidden;
  background-image: linear-gradient(90deg, #f3f3f3 0%, #f3f3f3 0%, #444 0%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-break: break-all;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 140rem;
  grid-gap: 1rem;
  padding: calc(8px + 1.5625vw);
  @media screen and (max-width: 800px) {
    grid-template-columns: none;
    grid-template-rows: auto;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    display: block;
    margin-bottom: 3.5rem;
  }
`;
