import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  overflow: hidden;
  padding: 12.5rem 0 12.5rem;
  background: url(images/general/mesh-gradient.png);
`;

export const Heading = styled.h3`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(2.25rem, calc(1.93rem + 1.58vw), 3.91rem);
  color: ${props => props.theme.variant.secondary};
  text-transform: capitalize;
  line-height: 1.5;
`;

export const Text = styled.p`
  padding-top: 2.5rem;
  color: ${props => props.theme.variant.secondary};
  width: 45ch;
  font-family: ${props => props.theme.fontFamily.main};
  line-height: 1.5;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10rem;
  overflow: hidden;
  max-width: 120rem;
  padding: calc(8px + 1.5625vw);
  @media screen and (max-width: 40rem) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Form = styled.form`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
`;

export const StyledInput = styled.input`
  height: 4rem;
  border: none;
  padding-bottom: 0.5rem;
  background-color: transparent;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${props => props.theme.variant.secondary};
  width: 35rem;
  border-bottom: 1px solid ${props => props.theme.variant.secondary};


  &::placeholder {
    color: ${props => props.theme.variant.secondary};
    font-family: ${props => props.theme.fontFamily.main};
    font-weight: 300;
    letter-spacing: -0.01em;
    padding-left: 1rem;
    font-size: 1.65rem;
    font-style: italic;
  }
`;

export const Button = styled.button`
  margin-bottom: 1.5rem;
  color: transparent;
  font-size: 0;
  width: 45px;
  height: 45px;
  background: url(images/icons/arrwright.svg) no-repeat center center;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.variant.secondary};
  &:hover {
    background-color: ${props => props.theme.variant.tertiary};
  }
`;
