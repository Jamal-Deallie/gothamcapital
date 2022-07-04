import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.variant.secondary};
  padding-top: 10rem;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 5rem;
  place-items: center;
`;

export const Container = styled.div`
  width: 50rem;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  padding: 2.5rem 0;
  max-width: 20ch;
  text-align: center;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
`;

export const Title = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-weight: 800;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.2rem, calc(0.81rem + 1.93vw), 2.19rem);
  letter-spacing: 0.5px;
  padding-bottom: 5rem;
  text-align: center;
  width: 45ch;
`;

export const Image = styled.img`
  width: 100%;
  filter: grayscale(100%);
`;

export const Button = styled.button`
  background-color: ${props => props.theme.variant.primary};
  border: 0;
  border-radius: 0.3rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  outline: 0;
  padding: 16px 21px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const Column = styled.div`
  color: ${props => props.theme.variant.primary};
  border-bottom: solid 1px ${props => props.theme.variant.primary};
  padding-bottom: 2rem;
`;

export const Subheader = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.variant.primary};
  letter-spacing: 0.1rem;
  margin-bottom: 2.5rem;
`;

export const Caption = styled.p`
  font-size: 14px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10rem;
`;
