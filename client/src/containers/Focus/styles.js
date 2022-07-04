import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 7%;
  width: 100%;
  background-color: ${props => props.theme.variant.secondary};
`;

export const Wrapper = styled.div`
  padding: 1rem;
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div``;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  padding: 5% 0;
  max-width: 50rem;
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
  max-width: 30rem;
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 1.8rem;
  font-weight: 800;
  text-align: center;
`;

export const Desc = styled.p`
  font-size: clamp(1.44rem, calc(1.34rem + 0.49vw), 1.95rem);
  color: ${props => props.theme.variant.primary};
  padding-bottom: 2.5rem;
  max-width: 50rem;
  letter-spacing: 0.5px;
  line-height: 2.2rem;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const IconWrapper = styled.div``;

export const Content = styled.p`
  color: ${props => props.theme.variant.primary};
`;

export const ContentWrapper = styled.div``;

export const Subheader = styled.h2`
  font-weight: 600;
  padding: 5% 0;
`;

export const Container = styled.div``;

export const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2rem;
  grid-template-areas:
    'one one two'
    'three four four'
    'five five six';
  background: ${props => props.theme.variant.secondary};
  align-content: center;
  justify-items: center;
  padding: 3%;
  max-width: 120rem;
`;

export const Column = styled.div`
  height: 30rem;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.$txtColor || '#BB8760'};
  background: ${props => props.$bgColor || '#F3F3F3'};
  &.one {
    grid-area: one;
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  &.two {
    grid-area: two;
    /* background: ${props => props.theme.variant.secondary}; */

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;
  }
  &.three {
    grid-area: three;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;
  }
  &.four {
    grid-area: four;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;
  }
  &.five {
    grid-area: five;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;
  }
  &.six {
    grid-area: six;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;
  }
`;

export const ColumnInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-width: 50rem;
`;

export const Icon = styled.img`
  height: 10rem;
`;
