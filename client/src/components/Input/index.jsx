import React from 'react';
import { Container, StyledInput, Form, Button } from './styles';

export default function Input() {
  return (
    <Form>
      <Container>
        <StyledInput placeholder='Enter Email Address' />
        <Button>Submit</Button>
      </Container>
    </Form>
  );
}
