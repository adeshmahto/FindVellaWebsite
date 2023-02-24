import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



function Viewers() {




//     const notify=()=>toast("happy reading")
    
//   const [content, setContent] = useState({});
//   const handleContents = () => {
//     axios.get('/contents').then(
//       (response) => {
//         setContent(response.data); // fill the array
   
    
//       },
//       (error) => {
//         console.log(error)
//         console.log("error")

//       }

//     );
//   };
//   useEffect(() => {
//     handleContents()
//   }, []);

//   const c=content.length>0?content:"not content";
//   console.log(c)

 
  return (
    <Container>
      

        <Wrap  >
            <a href='/hotel1'>
            <img src='hotel1.jpg'/>
            </a>
      Hotel Asansol International
        </Wrap>
    
        <Wrap>
        <a href='/hotel2'>
        <img src='hotel2.jpg'/>
         
            </a>
            Hotel Asansol luxury
        </Wrap>
        <Wrap>
        <a href='/hotel3'>
        <img src='hotel3.jpg'/>
            </a>
            Vella Asansol International
        </Wrap>
        <Wrap>
        <a href='/hotel4'>
        <img src='hotel4.jpg'/>
            </a>
            Bengal Signature International
        </Wrap>
        <Wrap>
        <a href='/hotel5'>
        <img src='hotel5.jpg'/>
            </a>
            King Hotel International
        </Wrap>
      
       
    
    </Container>
  )
}

export default Viewers

const Text =styled.p`
`


const Container=styled.div`
overflow:hidden;

margin-top:30px;
display:grid;
padding:30px 0 26px;
grid-gap:25px;
grid-template-columns:repeat(5, minmax(0,1fr));


`
const Wrap =styled.div`
cursor:pointer;
border-radius:10px;
border:3px solid rgba(249,249,249,0.1);
box-shodow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
@media screen and (max-width:385px) {

    width:60px;
    height:70px;
}

&:hover{
    transform:scale(1.05);
    border-color: rgba(249,249,249,0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
rgb (0 0 0 / 72%) 0px 30px 22px -10px;
}

`
const Details=styled.div`
background:black;
height:100px;

`