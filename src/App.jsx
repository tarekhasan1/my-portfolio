import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Who from "./components/Who"
import Works from "./components/Works"
import styled from 'styled-components';

const Container = styled.div`
  height: 91vh;
  max-width: 1400px;
  margin: 0 auto;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
  }

  @media (min-width: 1024px){
    scroll-snap-type: y mandatory;
  }
`

function App() {

  return (
    <Container>
      <Hero></Hero>
      <Who></Who>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
    </Container>
  )
}

export default App
