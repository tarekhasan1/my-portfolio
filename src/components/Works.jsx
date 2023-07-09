import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  min-height: 80vh;
  scroll-snap-align: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 60px;
`

const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 767px) {
    /* Styles for mobile devices */
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* Styles for tablet devices */
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    & > div {
      width: calc(50% - 40px);
    }
  }

  @media (min-width: 1024px) {
    /* Styles for laptop devices */
    justify-content: flex-start;
    & > div {
      max-width: 450px;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: max-content;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  height: 300px;
  overflow-y: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  max-height: none;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(0);
    animation: scroll 5s linear infinite;
    @keyframes scroll {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(calc(-100% + 300px));
      }
    }
  }
`;

const CardContent = styled.div`
  margin-top: 10px;
`;

const ProjectName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  padding-left: 15px;
`;

const ProjectType = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  padding-left: 15px;
`;

const Technologies = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  padding-left: 15px;
`;

const ViewDetailsButton = styled.button`
  display: block;
  margin-top: 10px;
  padding: 8px 12px;
  margin-left: 15px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  background-color: #ffffff;
  color: black;
`;

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Example data
  const projectsData = [
    {
      id: 1,
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet...",
      technologies: ["React", "Node.js"],
      image:
        "https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://example.com/project1",
      clientGithubLink: "https://github.com/client/project1",
      serverGithubLink: "https://github.com/server/project1",
      duration: "3 months",
    },
    {
      id: 1,
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet...",
      technologies: ["React", "Node.js"],
      image:
        "https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://example.com/project1",
      clientGithubLink: "https://github.com/client/project1",
      serverGithubLink: "https://github.com/server/project1",
      duration: "3 months",
    },
    {
      id: 1,
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet...",
      technologies: ["React", "Node.js"],
      image:
        "https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://example.com/project1",
      clientGithubLink: "https://github.com/client/project1",
      serverGithubLink: "https://github.com/server/project1",
      duration: "3 months",
    },
    {
      id: 1,
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet...",
      technologies: ["React", "Node.js"],
      image:
        "https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://example.com/project1",
      clientGithubLink: "https://github.com/client/project1",
      serverGithubLink: "https://github.com/server/project1",
      duration: "3 months",
    },
    {
      id: 1,
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet...",
      technologies: ["React", "Node.js"],
      image:
        "https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://example.com/project1",
      clientGithubLink: "https://github.com/client/project1",
      serverGithubLink: "https://github.com/server/project1",
      duration: "3 months",
    },
    {
      id: 1,
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet...",
      technologies: ["React", "Node.js"],
      image:
        "https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://example.com/project1",
      clientGithubLink: "https://github.com/client/project1",
      serverGithubLink: "https://github.com/server/project1",
      duration: "3 months",
    },
    // Add more projects here
  ];

  return (
    <Section id="works">
      <Title>My Projects</Title>
      <WorksContainer>
        {projectsData.slice(0, 3).map((project) => (
          <Card key={project.id}>
            <ImageContainer>
              <CardImage
                src={project.image}
                alt={project.name}
                onClick={() => openModal(project)}
              />
            </ImageContainer>
            <CardContent>
              <ProjectName>{project.name}</ProjectName>
              <ProjectType>Project Type: {project.type}</ProjectType>
              <Technologies>
                Technologies: {project.technologies.join(", ")}
              </Technologies>
              <ViewDetailsButton onClick={() => openModal(project)}>
                View Details
              </ViewDetailsButton>
            </CardContent>
          </Card>
        ))}
        {selectedProject && (
          <Modal>
            {/* Modal content with project details */}
            <h2>{selectedProject.name}</h2>
            {/* Add other project details here */}
            <button onClick={closeModal}>Close</button>
          </Modal>
        )}
      </WorksContainer>
    </Section>
  );
};

export default Works;
