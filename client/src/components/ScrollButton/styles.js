import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.variant.primary};
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  z-index: 1;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowUp = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  transition: all 0.3 ease-in-out;
  /* transform: ${props => (props.filterOpen ? 'rotate(45deg)' : null)}; */
  fill: #f7b92d;
`;
