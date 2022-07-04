import styled from 'styled-components';

export const AccordionMenu = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;
`;

export const AccordionTitle = styled.h2`
  color: ${props => props.theme.variant.primary};
`;

export const AccordionContent = styled.p`
  color: ${props => props.theme.variant.primary};
  padding: 5rem;
  /* opacity: 0; */
  overflow: hidden;
  font-size: clamp(1.44rem, calc(1.05rem + 1.95vw), 2.44rem);
  /* transform: translateY(-100%); */
`;

export const AccordionContainer = styled.div``;

export const InnerContainer = styled.div``;

export const OuterContainer = styled.div``;

export const TitleContainer = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: 0.1rem solid ${props => props.theme.variant.primary};
  padding: 1.5rem;
  background: ${props => props.theme.variant.secondary};
`;

export const Icon = styled.img`
  height: 2.5rem;
`;

export const AccordionWrapper = styled.div`
  border: 0.1rem solid ${props => props.theme.variant.primary};
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  overflow: hidden;
  height: 0rem;
`;
