import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from './components/Feature'

const Container =styled.div`
height: 100vh;
background: #f0e4e4;
overflow: hidden;
`

const IntroShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(66% 0, 100% 0, 100% 100%, 51% 100%);
background-color: crimson;




`


const App = () => {
  return  <><Container>
      <Navbar />
      <Intro />
      <IntroShape />
       </Container>
       <Container>
         <Feature />
       </Container>

       </>
};

export default App;