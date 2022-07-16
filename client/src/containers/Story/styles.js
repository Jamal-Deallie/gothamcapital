import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 7.5rem 0 12rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Subheader = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-size: 3.2rem;
  font-weight: 800;
  font-style: italic;
  background-image: linear-gradient(90deg, #f3f3f3 0%, #f3f3f3 0%, #444 0%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
`;

export const Desc = styled.p`
  color: ${props => props.theme.variant.secondary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 3.2rem;
  font-style: italic;
  line-height: 1.5;
  overflow: hidden;
  max-width: 60ch;
  width: fit-content;
  background-image: linear-gradient(90deg, #f3f3f3 0%, #f3f3f3 0%, #444 0%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(35rem, 1fr) minmax(35rem, 2fr);
  max-width: 120rem;
  gap: 15rem;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
