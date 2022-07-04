import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: #f3f3f3;
  padding: 10rem 0;
`;
export const Wrapper = styled.div``;

export const GridContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  padding: 2.5rem 0;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 1.8rem;
  font-weight: 800;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.2rem, calc(0.81rem + 1.93vw), 2.19rem);
  letter-spacing: 0.5px;
  padding-bottom: 5rem;
  width: 35ch;
  text-align: center;
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

export const IconWrapper = styled.div`
  height: 12.5rem;
  padding: 2rem;
`;

export const Icon = styled.img`
  height: 100%;
`;

export const Subheader = styled.h2`
  color: ${props => props.theme.variant.primary};
  text-align: center;
  font-size: 1.8rem;
  margin: 2.5rem 0;
`;

export const Column = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

export const CaptionContainer = styled.div`
  color: ${props => props.theme.variant.primary};
`;

export const Caption = styled.p`
  text-align: center;
`;
