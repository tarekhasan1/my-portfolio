import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Skills from "./components/Skills";
import Who from "./components/Who"
import Works from "./components/Works"
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("https://static.vecteezy.com/system/resources/previews/004/257/968/original/abstract-purple-fluid-wave-background-free-vector.jpg");
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
