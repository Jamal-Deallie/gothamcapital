import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 1.5em;
  border-spacing: 0;
  font-size: 1.25rem;
  font-family: ${props => props.theme.fontFamily.main};
`;

export const TableHead = styled.thead`
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;
export const TableRow = styled.tr`
  text-align: left;
`;
export const Column = styled.th``;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
//fix table hover
export const TableBody = styled.tbody`
  background: #ececec;
  & tr:hover {
    background: ${props => props.theme.variant.primary};
  }
  & tr:nth-child(even) {
    background: #f2f2f2;
  }
  & tr:nth-child(even):hover {
    background: ${props => props.theme.variant.primary};
  }
`;

export const TableItem = styled.tr`
  border-bottom: 1px solid #dddddd;
  & td:first-child {
    font-weight: bold;
    text-align: left;
  }
`;

export const SortIcon = styled.img`
  height: 2.5rem;
  float: right;
`;
export const ColumnItem = styled.th`
  text-align: left;
  background: ${props => props.theme.variant.secondary};
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
  cursor: pointer;
  max-width: 50rem;
`;

export const MainColumn = styled.td`
  width: 300px;
  border-right: 1px solid #dddddd;
  padding: 10px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

export const Disclaimer = styled.div`
  background-color: rgb(239, 239, 239);
  font-weight: 300;
  font-size: 1.2rem;
  vertical-align: baseline;
  max-width: 120rem;
  display: block;
  padding: 1rem;
`;

export const DisclaimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



