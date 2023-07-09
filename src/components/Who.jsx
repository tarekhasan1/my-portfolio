import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  min-height: 80vh;
  scroll-snap-align: center;
  padding-top: 10vh;
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const LeftContainer = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    width: 40%;
    margin-right: 20px;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 1px solid gray;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
    margin: 0 auto;
  }
`;

const RightContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const AboutMeText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 30px;
  text-align: justify;
`;

const EducationSection = styled.div`
  margin-top: 20px;
`;

const Degree = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const University = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Address = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #0e1484;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Heading = styled.h2`
    text-align: center;
    padding: 10px auto;
    margin-bottom: 50px;
`

const Who = () => {
  return (
    <Section id="about">
        <Heading>About Me</Heading>
      <SectionContainer>
        <LeftContainer>
          <Image
            src="https://imgtr.ee/images/2023/07/09/4be5488d67f63913e3eb00f2595f125f.png"
            alt="Your Image"
          />
        </LeftContainer>
        <RightContainer>
          <AboutMeText>
            Hey, This is Md. Tarek Hasan, I am a MERN stack web developer with
            expertise in HTML, CSS, JavaScript, React, Node.js, Bootstrap,
            Tailwind CSS, Express.js, and MongoDB. Passionate about creating
            innovative web applications that deliver exceptional user
            experiences, drive business growth, and exceed client expectations.
            Goal-oriented, adaptable, and collaborative team player with strong
            problem-solving abilities and effective communication skills.
          </AboutMeText>
          <EducationSection>
            <Degree>BSc in Electrical and Electronics Engineering(2019-present)</Degree>
            <University>Begum Rokeya University, Rangpur</University>
            <Address>5400, Rangpur, Bangladesh</Address>
          </EducationSection>
          <SendButton>Send a Message</SendButton>
        </RightContainer>
      </SectionContainer>
    </Section>
  );
};

export default Who;
