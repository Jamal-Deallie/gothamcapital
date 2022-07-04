import React from 'react';
import { Container, Label, StyledInput, Form, Button } from './styles';

export default function Input() {
  return (
    <Form>
      <Container>
        {/* The input */}
        <StyledInput
          placeholder='Enter Email Address'
        />
        <Button>Submit</Button>
      </Container>
    </Form>
  );
}
