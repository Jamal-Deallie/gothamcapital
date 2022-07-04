import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: #f3f3f3;
`;
export const Wrapper = styled.div`
  padding: 5rem 5rem 0 5rem;
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 5rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ContentContainer = styled.div``;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  padding: 2.5rem 0;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.2rem, calc(0.81rem + 1.93vw), 2.19rem);
  letter-spacing: 0.5px;
  padding-bottom: 5rem;
  overflow: hidden;
  & .lineChildren {
    transform: 0rem;
  }
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 1.8rem;
  font-weight: 800;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.2rem, calc(0.81rem + 1.93vw), 2.19rem);
  letter-spacing: 0.5px;
  padding-bottom: 5rem;
`;

export const Image = styled.img`
  width: 100%;
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

export const CEOImage = styled.img`
  width: 100%;
  filter: grayscale(100%);
`;

export const LogoImage = styled.img`
  width: 100%;
`;
