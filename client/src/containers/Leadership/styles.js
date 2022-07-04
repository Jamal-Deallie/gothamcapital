import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.variant.secondary};
`;
export const Wrapper = styled.div`
  padding: 5rem;
  max-width: 100rem;
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
  font-size: clamp(2.25rem, calc(1.93rem + 1.58vw), 3.91rem);
  padding: 2.5rem 0;
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
`;

export const Title = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: 1.8rem;
  font-weight: 800;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.primary};
  font-size: clamp(1.44rem, calc(1.34rem + 0.49vw), 1.95rem);
  padding-bottom: 2.5rem;
`;

export const Image = styled.img`
  width: 100%;
`;
