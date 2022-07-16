import styled from 'styled-components';

export const Column = styled.div`
  overflow: hidden;
`;

export const ColumnInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  background: #f3f3f3;
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

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 4.5rem;
  overflow: hidden;
`;
export const Desc = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-size: clamp(1.44rem, calc(1.34rem + 0.49vw), 1.95rem);
  padding-bottom: 2.5rem;
  max-width: 50rem;
`;
export const GridContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Icon = styled.img`
  height: 6rem;
`;
export const Section = styled.section`
  width: 100%;
  background: #f3f3f3;
  padding: 10.5rem 0;
`;

export const Text = styled.p`
  text-align: left;
  font-size: 1.5rem;
  max-width: 30rem;
  line-height: 1.5;
  font-style: italic;
  font-family: ${props => props.theme.fontFamily.main};
`;

export const Title = styled.h2`
  font-weight: 600;
  line-height: 1.5;
  font-family: ${props => props.theme.fontFamily.main};
  margin: 2rem 0;
  font-style: italic;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  max-width: 120rem;
  margin: 0 auto;
`;
