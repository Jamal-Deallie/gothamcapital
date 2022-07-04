import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 10rem;
  width: 100%;
  position: relative;
`;

export const Heading = styled.h1`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(2.75rem, calc(2rem + 3.73vw), 4.66rem);
  color: ${props => props.theme.variant.primary};
  line-height: 1.2;
  text-align: left;
  margin-bottom: 3.5rem;
`;
export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-style: italic;
`;

export const OuterContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 120rem;
`;

export const SearchBar = styled.input`
  height: 4rem;
  width: 100%;
  max-width: 40rem;
  padding: 0 1rem;
  cursor: pointer;
  opacity: 0.7;
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-style: italic;
  border: none;
  border-bottom: 1px solid ${props => props.theme.variant.primary};
  background: transparent;
  &::placeholder {
    color: ${props => props.theme.variant.primary};
    font-family: ${props => props.theme.fontFamily.main};
    font-weight: 300;
    letter-spacing: -0.01em;
    padding-left: 1rem;
    font-size: 1.65rem;
    font-style: italic;
  }
`;

export const SearchIcon = styled.img`
  height: 2.5rem;
  margin-left: -5.5rem;
  z-index: 1;
`;

export const SearchBarWrapper = styled.form`
  margin-top: 3.5rem;
  max-width: 120rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  gap: 2.5rem;
`;

export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* background: black; */
  max-width: 1250px;
  margin: 0 auto;
`;
