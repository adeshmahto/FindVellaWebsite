import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import HotelDetail from './HotelDetail'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'




function Home() {
  return (
    <Container>
     
      <ImageSlider/>
      <Viewers/>
    
   
    </Container>
  )
}

export default Home

const Container=styled.main`
height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position: relative;
overflow-x:relative;
&:before{
  
  cover no-repeat fixed;
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}

@media screen and (max-width:385px) {

  height:100vh;

}

`