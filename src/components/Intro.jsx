import React from 'react'
import styled from 'styled-components'
import Food from '../img/food.jpg'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
padding: 20px;
`

const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Right = styled.div`
width: 40%;
`
const Title = styled.h1`
font-size: 60px;
width: 60%;

`
const Desc = styled.p`
width: 60%;
font-size: 20px;
margin-top: 20px;
`

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Button = styled.button`
width: 150px;
height: 150px;
border-radius: 70%;
background-color: darkblue;
color: white;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
font-size: 20px;

`
const Contact = styled.div`
 display: flex;
 flex-direction: column;
`

const ContactText = styled.span`
color: grey;
margin-top: 5px;
`
const Phone = styled.span`
color: #f0667d;
`

const Image = styled.img`
width: 100%;
height: 100%;
background-position: center;

`

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Bubble Brew House</Title>
                <Desc>We create beautiful coffee, with sustainable practice and quality ingredients</Desc>
                <Info>
                <Button>TRY OUR COFFEE</Button>
                <Contact>Contact us here
                <Phone></Phone>
                <ContactText> call us here 9 867506 7898-</ContactText>
                </Contact>
                </Info>

            </Left>
            <Right><Image src={Food} /></Right>
            <AnimatedShapes />
            
        </Container>
    )
}

export default Intro
