import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  padding-top: 25px;
`;
export const StyledInput = styled.input`
  background: transparent;
  border: 1px solid ${props => props.theme.variant.primary};
  height: 55px;
  width: 35rem;
  border-radius: 0.375rem 0 0 0.375rem;
  border-style: solid;
  border-width: 0.125rem;

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

export const Button = styled.button`
  background: none;
  backface-visibility: hidden;
  border-radius: 0 0.375rem 0.375rem 0;
  font-family: ${props => props.theme.fontFamily.main};
  font-style: italic;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: ${props => props.theme.variant.primary};
  cursor: pointer;
  display: inline-block;
  font-size: 1.65rem;
  font-weight: 600;
  line-height: 1.3;
  height: 5.5rem;
  width: 9.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border-left: none;
`;
