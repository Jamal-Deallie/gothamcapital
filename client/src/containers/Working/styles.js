import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.variant.secondary};
  padding-top: 9.5rem;
`;
export const Wrapper = styled.div`
  padding: 1rem;
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridContainer = styled.div`
  padding: 5rem;
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 5rem;
`;

export const OuterContainer = styled.div`
  padding-top: 2.5%;
`;

export const Subheader = styled.h2`
  color: ${props => props.theme.variant.primary};
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
  line-height: 2.3rem;
`;

export const Column = styled.div`
  background: #f3f3f3;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  padding: 5% 0;
  text-transform: uppercase;
  text-align: center;
  max-width: 60rem;
  line-height: 5.4rem;
  & .lineHeader {
    transform: 0rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 1.8rem;
  font-weight: 800;
`;

export const Desc = styled.p`
  font-size: 2.4rem;
  padding-bottom: 5rem;
  color: ${props => props.theme.variant.primary};
  max-width: 50rem;
  & .lineChildren {
    transform: 0rem;
  }
`;

export const Image = styled.img`
  filter: grayscale(100%);
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

export const Border = styled.span`
  height: 0.2rem;
  width: 100%;
  background: ${props => props.theme.variant.primary};
  display: block;
  max-width: 130rem;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  background: ${props => props.theme.variant.primary};
  width: 50%;
  position: relative;
`;

export const QuoteContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5rem;
`;

export const QuoteLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 5rem;
  margin-top: 5rem;
  height: 10rem;
`;
export const QuoteRight = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 10rem;
  margin-right: 5rem;
  margin-bottom: 5rem;
`;

export const Quote = styled.p`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: clamp(2.16rem, calc(1.67rem + 2.45vw), 3.42rem);
  padding: 5.5em;
`;

export const ImageWrapper = styled.div`
  width: 50%;
  object-fit: cover;
`;
