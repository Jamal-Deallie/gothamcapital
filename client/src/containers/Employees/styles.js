import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  padding: 10rem 5rem;
  background: ${props => props.theme.variant.secondary};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-column-gap: 0.6rem;
  grid-row-gap: 2.5rem;
  justify-items: center;
  border-radius: 1rem;
  margin-bottom: 10rem;
  margin-top: 5%;
`;

export const Image = styled.img`
  width: 300px;
  filter: grayscale(100%);
`;

export const ImageWrapper = styled.div``;

export const Name = styled.h1`
  padding: 1rem 0;
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 2.441rem
`;

export const Department = styled.p`
  color: ${props => props.theme.variant.primary};
`;
