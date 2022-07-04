import React from 'react';
import {
  FundStats,
  FundDetails,
  FundHeader,
  Ticker,
  StatContainer,
  HeaderContainer,
  FundColumn,
  FundName,
  FundFooter,
  FundWrap,
  FundText,
  TopRow,
  TableSection,
  BottomRow,
} from './styles';

export default function MobileTable({ items }) {
  return (
    <TableSection>
      {items?.map(d => {
        return (
          <FundWrap key={d?._id}>
            <FundHeader>
              <Ticker>{d?.ticker}</Ticker>
              <FundName>
                <FundText $bold={true}>{d?.name}</FundText>
                <FundText>{d?.class}</FundText>
              </FundName>
            </FundHeader>
            <FundDetails>
              <TopRow>
                <FundColumn>
                  <FundText $bold={true}>YTD(%)</FundText>
                  <FundText>-0.52</FundText>
                </FundColumn>
                <FundColumn>
                  <FundText $bold={true}>1Y(%)</FundText>
                  <FundText>{d?.oneYear}</FundText>
                </FundColumn>
                <FundColumn>
                  <FundText $bold={true}>3Y(%)</FundText>
                  <FundText>{d?.threeYear}</FundText>
                </FundColumn>
                <FundColumn>
                  <FundText $bold={true}>5Y(%)</FundText>
                  <FundText>{d?.fiveYear}</FundText>
                </FundColumn>
                <FundColumn>
                  <FundText $bold={true}>10Y(%)</FundText>
                  <FundText>{d?.tenYear}</FundText>
                </FundColumn>
              </TopRow>
              <BottomRow>
                <FundText $bold={true}>Perf. as of</FundText>
                <FundText>May 31, 2022</FundText>
              </BottomRow>
            </FundDetails>
            <FundFooter>
              <FundColumn>
                <FundText $bold={true}>Incept Date</FundText>
                <FundText>Test</FundText>
              </FundColumn>
              <FundColumn>
                <FundText $bold={true}>Incept(%)</FundText>
                <FundText>{d?.incept}</FundText>
              </FundColumn>
              <FundColumn>
                <FundText $bold={true}>Net Asset (USD)</FundText>
                <FundText>{d?.netAsset}</FundText>
              </FundColumn>
            </FundFooter>
          </FundWrap>
        );
      })}
    </TableSection>
  );
}
