import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
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

const Title = styled.h2`
  text-align: center;
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

  const data = useRef();

  const sendEmail = (e) => {
    console.log('started');
    e.preventDefault();

    emailjs.sendForm('service-id', 'template_id', Form.current, 'public-key_i')
      .then((result) => {
          console.log(result.text);
          console.log('successfully sent mail');
      }, (error) => {
          console.log(error.text);
          console.log("failed!");
      });
  };

  return (
    <Section id="contact">
      <Title>Contact Us</Title>
      <Container>
        <FormSection>
          <Form ref={data} onSubmit={sendEmail}>
            <FormLabel>Name</FormLabel>
            <FormInput
              type="text"
              name="from_name"
              required
            />

            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              name="from_email"
              required
            />

            <FormLabel>Message</FormLabel>
            <FormTextarea
            name="message"
              required
            />

          <FormButton type="submit" value="Send">Send Message</FormButton>
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