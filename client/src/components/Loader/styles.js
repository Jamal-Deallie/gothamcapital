import styled, { keyframes } from 'styled-components';

export const LoadingOuter = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const LoadingInner = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const pulse = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
`;

export const LoadingDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ff9dc;

  & div:nth-child(1) {
    animation: pulse 0.4s ease 0s infinite alternate;
  }

  & div:nth-child(2) {
    animation: pulse 0.4s ease 0.2s infinite alternate;
  }

  & div:nth-child(3) {
    animation: pulse 0.4s ease 0.4s infinite alternate;
  }
`;
