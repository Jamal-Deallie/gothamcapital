import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const Container = styled.div`
  margin-top: 50px;
  width: 1000px;
  height: 500px;
  border: solid 2px rgba(0, 0, 0, 1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.25rem, calc(1.93rem + 1.58vw), 3.91rem);
  width: 10ch;
  padding: 25px 0;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 1.8rem;
  font-weight: 800;
`;

// export const Desc = styled.div`
//   color: ${props => props.theme.variant.secondary};
//   font-size: clamp(1.44rem, calc(1.34rem + 0.49vw), 1.95rem);
//   padding-bottom: 2.5rem;
// `;

export const Wrapper = styled.div`
  padding: 1rem;
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Value = styled.p`
  text-align: center;
`;

export const Values = styled.div`
  background: ${props => props.theme.variant.secondary};
  width: 45%;
  height: 100%;
  border-radius: 10px;
  color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const ValueContainer = styled.div`
  width: 65%;
`;

export const ValueButton = styled.div`
  cursor: pointer;
  color: ${props => (props.$active ? props.theme.variant.primary : null)};
  font-weight: ${props => (props.$active ? 800 : null)};
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.2rem, calc(0.81rem + 1.93vw), 2.19rem);
  letter-spacing: 0.5px;
  padding-bottom: 2.5%;
  text-align: center;
  width: 45ch;
`;
