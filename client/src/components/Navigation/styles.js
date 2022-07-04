import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.nav`
  height: 9rem;
  border-bottom: 0.1rem solid ${props => props.theme.variant.primary};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const NavLinks = styled(NavLink)`
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.header};
  opacity: 1;
  @media screen and (max-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const Logo = styled.img`
  height: 35px;
  margin-left: 25px;
`;

export const Button = styled.div`
  height: 35px;
  width: 35px;
`;

export const IconBar = styled.div`
  width: 35px;
  height: 3px;
  background: ${props => props.theme.variant.primary};
`;

export const ToggleBtn = styled.div`
  display: none;
  @media screen and (max-width: 1030px) {
    right: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 7rem;
    width: 35px;
    cursor: pointer;
    gap: 8px;
    z-index: 10;
    margin-right: 2.5rem;
  }
`;

export const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #2f3539;
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: none;
    margin-right: 0;
    height: 100vh;
    width: 100%;
    clip-path: circle(0% at 95.3% 8.5%);
    flex-direction: column;
    gap: 5rem;
  }
`;
