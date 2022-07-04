import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 10%;
`;
export const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridContainer = styled.div`
  padding: 5rem;
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 5rem;
  justify-content: center;
`;

export const OuterContainer = styled.div``;

export const Subheader = styled.h2`
  color: ${props => props.theme.variant.primary};
  margin-bottom: 2.5rem;
  text-align: center;
  line-height: 3.4rem;
  letter-spacing: 0.1rem;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
  line-height: 2.3rem;
  & .lineChildren {
    transform: 0rem;
  }
`;

export const Column = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  max-width: 55rem;
  padding: 1rem;
  text-align: center;
`;
export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  padding: 2.5rem 0;
  overflow: hidden;
  & .lineHeader {
    transform: 0rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 5%;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.2rem, calc(0.81rem + 1.93vw), 2.19rem);
  letter-spacing: 0.5px;
  padding-bottom: 5rem;
`;

export const Image = styled.img`
  width: 60%;
  max-width: 20rem;
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

export const Border = styled.span`
  height: 0.2rem;
  width: 100%;
  background: ${props => props.theme.variant.primary};
  display: block;
  max-width: 130rem;
`;
