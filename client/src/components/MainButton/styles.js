import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: ${props => props.theme.variant.primary};
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #f3f3f3;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.8rem;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: 1.75rem 4rem;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  &:hover {
    transform: translateY(-1px);
    background-color: #895a35;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 14px;
    height: 55px;
    line-height: 55px;
    width: 150px;
  }
`;

