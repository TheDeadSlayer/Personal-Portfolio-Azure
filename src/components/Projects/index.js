import React, { useState, useEffect, useRef } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const modalRef = useRef(null); // Reference to the modal window

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false); // Close the modal if clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setOpenModal]);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          <b>I have developed and contributed to a diverse range of projects. Below are some of the key projects I have worked on</b>
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'devops' ?
            <ToggleButton active value="devops" onClick={() => setToggle('devops')}>DevOps</ToggleButton>
            :
            <ToggleButton value="devops" onClick={() => setToggle('devops')}>DevOps</ToggleButton>
          }

          <Divider />
          {toggle === 'ml' ?
            <ToggleButton active value="ml" onClick={() => setToggle('ml')}>AI / ML</ToggleButton>
            :
            <ToggleButton value="ml" onClick={() => setToggle('ml')}>AI / ML</ToggleButton>
          }
          <Divider />
          {toggle === 'other' ?
            <ToggleButton active value="other" onClick={() => setToggle('other')}>Others</ToggleButton>
            :
            <ToggleButton value="other" onClick={() => setToggle('other')}>Others</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer ref={modalRef}>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category.includes(toggle))
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
