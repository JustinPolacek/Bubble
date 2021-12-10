import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";
import How from '../img/how.jpeg';
import Table from '../img/table.jpeg';
import Food from '../img/food.jpg';



const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Image =styled.img`
  height: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: 50%;
    width: 100%;
    margin-top: 10px;
    object-fit: cover;
 
`

const Price = () => {

  return (
    <Container>
      <Image src={How} />
      <Image src={Table} />
      <Image src={Food} />
    </Container>
  );
};

export default Price;