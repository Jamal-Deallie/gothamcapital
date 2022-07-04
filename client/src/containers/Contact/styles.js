import styled from 'styled-components';
export const Section = styled.section`
  width: 100%;
  padding-top: 50px;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(2.16rem, calc(1.4rem + 3.79vw), 4.8rem);
  font-weight: 800;
  font-style: italic;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 3.5rem;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main}
  margin: 2.5rem 0;
  text-align: center;
  line-height: 1.2;
`;

export const TextWrapper = styled.div`
  width: 35rem;
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 5rem;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.44rem, calc(1.34rem + 0.49vw), 1.95rem);
  padding-bottom: 2.5rem;
`;

export const StyledInput = styled.input`
  background: transparent;
  border: 1px solid ${props => props.theme.variant.primary};
  height: 45px;
  max-width: 55rem;
  min-width: 35rem;
  border-radius: 3px;
  border-style: solid;
  border-width: 0.125rem;
  margin-bottom: 25px;
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
  border-radius: 3px;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 1.65rem;
  cursor: pointer;
  display: inline-block;
  padding: 7.5px 30px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  background: transparent;
  border: 1px solid ${props => props.theme.variant.primary};
  border-radius: 3px;
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 3px;
  margin-bottom: 25px;
  &::placeholder {
    color: ${props => props.theme.variant.primary};
    font-family: ${props => props.theme.fontFamily.main};
    font-weight: 300;
    letter-spacing: -0.01em;
    padding-left: 1rem;
    padding-top: 0.5rem;
    font-size: 1.65rem;
    font-style: italic;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const OuterContainer = styled.div`
  margin-top: 5.5rem;
  display: flex;
  width: 50rem;

`;

export const InnerContainer = styled.div`
  width: 99%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 150rem;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 800px;
`;

export const Info = styled.div`
  margin-top: 10rem;
  padding-top: 10rem;
  color: ${props => props.theme.variant.primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  padding-top: 25px;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  max-width: 1200px;
  gap: 50px;
`;

export const InfoItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  height: 5rem;
  &.email {
    height: 4rem;
  }
`;
export const IconWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const ContactInfo = styled.p`
  line-height: 1.5;
`;
