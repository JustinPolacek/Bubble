import  React, { useState} from 'react'
import styled from 'styled-components'
import How1 from '../img/how1.jpeg'
import MiniCard from './MiniCard'
import Play from '../img/play.png'
import Coffee from '../img/coffee.mp4'
import How from '../img/how.jpeg'


const Container=styled.div`
height: 100%;
display: flex;
@media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Left=styled.div`
width: 50%;
position: relative;
@media only screen and (max-width: 480px) {
    display: none;
  }
`
const Image=styled.img`
display: ${(props) => props.open && "none"};
margin-top: 20px;
height: 100%;
width: 100%;
 `
const Video=styled.video`
display: ${(props) => !props.open && "none"};
height: 300px;
top: 0;
bottom: 0;
right: 0;
position: absolute;
margin: auto;
@media only screen and (max-width: 480px) {
    width: 100%;
  }

`

const Right=styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
    width: 100%;
  }
`
const Wrapper =styled.div`
padding: 50px;
display: flex;
flex-direction: column;
@media only screen and (max-width: 480px) {
    padding: 20px;
  }
`

const Title =styled.h1`

`

const CardContainer=styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px; 


`
const Desc =styled.p`

font-size: 20px;
margin-top: 20px;
color: #555;
`

const Button =styled.button`
width: 100px;
height: 100px;
border: none;
border-radius: 50%;
background-color: #ff4eca;
color: white;
font-sizE: 20px;
padding: 15px;
margin-top: 50px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
    width: 150px;
    height: 150px;
    margin-left: 90px;

  }


`

const Icon=styled.img`
    width: 40px;
    @media only screen and (max-width: 480px) {
    font-size: 30px;
  }

`

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 100;
  left: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;


const Service = () => {

    const [open, setOpen] = useState (false);
    const smallScreen = window.screen.width <= 480 ? true : false;
    return (
        <Container>
            <Left><Image open={open}src={How1} />
             <Video  open={open} autoPlay loop controls  src={Coffee} />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Great environment to study and taste</Title>
                    <Desc>Enjoy, an environment to study and taste,
                        drink, and eat. We've curated a beautiful space.
                        where you can feel "Bubbly" 
                    </Desc>
                    <CardContainer>
                       <MiniCard  />
                       <MiniCard />
                       <MiniCard />


                    </CardContainer>
                    <Button onClick={() => setOpen(true)}> <Icon src={Play} /></Button>
                </Wrapper>

                {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src={Coffee}
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
            </Right>


        </Container>
    
    )
}

export default Service
