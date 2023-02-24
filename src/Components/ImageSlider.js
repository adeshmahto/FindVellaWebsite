
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function ImageSlider() {
  const [content, setContent] = useState({});
  const handleContents = () => {
    axios.get('/contents').then(
      (response) => {
        setContent(response.data); // fill the array
    
      },
      (error) => {
        console.log(error)
        console.log("error")

      }

    );
  };
  useEffect(() => {
    handleContents()
  }, []);

  const c=content.length>0?content:"not content";
  console.log(c)

  var settings = {
    dots: true,
    infinite: true,
    speed: 490,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <Carousel {...settings}>
    <Wrap>
    <img src='hotel2.jpg'/>
    </Wrap>
    <Wrap>
    <img src='hotel4.jpg'/>
    </Wrap>
    <Wrap>
    <img src='hotel5.jpg'/>
    </Wrap>
    <Wrap>
    <img src='hotel3.jpg'/>
    </Wrap>
    <Wrap>
    <img src='hotel1.jpg'/>
    </Wrap>
    </Carousel>
  )
}

export default ImageSlider

const Carousel=styled(Slider)`
padding-top:20px;
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
cursor: pointer;
img{
  border:4px solid transparent;
  border-radius:4px;
  width:98%;
  height:320px;
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