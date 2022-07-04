import styled from 'styled-components';

export const JumbotronSection = styled.div`
  position: relative;
  height: calc(100vh - 15rem);
  overflow: hidden;
`;

export const Heading = styled.h1`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 12.25rem;
  color: ${props => props.theme.variant.primary};

  font-weight: 300;
  @media screen and (max-width: 800px) {
    font-size: 9rem;
  }
`;

export const Italic = styled.span`
  font-style: italic;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  grid-area: 1/4/2/2;
`;

export const InnerContainer = styled.div``;

export const HeaderContainer = styled.div`
  margin-top: calc(2rem + 10.5625vw);
`;

export const ButtonImage = styled.img`
  z-index: 2;
  filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.4));
  width: 19rem;
  padding: 1.5rem;
  margin-left: 1rem;
  /* margin-left: 1rem; */
  text-shadow: 2px 2px #000000;
  @media screen and (max-width: 800px) {
    width: 19rem;
    padding: 1.5rem;
    margin-left: 1rem;
    /* margin-left: 1rem; */
    text-shadow: 2px 2px #000000;
  }
`;
export const Text = styled.p`
  font-size: 1.8rem;
  font-family: ${props => props.theme.fontFamily.main};
  color: ${props => props.theme.variant.tertiary};
  width: 50ch;
  line-height: 1.5;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto minmax(20px, 290px) minmax(20px, 850px) auto;
  grid-template-rows: auto;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Container = styled.div``;

export const ImageContainer = styled.div`
  grid-area: 1/3/2/4;
  width: 100%;
  margin-top: 6.5rem;
  z-index: -1;

  overflow: hidden;
  @media screen and (max-width: 800px) {
    position: absolute;
    top: 0;

    z-index: -1;
    margin-top: 0rem;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  position: absolute;
  object: center;
  height: calc(100vh - 12rem);
  z-index: -1;
  filter: grayscale(100%);
`;
