import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.variant.primary};
`;
export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.secondary};
  padding-top: 5rem;
  text-align: center;
`;
export const StatText = styled.div`
  color: ${props => props.theme.variant.primary};
  padding: 2.5rem 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-size: clamp(1.44rem, calc(1.16rem + 1.38vw), 2.15rem);
  padding-bottom: 2.5rem;
`;
export const Caption = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-size: 1.618rem;
  width: 30ch;
  padding-bottom: 1rem;
`;

export const StatTitle = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(2.07rem, calc(1.57rem + 2.5vw), 3.36rem);
  font-weight: 300;
  max-width: 30ch;
  line-height: 1.5;
  & .lineParent {
    overflow: hidden;
    & .lineChildren {
      transform: 0rem;
    }
  }
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.2rem, calc(0.81rem + 1.93vw), 2.19rem);
  letter-spacing: 0.5px;
  padding-bottom: 5rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.variant.primary};
  border: 0;
  border-radius: 0.3rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  outline: 0;
  padding: 16px 21px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const GroupImage = styled.img`
  filter: grayscale(100%);
  height: 100%;
`;

export const ImageWrapper = styled.div``;
export const StatContainer = styled.div``;

export const SVGCircle = styled.svg`
  /* stroke-dasharray: 577;
  stroke-dashoffset: 577; */
  transition: all 1s ease;
  /* stroke-dashoffset: 294; */
  stroke-dashoffset: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  height: 320px;
  width: 320px;
`;
export const StatOuter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5rem;
  flex-wrap: wrap;
  flex-direction: ${props => props.$flexDirection || 'row'};
`;

export const StatInner = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
`;

export const StatSection = styled.div`
  background: ${props => props.theme.variant.secondary};
  width: 100%;
`;

export const StatWrapper = styled.div`
  position: relative;
  max-width: 120rem;
  margin: 0 auto;
`;

export const ContentInner = styled.div`
  padding: 5rem;
`;

export const ContentOuter = styled.div``;

export const Statistic = styled.div``;

export const Stat = styled.h1`
  display: inline-block;
  font-size:clamp(4.68rem, calc(3.57rem + 5.54vw),30.52rem);
`;

export const Percent = styled.h1`
  display: inline-block;
  font-size:clamp(4.68rem, calc(3.57rem + 5.54vw),10.52rem);
`;

export const BarOuter = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  height: 5.5rem;
  background: #2f3539;
  border-radius: 5rem;
  /* border: 5px solid black; */
  /* box-sizing: border-box; */
  display: flex;
  align-items: center;
`;

export const BarInner = styled.div`
  width: ${props => props.$stat || 0};
  height: 4rem;
  background: ${props => props.theme.variant.primary};
  border-radius: 5rem 0 0 5rem;
  display: block;
  margin-left: .5rem;
`;
