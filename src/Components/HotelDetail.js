
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reservationpage from "./Reservationpage";


function HotelDetail({x,src1,src2,num}) {
  let loc=null;
 if(num==1){
 loc="/reserv1"
 }else if(num==2){
  loc="/reserv2"
 }
 else if(num==3){
  loc="/reserv3"
 }
 else if(num==4){
  loc="/reserv4"
 }
 else if(num==5){
  loc="/reserv5"
 }

   let c1=x!=null?x.name:null;
   let c2=x!=null?x.location:null;
   let c3=x!=null?x.about:null;
   let c4=x!=null?x.price:null;

    
// let c=null;
//  if(content!=null){
//   c=content[0].name;

//  }else{
//   c=null;
//  }





    var settings = {
        dots: true,
        infinite: true,
        speed: 490,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false}




        

  return (
       <>

       <Container>

       <Carousel {...settings}>
    <Wrap>
    <img src={src1}/>
    </Wrap>
    <Wrap>
    <img src={src2}/>
    </Wrap>
    </Carousel>
    <Details>
    <h2>Hotel-Name : </h2> 
    <h2>Hotel-Location :</h2>
    <h2>Hotel-About :</h2>
    <h2>Room-Price :</h2>
    </Details>
    <Names>
    <HotelName>{c1}</HotelName>
    <HotelLoc> {c2}</HotelLoc>
    <HotelABout>{c3}</HotelABout>
    <HotelRating>${c4} per/day</HotelRating>
    </Names>

    <Button> <a style={{textDecoration:'none' , color:'white'}} href={loc}> Book Now</a></Button>

       </Container>





       </>
  )
}

export default HotelDetail

const Button=styled.button`
background-image: linear-gradient(90deg,#0AE0FF,#9900FB);
color: white;
position: relative;
bottom: 359px;
border-radius: 5px;
height: 40px;
width: 200px;
left: 604px;
box-shadow: #060b26;
text-decoration: none;
`
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

const Container=styled.div`

`
const Details=styled.div`
display:flex;
justify-content:center;
align-items:start;
flex-direction: column;
margin-left:60px;
`

const Carousel=styled(Slider)`

margin-left:2vw;
padding-top:50px;
ul li button{               // down buttom slider dot
  &:before{
    font-size:10px;
    color:rgb(150,150,171);
  }
}

li.slick-active button:before{
  color:white;
}
.slick-list{
  overflow:visible;
}
button {
  z-index:1;
}

`

const Wrap=styled.div`
border:2px solid black;
border-radius:3px;
cursor: pointer;
img{
  border:4px solid transparent;
  border-radius:4px;
  width:95vw;
  height:300px;
  box-shodow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
  transition-duration :300ms;
  overflow:hidden;

  &:hover{
    border:4px solid rgba(249,249,249,0.8);
  }
 @media screen and (max-width:385px) {
    height:165px;
  } 
  
  }


}
`