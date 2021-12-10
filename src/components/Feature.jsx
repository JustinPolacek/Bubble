import styled from 'styled-components';
import Phone from '../img/phone.png'
import App from '../img/app.jpg'
const Container = styled.div`
 display: flex;
 @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`
const Left = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
    display: none;
  }
`

const Right = styled.div`
display: flex;
width: 50%;
flex-direction: column;
@media only screen and (max-width: 480px) {
    width: 100%;
  }

`

const Image = styled.img`
width: 80%;
`
const Title = styled.span`
font-size: 70px;
color: #ff4eca;
@media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`
const Desc = styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;

`
const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
color: #4e6bff;
margin-top: 30px;
`
const Button = styled.button`
width: 120px;
height: 120px;
border-radius: 70%;
background-color: #58cfc9;
color: white;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
font-size: 20px;
margin-top: 30px;
`


const Feature = () => {
    return (
    
        <Container>
            <Left> <Image src={App} /></Left>
            <Right>
              <Title> <b>Great</b> Coffee
               <br/>
                      <b>Great</b> Taste
              </Title>
              <SubTitle> We serve our customers the Bubble way</SubTitle>
              <Desc> We have been creating coffee since 2005. With our
                     secret "Bubble" ingredients and techniques we have created the
                      "Bubble way". Which is now The only way to drink coffee
              </Desc>
              <Desc> We understand that creating this sort of complex way of coffee
                    takes more resources. But it is worth every sip.
              </Desc>
              <Button>LEARN MORE</Button>




            </Right>
        </Container>
    )
}

export default Feature
