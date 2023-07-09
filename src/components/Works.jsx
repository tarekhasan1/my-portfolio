import React, { useState } from "react";
import styled from "styled-components";
import Toytour from "./../../public/images/toy-tour.png";

const Section = styled.div`
  min-height: 80vh;
  scroll-snap-align: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 60px;
`;

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
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px whitesmoke;
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
z-index: 99999999;
  width: 75vw;
  position: fixed;
  padding: 10px;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      name: "TOYTOUR || MARKETPLACE",
      type: "-A complete MERN stack Project",
      description:
        "Interface made for consumers and sellers both and seller can add or update their      products anytime by logging in. fully functional car toy marketplace with a search option by name, category wise data",
      technologies: [
        "React",
        "bootstrap",
        "React Router",
        "CSS",
        "React-Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image:
        "https://drive.google.com/file/d/1q8QgPvqQOwsDvQ4lN9ZQEMsHBQ4QdFdi/view?usp=sharing",
      liveLink: "https://toy-tour.web.app/",
      clientGithubLink: "https://github.com/tarekhasan1/toy-tour",
      serverGithubLink: "https://github.com/tarekhasan1/toy-tour-server",
      duration: "4 Days",
    },
    {
      name: "EPICUREAN EDGE || THAI CHEFS AND FOODS",
      type: "-A complete ReactJS Project",
      description:
        "This is a Thai food restaurant website with popular chefs and their recipes. Implented Protected routing. Fully responsive website with firebase authentication and data taken from own api",
      technologies: [
        "React",
        "bootstrap",
        "React Router",
        "CSS",
        "React-Bootstrap",
        "Node.js",
        "Express.js",
      ],
      image:
        "https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://epicurean-edge.web.app/",
      clientGithubLink: "https://github.com/tarekhasan1/epicurean-edge",
      serverGithubLink: "https://github.com/tarekhasan1/epicurean-edge-server",
      duration: "3 days",
    },
    {
      name: "MELODIC MASTERY || A MUSIC INSTRUMENTAL SUMMER SCHOOL",
      type: "-A complete MERN stack Project",
      description:
        "A simple animated website containing music courses of different instructors, and different Dashboard for Students, Instructors and Admin. firebase login system available for all kinds of users, Payment option and manage users. and classes from UI functionality added Student can enroll in Classes, Instructors can add their Classes and Admin can manage everything about Student and Instructors",
      technologies: [
        "React",
        "bootstrap",
        "React Router",
        "CSS",
        "React-Bootstrap",
        "framer-motion",
        "AOS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image:
        "https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://melodic-mastery-6b24a.web.app/",
      clientGithubLink: "https://github.com/tarekhasan1/melodic-mastery-client",
      serverGithubLink: "https://github.com/tarekhasan1/melodic-mastery-server",
      duration: "10 days",
    },
  ];

  return (
    <Section id="works">
      <Title>My Projects</Title>
      <WorksContainer>
        {projectsData.slice(0, 3).map((project, idx) => (
          <Card key={idx}>
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
            <h5>{selectedProject.type}</h5>
            <p>{selectedProject.description}</p>
            <h4>Technology:</h4>
            <ul style={{marginBottom: "15px"}}>
              {selectedProject.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <a style={{marginRight: "7px", textDecoration: "none"}} target="_blank" href={selectedProject.liveLink}>
              Live Preview
            </a>
            <a style={{marginRight: "7px", textDecoration: "none"}} target="_blank" href={selectedProject.clientGithubLink}>
              Github Client
            </a>
            <a style={{marginRight: "7px", textDecoration: "none"}} target="_blank" href={selectedProject.serverGithubLink}>
              Github Server
            </a>
            <br />
            <button
              style={{
                color: "red",
                marginBottom: "5px",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
                marginTop: "10px",
              }}
              onClick={closeModal}
            >
              Close
            </button>
          </Modal>
        )}
      </WorksContainer>
    </Section>
  );
};

export default Works;
