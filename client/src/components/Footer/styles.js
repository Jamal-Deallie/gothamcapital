import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterSection = styled.footer`
  width: 100%;
  position: relative;
  min-height: 30rem;
  padding-bottom: 2rem;
`;

export const Container = styled.div`
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const Heading = styled.h1`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 3.6rem;
  color: ${props => props.theme.variant.primary};
  text-transform: capitalize;
  line-height: 1.5;
  width: 30vw;
`;
export const Span = styled.h1``;

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: ${props => props.$justifyContent || 'center'};
  flex-direction: ${props => props.$flexDirection || 'row'};
`;

export const Border = styled.div`
  height: 2px;

  background: ${props => props.theme.variant.primary};
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Links = styled(Link)`
  display: block;
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-style: italic;
  font-size: 1.618rem;
  margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
  margin-top: 25px;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const LinkContainer = styled.div`
  width: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.img`
  height: 30px;
`;

export const VerticalDivider = styled.div`
  margin-top: 25px;
  width: 2px;
  height: 100px;
  background: ${props => props.theme.variant.primary};
`;

export const ThirdRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FourthRow = styled.div`
  margin-top: 25px;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
  text-align: center;
  font-size: 1.4rem;
`;

export const ButtonContainer = styled.div`
  border-top: 1px solid ${props => props.theme.variant.primary};
  border-bottom: 1px solid ${props => props.theme.variant.primary};
  padding: 2rem 0;
`;
