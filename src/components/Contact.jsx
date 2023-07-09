import React, { useState } from 'react';
import { styled } from 'styled-components';
import Footer from '../Footer';

const Section = styled.div`
  min-height: 80vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FormSection = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  width: 98%;
  max-width: 400px;
  order: 2;

  @media (min-width: 768px) {
    flex: 1;
    margin-right: 2rem;
    margin-bottom: 0;
    max-width: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const FormTextarea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const FormButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  order: 1;

  img {
    max-width: 98%;
    height: auto;
  }

  @media (min-width: 768px) {
    flex: 1;
    margin-left: 2rem;
    width: auto;
  }
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message using a server-side implementation for email sending
    // Here you can use libraries like nodemailer to send the email
    console.log(`Sending message: Name: ${name}, Email: ${email}, Message: ${message}`);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Section id="contact">
      <Title>Contact Us</Title>
      <Container>
        <FormSection>
          <Form onSubmit={handleSubmit}>
            <FormLabel>Name</FormLabel>
            <FormInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <FormLabel>Message</FormLabel>
            <FormTextarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <FormButton type="submit">Send Message</FormButton>
          </Form>
        </FormSection>
        <ImageSection>
          <img src="https://www.pngmart.com/files/7/Support-PNG-Transparent-Picture.png" alt="Contact" />
        </ImageSection>
      </Container>

      <Footer />
    </Section>
  );
};

export default Contact;
