import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #4e6bff;
opacity: 0.7;
position: absolute;
top: -60px;
left: -60px;
animation: square 5s linear alternate infinite;
@keyframes square{
    to{
        transform: translate(50vw, 50vh);
    }
}
`
const Circle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #ff4eca;
position: absolute;
top: 200px;
left: -100px;
animation: circle 7s linear alternate infinite;
@keyframes circle{
    to{
        transform: translate(50vw, -50vh);
    }
}
`
const Rectangle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #4efff6;
opacity: 0.5;
position: absolute;
top: 400px;
left: -50px;
animation: rectangle 10s linear alternate infinite;
@keyframes rectangle{
    to{
        transform: translate(50vw, -50vh);
    }
}
`

const AnimatedShapes = () => {
    return (
        <>
        <Square />
        <Circle />
        <Rectangle />
            
        </>
    )
}

export default AnimatedShapes
