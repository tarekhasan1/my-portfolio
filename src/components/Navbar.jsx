import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;

  @media (max-width: 768px) {
    padding: 10px;
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-left: 30px;
`;

const MenuButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`;

const Icon = styled.img`
  width: 45px;
  cursor: pointer;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    width: 100%;
    text-align: right;
    z-index: 1;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    display: inline-block;
    background-color: #151414;
    padding: 20px 10px;
    flex-direction: column;
    width: 100%;
  }
`;

const ListItem = styled.li`
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-right: 20px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: white;

  &.active {
    color: red;
  }

  &:hover {
    color: blue;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #310278;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 30px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        setActiveLink(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section>
      <Container>
        <Logo src="https://logodix.com/logo/1618842.png" alt="Logo" />
        <MenuButton onClick={toggleMenu}>
          <Icon src="https://cdn.icon-icons.com/icons2/1380/PNG/512/emblemdocuments_93496.png" />
        </MenuButton>
        <Links isMenuOpen={isMenuOpen}>
          <List>
            <ListItem>
              <A href="#home" className={activeLink === 'home' ? 'active' : ''}>
                Home
              </A>
            </ListItem>
            <ListItem>
              <A href="#about" className={activeLink === 'about' ? 'active' : ''}>
                About
              </A>
            </ListItem>
            <ListItem>
              <A href="#skills" className={activeLink === 'skills' ? 'active' : ''}>
                Skills
              </A>
            </ListItem>
            <ListItem>
              <A href="#works" className={activeLink === 'works' ? 'active' : ''}>
                Works
              </A>
            </ListItem>
            <ListItem>
              <A href="#contact" className={activeLink === 'contact' ? 'active' : ''}>
                Contact
              </A>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon style={{ marginRight: '10px' }} src="https://cdn-icons-png.flaticon.com/512/1400/1400310.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
      <hr />
    </Section>
  );
};

export default Navbar;
