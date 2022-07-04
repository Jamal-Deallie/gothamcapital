import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.variant.secondary};
  padding: 10rem 0;
`;
export const Wrapper = styled.div`
  padding-bottom: 10rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  max-width: 55rem;
  padding: 1rem;
  text-align: center;
  margin-bottom: 5%;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  padding: 2.5rem 0;
  max-width: 105ch;
  & .lineHeader {
    transform: 0rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 1.8rem;
  font-weight: 800;
  max-width: 105ch;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.2rem, calc(0.81rem + 1.93vw), 2.19rem);
  letter-spacing: 0.5px;
  overflow: hidden;
  & .lineChildren {
    transform: 0rem;
  }
`;

export const Image = styled.img`
  max-height: 900px;
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

export const AccordionWrapper = styled.div`
  padding: 1rem;
  max-width: 65rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -5rem;
`;
