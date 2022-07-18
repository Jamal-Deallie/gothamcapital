import {
  StyledTable,
  TableHead,
  TableRow,
  TableData,
  TableBody,
  ColumnItem,
  StyledContainer,
  ItemWrapper,
  Disclaimer,
  DisclaimerWrapper,
} from './styles';
import { Loader } from '../../components';

export default function Table({ items, loading }) {
  const tableItems = () => {
    if (loading) {
      return <div>...loading</div>;
    }
    if (items) {
      return (
        <StyledTable>
          <TableHead>
            <tr>
              <ColumnItem>
                <ItemWrapper>Name</ItemWrapper>
              </ColumnItem>
              <ColumnItem>Ticker</ColumnItem>
              <ColumnItem>Share Class</ColumnItem>
              <ColumnItem>YTD(%)</ColumnItem>
              <ColumnItem>1Y(%)</ColumnItem>
              <ColumnItem>3Y(%)</ColumnItem>
              <ColumnItem>5Y(%)</ColumnItem>
              <ColumnItem>10Y(%)</ColumnItem>
              <ColumnItem>Incept(%)</ColumnItem>
              <ColumnItem>Incept Date</ColumnItem>
              <ColumnItem>Net Asset (USD)</ColumnItem>
            </tr>
          </TableHead>
          <tfoot>
            <tr>
              <td>Data is current as of March 31, 2021.</td>
            </tr>
          </tfoot>
          <TableBody>
            {items?.map(d => {
              return (
                <TableRow key={d?._id}>
                  <TableData>{d?.name}</TableData>
                  <TableData>{d?.ticker}</TableData>
                  <TableData>{d?.class}</TableData>
                  <TableData>{d?.ytd}</TableData>
                  <TableData>{d?.oneYear}</TableData>
                  <TableData>{d?.threeYear}</TableData>
                  <TableData>{d?.fiveYear}</TableData>
                  <TableData>{d?.tenYear}</TableData>
                  <TableData>{d?.incept}</TableData>
                  <TableData>test</TableData>
                  <TableData>{d?.netAsset}</TableData>
                </TableRow>
              );
            })}
          </TableBody>
        </StyledTable>
      );
    }
  };

  return (
    <StyledContainer>
      {tableItems()}
      <DisclaimerWrapper>
        <Disclaimer>
          <p>
            The performance quoted represents past performance and does not
            guarantee future results. Investment return and principal value of
            an investment will fluctuate so that an investor's shares, when sold
            or redeemed, may be worth more or less than the original cost.
            Current performance may be lower or higher than the performance
            quoted. Standardized performance and performance data current to the
            most recent month end may be obtained by clicking on the fund names
            above.
          </p>
        </Disclaimer>
      </DisclaimerWrapper>
    </StyledContainer>
  );
}
