import styled from 'styled-components';

export const JumbotronSection = styled.div`
  position: relative;
  height: calc(100vh - 9rem);
  overflow: hidden;
`;

export const Heading = styled.h1`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(3.052rem, calc(1.53rem + 13.81vw), 11.37rem);
  color: ${props => props.theme.variant.primary};
  text-transform: capitalize;
  font-weight: 300;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 800px) {
    font-size: 7.5rem;
  }
`;

export const Italic = styled.span`
  font-style: italic;
`;

export const ContentContainer = styled.div`
  padding: calc(8px + 1.5625vw);
  grid-column-end: 3;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
  margin-top: 15%;
  margin-left: 7%;
  @media screen and (max-width: 900px) {
    padding: 1rem;
    grid-column-end: 4;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  left: -2%;
  grid-column-end: 5;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-row-start: 1;
  justify-self: end;
`;

export const HeaderContainer = styled.div``;

export const Text = styled.p`
  font-size: clamp(1.41rem, calc(1.21rem + 0.98vw), 1.91rem);
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.variant.primary};
  max-width: 50ch;
  line-height: 1.5;
  margin-top: 3.5rem;
  max-width: 45ch;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.6);
`;

export const GridContainer = styled.div`
  display: grid;
  position: relative;
  grid-auto-columns: auto;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 7.5% 1fr 0.75fr 7.5%;
  overflow: hidden;
  @media screen and (max-width: 800px) {
  }
`;

export const ImageContainer = styled.div`
  grid-column-end: 5;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-row-start: 1;
  justify-self: end;
  z-index: -1;

  @media screen and (max-width: 800px) {
  }
`;

export const Image = styled.img`
  height: 100vh;
  object-fit: cover;
  display: inline-block;
  vertical-align: baseline;
  filter: grayscale(50%) brightness(70%);
`;
