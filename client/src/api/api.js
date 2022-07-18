import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://gotham-capital.herokuapp.com/api/test',
});
