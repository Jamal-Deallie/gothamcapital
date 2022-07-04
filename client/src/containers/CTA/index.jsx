import { Input } from '../../components';
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
        <Form>
          <FormContainer>
        
              <StyledInput placeholder='Enter Email Address' />
              <Button />
    
          </FormContainer>
        </Form>
      </GridContainer>
    </Section>
  );
}