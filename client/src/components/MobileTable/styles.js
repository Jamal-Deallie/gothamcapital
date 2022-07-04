import styled from 'styled-components';
export const TableSection = styled.section`
  display: none;
  padding: calc(8px + 1.5625vw);
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const FundDetails = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.variant.secondary};
  border-bottom: 1px solid ${props => props.theme.variant.secondary};
  height: 12.5rem;
`;

export const FundStats = styled.section`
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: normal;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 12px;
  line-height: 16px;
  padding-top: 16px;
`;

export const FundHeader = styled.header`
  display: flex;
  height: 6.5rem;
`;

export const HeaderContainer = styled.div``;

export const Ticker = styled.div`
  font-size: 1.25rem;
  font-family: ${props => props.theme.fontFamily.main};
  background: ${props => props.theme.variant.secondary};
  color: ${props => props.theme.variant.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  font-weight: 800;
`;

export const FundName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-break: break-all;
  font-size: 1.25rem;
  font-family: ${props => props.theme.fontFamily.main};
  line-height: 1.5;
  flex-grow: 1;
  padding: 1.6rem;
`;

export const StatContainer = styled.div``;

export const FundFooter = styled.footer`
  padding-top: 16px;
  display: flex;
`;

export const FundWrap = styled.div`
  background: ${props => props.theme.variant.tertiary};
  border: 1px solid ${props => props.theme.variant.tertiary};
  margin-bottom: 3rem;
`;

export const FundText = styled.p`
  font-size: 1.25rem;
  font-family: ${props => props.theme.fontFamily.main};
  font-weight: ${props => (props.$bold ? 800 : 300)};
`;

export const FundColumn = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 1.25rem;
  line-height: 16px;
  border-right: 1px solid ${props => props.theme.variant.secondary};
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 16px;
  gap: 0.5rem;
  flex-grow: 1;
  text-align: center;
  &:last-child {
    border-right: none;
  }
`;

export const TopRow = styled.div`
  padding-top: 16px;
  display: flex;
`;
export const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 16px;
`;
