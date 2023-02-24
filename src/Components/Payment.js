import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import "./Payment.css";

function Payment({x}) {
    let c1=x!=null?x.name:null;

    const [pay,setPay]=useState({});

    const handling=(e)=>{
        pay.hotelName=c1;
        postingData(pay);
        e.preventDefault();
        

    }

    const postingData=(data)=>{
        axios.post('/payments',data).then((response)=>{
            console.log(response.data);

        },(error)=>{
            console.log(error)

        })
    }
  return (

    <TempContainer>
     
      <Container>
    <div class="right">

            <h3>PAYMENT DETAILS</h3>
            <form onSubmit={handling}>
        
                Accepted Card <br/>
                <img src="card1.png" width="200"/>
                <img src="card2.png" width="90"/>
                <br></br>


                <label for="cname">Card Holder Name </label>
                <input type="text" id="cname" name="cardname" placeholder="John Doe"
                onChange={(e)=>{
                    setPay({...pay,cardHolder:e.target.value})
                }}/>
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"
                  onChange={(e)=>{
                    setPay({...pay,cardNumber:e.target.value})
                }}/>

{/* 
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September"/> */}
                <div class="row">
                    {/* <div class="col-50">
                        <label for="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                    </div> */}

                    <div class="col-50">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352"
                         onChange={(e)=>{
                            setPay({...pay,civ:e.target.value})
                        }}/>
                    </div>
                </div>
                <button type="submit">Pay Bill</button>
          
                </form>
        </div>
        </Container>
        </TempContainer>
     
      
    
  )
}

export default Payment
const TempContainer=styled.div`
display:flex;
justify-content:center;
padding:10px;
`

const Container=styled.div`
height:80vh;
width:52vw;
background:#9900FB;
border-radius:5px;
`