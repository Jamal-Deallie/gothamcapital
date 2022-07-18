import styled from 'styled-components';

export const HeadingContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.variant.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: calc(8px + 1.5625vw);
`;

export const FundsSection = styled.div`
  width: 100%;
  padding-bottom: 10rem;
`;

export const Heading = styled.h1`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(2.441rem, calc(3.13rem + 5.82vw), 7.28rem);
`;

export const Text = styled.p`
  padding: 2.5rem 0;
  font-size: clamp(1.76rem, calc(1.28rem + 2.39vw), 2.98rem);
  font-family: ${props => props.theme.fontFamily.main};
`;

export const ContentContainer = styled.div``;

export const SearchBar = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 1rem;
  cursor: pointer;
  opacity: 0.7;
`;

export const SearchIcon = styled.img`
  height: 2.5rem;
  margin-left: -3.5rem;
  z-index: 1;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  gap: 5rem;
`;

export const SearchBarWrapper = styled.form`
  flex-grow: 1;
  max-width: 120rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: calc(8px + 1.5625vw);
`;


export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;



