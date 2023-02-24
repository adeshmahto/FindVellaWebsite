import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import './Reserv.css';
function Reservationpage({x,num}) {
  let loc=null;
  if(num==1){
    loc="/payment1"
    }else if(num==2){
      loc="/payment2"
    }
    else if(num==3){
      loc="/payment3"
    }
    else if(num==4){
      loc="/payment4"
    }
    else if(num==5){
      loc="/payment5"
    }
   

  let c1=x!=null?x.price:null;
  let num3=parseInt(c1)

  const [value,setValue]=useState({
    i:"1",
  });
  const [value1,setValue1]=useState({
    i:"1",
  });
  console.log(value.i+"value1")
  console.log(value1.i+"value2")

  let num1=parseInt(value.i);
  let num2=parseInt(value1.i)
let totalPrice=(num1-num2)*num3


let temp=null;
    const [detail,setDetail]=useState({
      taking:0
    });

    const handleForm=(e)=>{
        console.log(detail);
        postData(detail);
        e.preventDefault();
      }
    const postData=(data)=>{
        axios.post('/reserves',data).then((response)=>{
            console.log(response.data)
        },(error)=>{
            console.log(error)
        })

    }
  return (

    
    <TempContainer>
     
      
<Container>
        <form onSubmit={handleForm}>

        <div class="elem-group">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="visitor_name" placeholder="John Doe"  onChange={(e)=>{
                    setDetail({...detail,user_name:e.target.value})
                }}  required/>
  </div>
  <div class="elem-group">
    <label for="email">Your E-mail</label>
    <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" required
    onChange={(e)=>{
        setDetail({...detail,email:e.target.value})
    }}/>
    <div class="elem-group">
    <label for="phone">Your Phone</label>
    <input type="text" id="phone" name="visitor_phone" placeholder="498-348-3872" required
     onChange={(e)=>{
        setDetail({...detail,phoneno:e.target.value})
    }}/>
  </div>
  
  </div>
  <hr/>
  <div class="elem-group inlined">
    <label for="adult">Adults</label>
    <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required/>
  </div>
  <div class="elem-group inlined">
    <label for="child">Children</label>
    <input type="number" id="child" name="total_children" placeholder="2" min="0" required/>
  </div>
  <div class="elem-group inlined">
    <label for="checkin-date">Check-in Date</label>
    <input type="date" id="checkin-date" name="checkin" required
     onChange={(e)=>{
      let arr=e.target.value.split("-");
    
      setValue1({...value1,i:arr[2]});
        setDetail({...detail,checkIn:e.target.value})
    }}/>
  </div>
 {
  
 }
  <div class="elem-group inlined">
    <label for="checkout-date">Check-out Date</label>
    <input type="date" id="checkout-date" name="checkout" required
     onChange={(e)=>{
    let arr=e.target.value.split("-");

    setValue({...value,i:arr[2]});


        setDetail({...detail,checkOut:e.target.value})
    }}/>
  </div>
 
  <button type="submit"><a style={{textDecoration:'none',color:'white'}} href={loc}>Pay ${totalPrice}</a>  </button>
</form>
</Container>
</TempContainer>
  )


}

export default Reservationpage




const TempContainer=styled.div`
display:flex;
justify-content:center;
padding:10px;
`

const Container=styled.div`
height:96vh;
width:52vw;
background:#0AE0FF;
border-radius:5px;
`