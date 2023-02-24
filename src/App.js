import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import ImageSlider from './Components/ImageSlider';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HotelDetail from './Components/HotelDetail';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Viewers from './Components/Viewers';
import Reservationpage from './Components/Reservationpage';
import Payment from './Components/Payment';
import Confirmation from './Components/Confirmation';
import AllPayment from './Components/AllPayment';



function App() {
  const [content, setContent] = useState({});
 

   
  const handleContents = () => {
    axios.get('/hotels').then(
      (response) => {
        setContent(response.data); // fill the arra
        console.log(response.data)
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

  return (
    <div className="App">
    
 
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/hotel1' element={<HotelDetail x={content[0]}  src1={'room2.jpg'} src2={"kitchen1.jpg"} num={1}/>}/>
      <Route path='/hotel2' element={<HotelDetail x={content[1]}  src1={'room1.jpg'} src2={"kitchen1.jpg"}  num={2}/>}/>
      <Route path='/hotel3' element={<HotelDetail x={content[2]}  src1={'room3.jpg'} src2={"kitchen1.jpg"}  num={3}/>}/>
      <Route path='/hotel4' element={<HotelDetail x={content[3]}  src1={'room4.jpg'} src2={"kitchen1.jpg"}  num={4}/>}/>
      <Route path='/hotel5' element={<HotelDetail x={content[4]}  src1={'room5.jpg'}src2={"kitchen1.jpg"}  num={5}/>}/>
      
     
      <Route path='/reserv1' element={<Reservationpage x={content[0]} num={1}/>}/>
      <Route path='/reserv2' element={<Reservationpage x={content[1]} num={2}/>}/>
      <Route path='/reserv3' element={<Reservationpage x={content[2]} num={3}/>}/>
      <Route path='/reserv4' element={<Reservationpage x={content[3]} num={4}/>}/>
      <Route path='/reserv5' element={<Reservationpage x={content[4]} num={5}/>}/>


      <Route path='/payment1' element={<Payment x={content[0]}/>}/>
      <Route path='/payment2' element={<Payment x={content[1]}/>}/>
      <Route path='/payment3' element={<Payment x={content[2]}/>}/>
      <Route path='/payment4' element={<Payment x={content[3]}/>}/>
      <Route path='/payment5' element={<Payment x={content[4]}/>}/>





      <Route path='/confirmation' element={<Confirmation/>}/>
      <Route path='/viewers' element={<Viewers />}/>
      <Route path='/allpay' element={<AllPayment/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
