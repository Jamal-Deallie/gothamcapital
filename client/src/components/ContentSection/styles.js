import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  max-width: 105ch;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  padding: 2.5rem 0;
  overflow: hidden;
  & .lineHeader {
    transform: 0rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 2.19rem;
  letter-spacing: 0.5px;
  padding-bottom: 5rem;
  line-height: 1.5;
  overflow: hidden;
  & .lineChildren {
    transform: 0rem;
  }
`;
