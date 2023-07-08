import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DesignationList = [
  'MERN Stack Web Developer',
  'Front-End Developer',
  'Javascript Developer',
  'ReactJS Developer',
  'Junior Back-End Developer',
  'Junior NextJS Developer'
];

const Container = styled.div`
  min-height: 80vh;
  max-width: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 10vh;

  @media (max-width: 1600px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: end;

  @media (max-width: 768px) {
    order: 2;
    margin-top: 40px;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
  background: linear-gradient(to right, #ffffff, #9e4747);
  text-align: right;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

const Designation = styled.h2`
  font-size: 26px;
  margin-bottom: 16px;
  /* margin-right: 0px;
  text-align: right; */
  background: linear-gradient(to right, #ffffff, #4bc17e);
  text-align: right;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Button = styled.button`
text-align: right;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  /* width: max-content;
  margin-right: 0px; */
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const AnimatedImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Hero = () => {
  const [currentDesignationIndex, setCurrentDesignationIndex] = useState(0);
  const [displayedDesignation, setDisplayedDesignation] = useState('');

  useEffect(() => {
    const designation = DesignationList[currentDesignationIndex];
    let currentLetterIndex = 0;

    const interval = setInterval(() => {
      const lettersToShow = designation.slice(0, currentLetterIndex + 1);
      setDisplayedDesignation(lettersToShow);

      if (currentLetterIndex === designation.length - 1) {
        clearInterval(interval);

        // Move to the next designation after a delay
        setTimeout(() => {
          setCurrentDesignationIndex((prevIndex) =>
            (prevIndex + 1) % DesignationList.length
          );
        }, 2000);
      } else {
        currentLetterIndex++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentDesignationIndex]);

  const handleDownloadResume = () => {
    // Add logic to start downloading the resume
  };

  return (
    <Container id="home">
      <Left>
        <Title>This is MD. TAREK HASAN</Title>
        <Designation>-{displayedDesignation}</Designation>
        <Button onClick={handleDownloadResume}>Download Resume</Button>
      </Left>
      <Right>
        <AnimatedImage src="https://camo.githubusercontent.com/9eb3fdcaa648566c6a055c75fc17dbaf3849b11ede8019397a30d2092fdcd3be/68747470733a2f2f7374617469632e7769787374617469632e636f6d2f6d656469612f3262653163655f38363435363739303038343534313865626664363165323937363337343634647e6d76322e676966" alt="Animated Image" />
      </Right>
    </Container>
  );
};

export default Hero;
