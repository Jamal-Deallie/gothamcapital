import { useState } from 'react';
import {
  Section,
  Heading,
  Text,
  Container,
  GridContainer,
  FormContainer,
  Form,
  Button,
  StyledInput,
} from './styles';

export default function CTAContainer() {
  const [email, setEmail] = useState('');

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    return null;
  }

  return (
    <Section>
      <GridContainer>
        <Container>
          <Heading>Let's keep in touch</Heading>
          <Text>
            Our monthly newsletter, The Portal, brings you the latest updates,
            insights and research on the crypto markets.
          </Text>
        </Container>
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <StyledInput
              placeholder='Enter Email Address'
              type='email'
              onChange={handleChange}
              value={email}
            />
            <Button type='submit' />
          </FormContainer>
        </Form>
      </GridContainer>
    </Section>
  );
}
