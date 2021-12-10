import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
margin-right: 50px;
padding: 20px;
-webkit-box-shadow: 0px 0px 17px rgba(0,0,0, 0.58);
box-shadow: 0px 0px 17px -11px rgba(0,0,0, 0.58);
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
const PriceContainer=styled.div`
display: flex;
align-items: center;
`
const Price=styled.span`
font-weight: bold;
font-size: 50px;

`
const Type=styled.button`
 width: 100px;
 height: 100px;
 margin: 10px 0;
 border-radius: 50%;
 border: none;
 background-color:  #27cec5;
 color: white;
 font-size: 20px;
 font-weight: bold;
 letter-spacing: 2px;

`
const List=styled.ul`
 list-style: none;

`
const ListItem=styled.li`
margin: 20px 0px;


`
const Button=styled.button`

border: none;
background-color: #ff4eca;
color: white;
font-size: 20px;
font-weight: bold;
letter-spacing: 2px;
padding: 15px;
border-radius: 50%;
width: 100px;
height: 100px;
`


const PriceCard = () => {
    return (
        <Container>
          <PriceContainer>
              <Price>Menu</Price>
              </PriceContainer>
              <Type>Bubble Coffee</Type>
              <List>
                  <ListItem> 200 Hand-Crafted Flavors</ListItem>
                  <ListItem> Exclusive Custom Coffee Beans</ListItem>
                  <ListItem>50+ Types of coffee</ListItem>
                  <ListItem> Premium Blends</ListItem>
              </List>
              <Button>Bubble Juice</Button>
          
            
        </Container>
    )
}

export default PriceCard
