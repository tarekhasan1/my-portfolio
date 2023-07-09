import React from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  scroll-snap-align: center;
  padding-top: 10vh;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Circle = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f2f2f2;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CircleContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SkillIcon = styled.img`
  width: 70px;
  height: 70px;
  animation: ${rotateAnimation} 4s linear infinite;
`;

const SkillName = styled.span`
  font-size: 14px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f2f2f2;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #3498db;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin: 50px auto;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    margin: 30px auto;
    font-size: 24px;
  }
`;


const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png', progress: 90 },
    { name: 'CSS3', icon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png', progress: 75 },
    { name: 'Bootstrap', icon: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png', progress: 90 },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png', progress: 75 },
    { name: 'JavaScript', icon: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png', progress: 80 },
    { name: 'ES6', icon: 'https://juststickers.in/wp-content/uploads/2017/11/es6-original-badge-264x264.png', progress: 70 },
    { name: 'React.js', icon: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png', progress: 80 },
    { name: 'Node.js', icon: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png', progress: 50 },
    { name: 'Express.js', icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png', progress: 50 },
    { name: 'Next.js', icon: 'https://cdn.icon-icons.com/icons2/3392/PNG/512/nextjs_icon_213852.png', progress: 40 },
    { name: 'MongoDB', icon: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png', progress: 70 },
    { name: 'Firebase', icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png', progress: 85 },
    { name: 'Git', icon: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/git_original_wordmark_logo_icon_146510.png', progress: 70 },
    { name: 'GitHub', icon: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/github_original_wordmark_logo_icon_146506.png', progress: 85 },
    { name: 'Vercel', icon: 'https://cdn.icon-icons.com/icons2/3915/PNG/512/vercel_logo_icon_249276.png', progress: 80 },
  ];

  return (
    <Section id="skills">
        <Title>My Skills</Title>
    <SkillsContainer>
      {skills.map((skill) => (
        <SkillItem key={skill.name}>
          <Circle>
            <CircleContent>
              <SkillIcon src={`${skill.icon}`} alt={skill.name} />
            </CircleContent>
          </Circle>
          <SkillName>{skill.name}</SkillName>
          <ProgressBar>
            <Progress progress={skill.progress} />
          </ProgressBar>
        </SkillItem>
      ))}
    </SkillsContainer>
    </Section>
  );
};

export default Skills;
