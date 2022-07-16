import styled from 'styled-components';

export const Box = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  overflow: hidden;
`;

export const CommunitySection = styled.section`
  padding: 10rem 0;
  background: ${props => props.theme.variant.tertiary};
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: clamp(2.16rem, calc(1.4rem + 3.79vw), 4.8rem);
  font-weight: 800;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 3.5rem;
`;

export const Image = styled.img`
  max-height: 8rem;
`;

export const OuterContainer = styled.div``;

export const Section = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 150%;
  position: relative;
  overflow: hidden;
  height: 12rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
