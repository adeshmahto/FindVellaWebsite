import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

function Confirmation({ payment }) {

  const deletePay = (id) => {
    axios.delete(`payments/${id}`).then((response) => {
      console.log(response.data)
    })
  }
  return (
    <div>
      <TempContainer>
        <Container>
          <Details>
            <h3>Customer-Name : {payment.cardHolder}</h3>
            <h3>Card Number :{payment.cardNumber}</h3>
            <h3>Hotel-Name :{payment.hotelName}</h3>
            <h3 style={{color:'blue'}}>Status:  successful</h3>
          </Details>
        
          <button style={{marginBottom:200}} onClick={() => {
            deletePay(payment.payId)
          }}>Cancel</button>

        </Container>
      </TempContainer>
    </div>
  )
}

export default Confirmation
const HotelRating=styled.b`
position:relative;
top:176px;
right:70px;
color: rgb(6, 255, 51);


`

const HotelName=styled.b`
position:relative;
top:24px;
right:60px;

`
const HotelLoc=styled.b`
position:relative;
top:74px;
left:180px;

`
const HotelABout=styled.b`
position:relative;
top:125px;
right:70px;
color: rgb(254, 144, 0);

`


const Names=styled.div`
display:flex;
justify-content:start;
position:relative;
bottom:284px;
flex-direction: column;
right:350px;
`


const Details=styled.div`
display:flex;
justify-content:center;
align-items:start;
flex-direction: column;
margin-left:60px;
`


const TempContainer = styled.div`
display:flex;
justify-content:center;
padding:10px;
color:white;
`
const Container = styled.div`
height:40vh;
width:52vw;
background:#0AE0FF;
border-radius:5px;


`
const Detail = styled.div`

`