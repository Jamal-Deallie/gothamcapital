import { useEffect, useState } from 'react';
import {
  FilterWrapper,
  Heading,
  Container,
  Section,
  SearchBarWrapper,
  SearchBar,
  SearchIcon,
  Text,
} from './styles';
import useDebounce from '../../hooks/useDebounce';
import EmployeeContainer from '../Employees';

import { client } from '../../api/api';

export default function TeamsContainer() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    let path = '/v1/employee';

    if (debouncedSearchTerm) {
      path += `/search?term=${debouncedSearchTerm}`;
    }
    console.log({ path: path });
    client.get(path).then(response => {
      setData(response.data.data.data);
    });
  }, [debouncedSearchTerm]);

  return (
    <Section>
      <Container>
        <Heading>Meet the Gotham Family</Heading>

        <FilterWrapper>
          <SearchBarWrapper>
            <SearchBar
              placeholder='Search Name or Department...'
              onChange={handleSearch}
            />
            <SearchIcon src='/images/icons/searchIcon.svg' alt='' />
          </SearchBarWrapper>
        </FilterWrapper>
        <EmployeeContainer data={data} />
      </Container>
    </Section>
  );
}
