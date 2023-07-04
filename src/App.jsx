import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Who from "./components/Who"
import Works from "./components/Works"
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
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
