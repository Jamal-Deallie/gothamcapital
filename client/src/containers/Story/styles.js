import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 7.5rem 0 12rem 0;
`;
// export const Wrapper = styled.div`
//   padding: 1rem;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
//   overflow: hidden;
//   max-width: 140rem;
// `;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ContentContainer = styled.div`
  max-width: 105ch;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  font-style: italic;
  padding: 2.5rem 0;
  overflow: hidden;
  & .lineHeader {
    transform: 0rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.variant.primary};
  font-family: ${props => props.theme.fontFamily.main};
  font-size: clamp(2.16rem, calc(1.17rem + 4.93vw), 4.69rem);
  font-style: italic;
  padding: 2.5rem 0;
  overflow: hidden;
  & .lineHeader {
    transform: 0rem;
    font-family: ${props => props.theme.fontFamily.main};
  }
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

// export const Button = styled.button`
//   background-color: transparent;
//   background-color: initial;
//   background-image: none;
//   border-radius: 5px;
//   border: solid 2px
//     ${props => props.$borderColor || props.theme.variant.primary};
//   box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
//   color: ${props => props.$fontColor || props.theme.variant.primary};
//   cursor: pointer;
//   color: ${props => props.theme.variant.primary};
//   font-size: 1.6rem;
//   font-style: italic;
//   height: 60px;

//   margin-left: -4px;
//   outline: 0;
//   text-align: center;
//   transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: bottom;
//   width: 190px;
//   &:before {
//   }
//   &:hover {
//     opacity: 0.7;
//   }
//   @media screen and (max-width: 1000px) {
//     font-size: 14px;
//     height: 55px;
//     line-height: 55px;
//     width: 150px;
//   }
// `;

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
