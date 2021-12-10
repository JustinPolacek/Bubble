import React from 'react'
import styled from 'styled-components';
import Search from '../img/search.png';

const Container =styled.div`
width: 100px;
height: 100px;
border-radius: 5px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
color: #5a5959;
-webkit-box-shadow: 0px 0px 17px rgba(0,0,0, 0.58);
box-shadow: 0px 0px 17px -11px rgba(0,0,0, 0.58);


`

const Image = styled.img`
 color: white;
 width: 20px;
`

const Text =styled.span`
margin-top: 10px;
text-align: center;

`

const MiniCard = () => {
    return (
        <Container>
            <Image src={Search} />
            <Text>We creat the beauty</Text>
        </Container>
    )
}

export default MiniCard
