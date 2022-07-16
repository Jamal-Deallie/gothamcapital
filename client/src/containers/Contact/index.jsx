import React, { useState } from 'react';
import { client } from '../../api/api';
import {
  Section,
  Heading,
  Text,
  StyledInput,
  Button,
  TextArea,
  OuterContainer,
  InnerContainer,
  Form,
  TextWrapper,
} from './styles';

export default function ContactContainer() {
  const [formValue, setFormValue] = useState({
    email: '',
    name: '',
    inquiry: '',
  });

  console.log(formValue);
  const handleChange = event => {
    const { name, value } = event.target;
    setFormValue(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const canSave = [formValue.name, formValue.email, formValue.inquiry].every(
    Boolean
  );

  const handleSubmit = async e => {
    e.preventDefault();
    if (canSave) {
      const path = 'v1/contactus';
      try {
        const response = await client.post(
          path,
          JSON.stringify({
            name: formValue.name,
            email: formValue.email,
            inquiry: formValue.inquiry,
          }),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        setFormValue({
          email: '',
          name: '',
          inquiry: '',
        });

        console.log(JSON.stringify(response?.data));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Section>
      <InnerContainer>
        <Heading>Contact Us</Heading>
        <TextWrapper>
          <Text>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus
          </Text>
        </TextWrapper>

        <OuterContainer>
          <Form onSubmit={handleSubmit}>
            <StyledInput
              placeholder='Name'
              type='text'
              name='name'
              onChange={handleChange}
              value={formValue.name}
              required
            />

            <StyledInput
              placeholder='Email'
              type='email'
              name='email'
              onChange={handleChange}
              value={formValue.email}
              required
            />

            <TextArea
              placeholder='Message'
              name='inquiry'
              required
              onChange={handleChange}
              value={formValue.inquiry}
            />

            <Button type='submit' className='flat-button' value='SEND'>
              Send
            </Button>
          </Form>
        </OuterContainer>
      </InnerContainer>
    </Section>
  );
}
