import React from 'react';
import { styled } from 'styled-components';
import Footer from '../Footer';

const Section = styled.div`
  min-height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10vh;
`

const Contact = () => (
    <Section id="contact">
        contact me
        <Footer />
    </Section>
);

export default Contact;