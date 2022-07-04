import React, { useState, useEffect } from 'react';
import { Table, MobileTable } from '../../components';
import { client } from '../../api/api';
import useDebounce from '../../hooks/useDebounce';
import {
  HeadingContainer,
  FundsSection,
  Heading,
  Text,
  ContentContainer,
  SearchBar,
  OptionsContainer,
  SearchBarWrapper,
  InnerContainer,
  TableContainer,
  SearchIcon,
  //Responsive Table
} from './styles';

export default function FundsContainer() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  console.log(debouncedSearchTerm);

  useEffect(() => {
    let path = 'v1/funds';

    if (debouncedSearchTerm) {
      path += `/search?term=${debouncedSearchTerm}`;
    }
    console.log({ path: path });
    client.get(path).then(response => {
      setData(response.data.data.data);
    });
  }, [debouncedSearchTerm]);

  return (
    <FundsSection>
      <HeadingContainer>
        <InnerContainer>
          <ContentContainer>
            <Heading>Investment Funds</Heading>
            <Text>
              Gotham's mutual funds and iShares ETFs and closed-end funds
            </Text>
          </ContentContainer>

          <OptionsContainer>
            <SearchBarWrapper>
              <SearchBar
                placeholder='Search Name, Ticker, or Class...'
                onChange={handleSearch}
              />
              <SearchIcon src='/images/icons/searchIcon.svg' alt='' />
            </SearchBarWrapper>
          </OptionsContainer>
        </InnerContainer>
      </HeadingContainer>
      <TableContainer>
        <Table items={data} loading={loading} />
      </TableContainer>
      <MobileTable items={data}/>
    </FundsSection>
  );
}
