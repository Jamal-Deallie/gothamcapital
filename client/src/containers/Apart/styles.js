import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  background: #f3f3f3;
`;
export const Wrapper = styled.div`
  padding: 1rem;
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  max-width: 95ch;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
  /* font-size: clamp(2.25rem, calc(1.93rem + 1.58vw), 3.91rem); */
  padding: 2.5rem 0;
  text-transform: uppercase;
  text-align: center;
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
  color: ${props => props.theme.variant.secondary};
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
  color: ${props => props.theme.variant.secondary};
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 24px;
  padding-bottom: 5rem;
  color: ${props => props.theme.variant.secondary};
  & .lineChildren {
    transform: 0rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const SubTitle = styled.p``;

export const Subheader = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 10px 0;
  text-align: center;
`;

export const Number = styled.p`
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 2.6rem;
`;

export const Icon = styled.img`
  height: 12rem;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-size: 16px;
  width: 30ch;
  text-align: center;
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

export const Container = styled.div`
  background: #f3f3f3;
`;

export const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2rem;
  grid-template-areas:
    'one one two'
    'three four five'
    'six seven seven';
  background: #f3f3f3;
  align-content: center;
  justify-items: center;
  padding: 10rem;
  max-width: 120rem;
`;

export const Column = styled.div`
  height: 30rem;
  &.one {
    grid-area: one;
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  &.two {
    grid-area: two;
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
  &.seven {
    grid-area: seven;
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
`;
