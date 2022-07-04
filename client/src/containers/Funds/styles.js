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

export const Options = styled.button`
  background: ${props => props.theme.variant.secondary};
  color: ${props => props.theme.variant.primary};
  height: 40px;
  width: 150px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-around;
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

export const OptionsInner = styled.div`
  position: relative;
`;

export const OptionsOuter = styled.div`
  display: flex;
  gap: 25px;
`;

export const Option = styled.div`
  background: ${props => props.theme.variant.secondary};
  color: ${props => props.theme.variant.primary};
  height: 40px;
  width: 150px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const DropDownOptions = styled.div`

  position: absolute;

  flex-direction: column;
  z-index: 1;
  top: 50px;
  transform-origin: top center
  display: inline-block;
  transition: 0.2s display opacity;
  display: ${props => (props.$open ? 'flex' : 'none')};
  opacity: ${props => (props.$open ? 1 : 0)};
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Arrow = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})`
  height: 2.5rem;
  transition: all 0.3 ease-in-out;
  /* transform: ${props => (props.filterOpen ? 'rotate(45deg)' : null)}; */
  fill: #f7b92d;
  cursor: pointer;
`;

const IconWrapper = styled.button`
  height: 5.5rem;
  width: 5.5rem;
  font-size: 2rem;
  pointer-events: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
`;
