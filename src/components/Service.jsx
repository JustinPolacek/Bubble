import  React, { useState} from 'react'
import styled from 'styled-components'
import How1 from '../img/how1.jpeg'
import MiniCard from './MiniCard'
import Play from '../img/play.png'
import Coffee from '../img/coffee.mp4'


const Container=styled.div`

height: 100%;

display: flex;
`

const Left=styled.div`
width: 50%;
position: relative;
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

`

const Right=styled.div`
width: 50%;
`
const Wrapper =styled.div`
padding: 50px;
display: flex;
flex-direction: column;
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


`

const Icon=styled.img`
    width: 40px;

`

const Service = () => {

    const [open, setOpen] = useState (false);
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
                       <MiniCard />
                       <MiniCard />
                       <MiniCard />


                    </CardContainer>
                    <Button onClick={() => setOpen(true)}> <Icon src={Play} /></Button>
                </Wrapper>

            </Right>


        </Container>
    
    )
}

export default Service
