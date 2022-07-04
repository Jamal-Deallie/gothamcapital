import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
  background-color: transparent;
  background-color: initial;
  background-image: none;
  border-radius: 5px;
  border: solid 2px ${props => props.$borderColor|| props.theme.variant.primary};
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  color: ${props => props.$fontColor || props.theme.variant.primary};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  height: 60px;
  line-height: 60px;
  margin-left: -4px;
  outline: 0;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: bottom;
  width: 190px;
  &:before {
  }
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 1000px) {
    font-size: 14px;
    height: 55px;
    line-height: 55px;
    width: 150px;
  }
`;
