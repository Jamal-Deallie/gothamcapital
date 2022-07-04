import React, { useRef, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
import {
  Container,
  Section,
  Heading,
  Text,
  StyledInput,
  Button,
  TextArea,
  Image,
  OuterContainer,
  InnerContainer,
  Form,
  Info,
  InfoWrapper,
  InfoItem,
  IconWrapper,
  Icon,
  Title,
  ContactInfo,
  TextWrapper,
} from './styles';

export default function ContactContainer() {
  const form = useRef();

  // const sendEmail = e => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       'service_gaj97m3',
  //       'template_2n1nvlj',
  //       form.current,
  //       'j9BKQKfbTzjV9X8uI'
  //     )
  //     .then(
  //       () => {
  //         alert('Message successfully sent!');
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert('Failed to send the message, please try again');
  //       }
  //     );
  // };
  return (
    <Section>
      <InnerContainer>
        <Heading>Contact Us</Heading>
        <TextWrapper>
          <Text>
            For new customers who are interested in opening a new account or
            have questions about additional products, please complete the
            following form.
          </Text>
        </TextWrapper>

        <OuterContainer>
          <Form
            ref={form}

            // onSubmit={sendEmail}
          >
            <StyledInput placeholder='Name' type='text' name='name' required />

            <StyledInput
              placeholder='Email'
              type='email'
              name='email'
              required
            />

            <StyledInput
              placeholder='Subject'
              type='text'
              name='subject'
              required
            />

            <TextArea placeholder='Message' name='message' required />

            <Button type='submit' className='flat-button' value='SEND'>
              Send
            </Button>
          </Form>
        </OuterContainer>
      </InnerContainer>
      {/* <Info>
        <Title>Other ways to contact us.</Title>
        <InfoWrapper>
          <InfoItem>
            <IconWrapper>
              <Icon src='/images/icons/telephone.svg' alt='' />
            </IconWrapper>
            <ContactInfo>
              Telephone: 800-441-7762
              <br />
              Hours: 8 a.m. - 6 p.m. ET
            </ContactInfo>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <Icon src='/images/icons/email.svg' alt='' className='email' />
            </IconWrapper>
            <p>
              <span>Email: contact.us@blackrock.com</span>
            </p>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <Icon src='/images/icons/address.svg' alt='' />
            </IconWrapper>
            <ContactInfo>
              Gotham Capital
              <br />
              1 Main Street
              <br />
              Dallas, Texas, 75226-1001
            </ContactInfo>
          </InfoItem>
        </InfoWrapper>
      </Info> */}
    </Section>
  );
}
